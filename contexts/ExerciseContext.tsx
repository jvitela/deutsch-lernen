import React from "react";

export interface Exercise {
  index: number;
  next: (isSuccess: boolean) => void;
}

export const ExerciseContext = React.createContext<Exercise>({
  index: 0,
  next: (_: boolean) => {},
});
