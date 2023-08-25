// function to compare two characters order

import { Character, PositionIdentifier } from "types";

const BASE = Number.MAX_SAFE_INTEGER;

export function comparePosition(
  position1: PositionIdentifier[],
  position2: PositionIdentifier[]
): number {
  for (let i = 0; i < Math.min(position1.length, position2.length); i++) {
    const comp = comparePositionIdentifiers(position1[i], position2[i]);
    if (comp !== 0) {
      return comp;
    }
  }
  if (position1.length > position2.length) return 1;
  else if (position1.length < position2.length) return -1;
  return 0;
}

function comparePositionIdentifiers(
  id1: PositionIdentifier,
  id2: PositionIdentifier
): number {
  if (id1.position > id2.position) return 1;
  else if (id1.position < id2.position) return -1;
  else {
    if (id1.userSiteIdentifier > id2.userSiteIdentifier) return 1;
    else if (id1.userSiteIdentifier < id2.userSiteIdentifier) return -1;
    return 0;
  }
}

function fromIdentifierList(identifiers: PositionIdentifier[]): number[] {
  return identifiers.map((ident) => ident.position);
}

function toIdentifierList(
  n: number[],
  before: PositionIdentifier[],
  after: PositionIdentifier[],
  creationSite: string
): PositionIdentifier[] {
  // Implements the constructPosition rules from the Logoot paper
  return n.map((digit, index) => {
    if (index === n.length - 1) {
      return { position: digit, userSiteIdentifier: creationSite };
    } else if (index < before.length && digit === before[index].position) {
      return {
        position: digit,
        userSiteIdentifier: before[index].userSiteIdentifier,
      };
    } else if (index < after.length && digit === after[index].position) {
      return {
        position: digit,
        userSiteIdentifier: after[index].userSiteIdentifier,
      };
    } else {
      return { position: digit, userSiteIdentifier: creationSite };
    }
  });
}

function substract(n1: number[], n2: number[]) {
  let carry = 0;
  const diff: number[] = Array(Math.max(n1.length, n2.length));
  for (let i = diff.length - 1; i >= 0; i--) {
    const d1 = (n1[i] || 0) - carry;
    const d2 = n2[i] || 0;
    if (d1 < d2) {
      carry = 1;
      diff[i] = d1 + BASE - d2;
    } else {
      carry = 0;
      diff[i] = d1 - d2;
    }
  }
  return diff;
}

export function add(n1: number[], n2: number[]): number[] {
  let carry = 0;
  const diff: number[] = Array(Math.max(n1.length, n2.length));
  for (let i = diff.length - 1; i >= 0; i--) {
    const sum = (n1[i] || 0) + (n2[i] || 0) + carry;
    carry = Math.floor(sum / BASE);
    diff[i] = sum % BASE;
  }
  if (carry !== 0) {
    throw new Error(
      "sum is greater than one, cannot be represented by this type"
    );
  }
  return diff;
}

//non final version
function increment(n1: number[], delta: number[]): number[] {
  const firstNonzeroDigit = delta.findIndex((x) => x !== 0);
  if (delta[firstNonzeroDigit] > 1) {
    delta[firstNonzeroDigit] = 1;
    return add(n1, delta);
  } else {
    delta[firstNonzeroDigit] = 0;
    delta.push(1);
    return add(n1, delta);
  }
}

//
export function cons<T>(head: T, rest: T[]): T[] {
  return [head].concat(rest);
}

export function head<T>(list: T[]): T {
  return list[0];
}

export function rest<T>(list: T[]): T[] {
  return list.slice(1);
}

// generating position for newly inserted character between two positions

export function generatePositionIdentifier(
  position1: PositionIdentifier[],
  position2: PositionIdentifier[],
  siteIdentifier: string
): PositionIdentifier[] {
  const head1 =
    position1.length > 0
      ? position1[0]
      : { position: 0, userSiteIdentifier: siteIdentifier };
  const head2 =
    position2.length > 0
      ? position2[0]
      : {
          position: Number.MAX_SAFE_INTEGER,
          userSiteIdentifier: siteIdentifier,
        };

  if (head1.position !== head2.position) {
    // first case position are different in the indetifiers of the heads
    const n1 = (position1.length > 0) ? fromIdentifierList(position1) : [0];
    const n2 = (position2.length > 0) ? fromIdentifierList(position2) : [Number.MAX_SAFE_INTEGER] ;

    const delta = substract(n2, n1);
    const next = increment(n1, delta);
    return toIdentifierList(next, position1, position2, siteIdentifier);
  } else {
    if (head1.userSiteIdentifier < head2.userSiteIdentifier) {
      return cons(
        head1,
        generatePositionIdentifier(rest(position1), [], siteIdentifier)
      );
    } else if (head1.userSiteIdentifier === head2.userSiteIdentifier) {
      return cons(
        head1,
        generatePositionIdentifier(
          rest(position1),
          rest(position2),
          siteIdentifier
        )
      );
    } else {
      throw new Error("invalid site ordering");
    }
  }
}

// converte identification array into a string

export function convertIdToString(id: PositionIdentifier[]) {
  return id.reduce((acc, current) => {
    return String(acc) + String(current.position);
  }, "");
}
