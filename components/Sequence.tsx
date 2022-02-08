import React, { ReactElement, useContext, useEffect, useState } from "react";
import {
  ActiveExercise,
  ExerciseProvider,
  useExerciseContext,
} from "contexts/ExerciseContext";

interface SequenceProps {
  children: ReactElement[];
}

export function Sequence({ children }: SequenceProps) {
  const { next } = useExerciseContext();

  return (
    <ExerciseProvider exercises={children}>
      <Sentence nextExcercise={next} />
    </ExerciseProvider>
  );
}

interface SentenceProps {
  nextExcercise: (isSuccess: boolean) => void;
}

function Sentence({ nextExcercise }: SentenceProps) {
  const { isFinished, numFailure } = useExerciseContext();

  useEffect(() => {
    if (isFinished) {
      nextExcercise(numFailure === 0);
    }
  }, [isFinished, nextExcercise, numFailure]);

  return <ActiveExercise />;
}
