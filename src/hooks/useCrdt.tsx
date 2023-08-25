import { useState } from "react";
import { Character, Crdt, DeletionRange, InsertionRange } from "../types";
import {
  comparePosition,
  convertIdToString,
  generatePositionIdentifier,
} from "../utils/crdt";
const useCrdt = (documentId?: string) => {
  // this crdt needs to be either created from scratch or retrived from the local storage
  const [crdt, setCrdt] = useState<Crdt>({
    orderedIndexes: [],
    characters: {},
  });

  function insertLocalChangeRange(insertionRange: InsertionRange) {
    let crdtCopy = { ...crdt };
    let insertedChars: Character[] = [];
    for (let i = insertionRange.from; i < insertionRange.to; i++) {
      let char = insertionRange.str[i - insertionRange.from];

      const identifier = generatePositionIdentifier(
        crdtCopy.characters[crdtCopy.orderedIndexes[i - 1]]?.positionId || [],
        crdtCopy.characters[crdtCopy.orderedIndexes[i]]?.positionId || [],
        "site identifier (in our case it will be the users email)"
      );

      const character: Character = {
        character: char,
        positionId: identifier,
      };

      insertedChars.push(character);

      // the id here is a stringification of the identifiers list

      let id = convertIdToString(identifier);
      let updatedIndexes = [...crdtCopy.orderedIndexes];
      updatedIndexes.splice(i, 0, id);
      let updatedChars = { ...crdtCopy.characters };
      updatedChars[id] = character;

      crdtCopy.characters = updatedChars;
      crdtCopy.orderedIndexes = updatedIndexes;
    }

    setCrdt(crdtCopy);
    return insertedChars;
  }

  // function insertLocalChange(index: number, char: string) {
  //   const identifier = generatePositionIdentifier(
  //     crdt?.characters[crdt.orderedIndexes[index - 1]]?.positionId || [],
  //     crdt?.characters[crdt.orderedIndexes[index]]?.positionId || [],
  //     "site identifier (in our case it will be the users email)"
  //   );

  //   const character: Character = {
  //     character: char,
  //     positionId: identifier,
  //   };

  //   // the id here is a stringification of the identifiers list

  //   let id = convertIdToString(identifier);
  //   let updatedIndexes = [...crdt.orderedIndexes];
  //   updatedIndexes.splice(index, 0, id);
  //   let updatedChars = { ...crdt.characters };
  //   updatedChars[id] = character;
  //   let updatedCrdt: Crdt = {
  //     orderedIndexes: updatedIndexes,
  //     characters: updatedChars,
  //   };
  //   setCrdt(updatedCrdt);
  // }

  function deleteLocalChangeRange(deletionRange: DeletionRange) {
    let crdtCopy = { ...crdt };
    let deletedChars: Character[] = [];

    for (let i = deletionRange.from; i < deletionRange.to; i++) {
      let id = crdtCopy.orderedIndexes[i];
      let updatedCharacters = { ...crdtCopy.characters };
      deletedChars.push(updatedCharacters[id]);
      delete updatedCharacters[id];
      crdtCopy.characters = updatedCharacters;
    }

    let updatedOrderedIndexes = [...crdtCopy.orderedIndexes];
    updatedOrderedIndexes.splice(
      deletionRange.from,
      deletionRange.to - deletionRange.from
    );
    crdtCopy.orderedIndexes = updatedOrderedIndexes;

    setCrdt(crdtCopy);
  }

  // function deleteLocalChange(index: number) {
  //   let id = crdt.orderedIndexes[index];
  //   let updatedOrderedIndexes = [...crdt.orderedIndexes];
  //   updatedOrderedIndexes.splice(index, 1);
  //   let updatedCharacters = { ...crdt.characters };
  //   delete updatedCharacters[id];

  //   setCrdt({
  //     orderedIndexes: updatedOrderedIndexes,
  //     characters: updatedCharacters,
  //   });
  // }

  //once we receive a

  function insertDistanteChange(char: Character) {
    // to insert distante change we need to find the index of the element greater than ours
    let indexOfLeftNeighbor = -1;
    for (let i = 0; i < crdt.orderedIndexes.length; i++) {
      if (
        comparePosition(
          char.positionId,
          crdt.characters[crdt.orderedIndexes[i]].positionId
        ) < 0
      ) {
        indexOfLeftNeighbor = i - 1;
        break;
      }
    }

    let id = convertIdToString(char.positionId);
    if (indexOfLeftNeighbor < 0) {
      crdt.orderedIndexes.push(id);
      crdt.characters[id] = char;
    } else {
      crdt.orderedIndexes.splice(indexOfLeftNeighbor + 1, 0, id);
      crdt.characters[id] = char;
    }
  }

  function deleteDistanteChange(char: Character) {
    // to insert distante change we need to find the index of the element greater than ours
    // we need to create a func
    let stringfiedPositionId = convertIdToString(char.positionId);
    let charIndex = crdt.orderedIndexes.findIndex(
      (id) => stringfiedPositionId === id
    );
    if (charIndex > 0) {
      crdt.orderedIndexes.slice(charIndex, 1);
      delete crdt.characters[stringfiedPositionId];
    }
  }

  return {
    crdt,
    // insertLocalChange,
    // deleteLocalChange,
    deleteLocalChangeRange,
    insertDistanteChange,
    deleteDistanteChange,
    insertLocalChangeRange,
  };
};

export default useCrdt;
