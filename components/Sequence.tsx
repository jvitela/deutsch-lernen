import React, { useContext, useState } from "react";
import { ExerciseContext } from "contexts/ExerciseContext";

interface SequenceProps {
  children: React.ReactNode;
}

export function Sequence({ children }: SequenceProps) {
  const { next: nextExcercise } = useContext(ExerciseContext);
  const [index, setIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const sentences = React.Children.toArray(children);
  const current = sentences[index];

  const next = (isSuccess: boolean) => {
    if (!isSuccess) {
      setHasError(true);
    }
    if (index + 1 < sentences.length) {
      setIndex((idx) => idx + 1);
    } else {
      nextExcercise(!hasError);
    }
  };

  return (
    <ExerciseContext.Provider value={{ index, next }}>
      {current}
    </ExerciseContext.Provider>
  );
}
