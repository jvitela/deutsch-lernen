import React, { useContext, useState } from "react";
import { ExerciseContext } from "contexts/ExerciseContext";

interface SequenceProps {
  children: React.ReactNode;
}

export function Sequence({ children }: SequenceProps) {
  const { next: nextExcercise } = useContext(ExerciseContext);
  const [index, setIndex] = useState(0);
  const sentences = React.Children.toArray(children);
  const current = sentences[index];

  const next = () => {
    if (index + 1 < sentences.length) {
      setIndex((idx) => idx + 1);
    } else {
      nextExcercise();
    }
  };

  return (
    <ExerciseContext.Provider value={{ index, next }}>
      {current}
    </ExerciseContext.Provider>
  );
}
