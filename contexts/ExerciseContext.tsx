import React, { ReactElement, useCallback, useContext, useState } from "react";
import range from "lodash/range";

type ArrayOfExercises = ReadonlyArray<ReactElement>;

// TODO: Remove
export interface Exercise {
  index: number;
  next: (isSuccess: boolean) => void;
}

export const ExerciseContext = React.createContext<Exercise>({
  index: 0,
  next: (_isSuccess: boolean) => {},
});

interface Exercise2 {
  exercises: ArrayOfExercises;
  index: number;
  total: number;
  numTries: number;
  numFailure: number;
  numSuccess: number;
  isFinished: boolean;
  next: (isSuccess: boolean) => void;
}

const ExerciseContext2 = React.createContext<Exercise2>({
  exercises: [],
  index: 0,
  total: 0,
  numTries: 0,
  numFailure: 0,
  numSuccess: 0,
  isFinished: false,
  next: (_isSuccess: boolean) => {},
});

interface ExerciseProviderOptions {
  exercises: ArrayOfExercises;
  children: React.ReactNode;
}

export function ExerciseProvider({
  exercises,
  children,
}: ExerciseProviderOptions) {
  const [pos, setPos] = useState(0);
  const [indexes, setIndexes] = useState(() => range(exercises.length));

  const total = exercises.length;
  const isFinished = pos >= indexes.length;
  const index = isFinished ? total : indexes[pos];
  const numFailure = indexes.length - total;
  const numSuccess = pos - numFailure;
  const numTries = pos;

  const next = useCallback(
    (isSuccess: boolean) => {
      if (isFinished) {
        return;
      }

      // Always increment the position
      setPos((pos) => pos + 1);

      if (!isSuccess) {
        // On fail, just append the index again to the end
        setIndexes((indexes) => indexes.concat(index));
      }
    },
    [index, isFinished]
  );

  return (
    <ExerciseContext2.Provider
      value={{
        exercises,
        index,
        total,
        isFinished,
        numFailure,
        numSuccess,
        numTries,
        next,
      }}
    >
      {children}
    </ExerciseContext2.Provider>
  );
}

export const useExerciseContext = () => useContext(ExerciseContext2);

export const ActiveExercise = () => {
  const { exercises, numTries, index } = useExerciseContext();
  return <React.Fragment key={numTries}>{exercises[index]}</React.Fragment>;
};
