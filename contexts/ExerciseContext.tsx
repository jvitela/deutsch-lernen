import React, { ReactElement, useCallback, useContext, useState } from "react";
import range from "lodash/range";

type ArrayOfExercises = ReadonlyArray<ReactElement> | ReadonlyArray<object>;

type Exercise = {
  exercises: ArrayOfExercises;
  index: number;
  total: number;
  numTries: number;
  numFailure: number;
  numSuccess: number;
  isFinished: boolean;
  next: (isSuccess: boolean) => void;
};

const ExerciseContext = React.createContext<Exercise>({
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
  tryOnce: boolean;
  children: React.ReactNode;
}

export function ExerciseProvider({
  exercises,
  tryOnce = false,
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

      if (!isSuccess && !tryOnce) {
        // On fail, just append the index again to the end
        setIndexes((indexes) => indexes.concat(index));
      }
    },
    [index, isFinished, tryOnce]
  );

  return (
    <ExerciseContext.Provider
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
    </ExerciseContext.Provider>
  );
}

export const useExerciseContext = () => useContext(ExerciseContext);

export const ActiveExercise = () => {
  const { exercises, numTries, index } = useExerciseContext();
  return <React.Fragment key={numTries}>{exercises[index]}</React.Fragment>;
};
