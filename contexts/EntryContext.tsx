import React from "react";

export const EntryContext = React.createContext({
  isReady: false,
  setResult: (result: boolean): void => {},
});
