import React, { useContext } from "react";
import { ExerciseContext } from "contexts/ExerciseContext";
import { Button } from "components/Button";

interface NextButtonProps {
  variant: "success" | "error" | "warning";
}

export function NextButton({ variant }: NextButtonProps) {
  const { next } = useContext(ExerciseContext);
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
