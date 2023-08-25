export interface DocumentReference {
  creationDate: string;
  owner: {
    username: string;
    email: string;
  };
  title: string;
  id: string;
}

export interface Character {
  character: string;
  positionId: PositionIdentifier[];
}

export interface PositionIdentifier {
  position: number;
  userSiteIdentifier: string;
}

export interface Crdt {
  orderedIndexes: string[];
  characters: {
    [index: string]: Character;
  };
}

export interface Range {
  from: number;
  to: number;
}

export interface InsertionRange {
  from: number;
  to: number;
  str: string;
}

export interface DeletionRange {
  from: number;
  to: number;
}
