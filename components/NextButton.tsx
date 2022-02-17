import React from "react";
import { useExerciseContext } from "contexts/ExerciseContext";
import { Button } from "components/Button";

interface NextButtonProps {
  variant: "success" | "error" | "warning" | "default";
}

export function NextButton({ variant }: NextButtonProps) {
  const { next } = useExerciseContext();
  return (
    <Button
      onClick={() => next(variant === "success")}
      variant={variant}
      autoFocus
    >
      Next
    </Button>
  );
}
