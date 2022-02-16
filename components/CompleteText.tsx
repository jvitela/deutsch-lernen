import React, { useState } from "react";
import { EntryContext } from "contexts/EntryContext";
import { Button } from "components/Button";
import { NextButton } from "components/NextButton";

export function CompleteText({ children }: { children: React.ReactNode }) {
  const [isReady, setReady] = useState(false);
  const [results, setResults] = useState({ success: 0, error: 0 });
  const setAsReady = () => setReady(true);
  const setResult = (isSuccess: boolean) => {
    setResults((prev) => ({
      success: prev.success + (isSuccess ? 1 : 0),
      error: prev.error + (isSuccess ? 0 : 1),
    }));
  };

  return (
    <form className="w-full flex flex-col justify-between">
      <main>
        <EntryContext.Provider value={{ isReady, setResult }}>
          {children}
        </EntryContext.Provider>
      </main>

      <footer className="md:mt-2">
        {isReady ? (
          <NextButton variant={getVariant(results)} />
        ) : (
          <Button isSubmit onClick={setAsReady}>
            Check
          </Button>
        )}
      </footer>
    </form>
  );
}

function getVariant(results: { success: number; error: number }) {
  if (!results.success && results.error) {
    return "error";
  }

  if (results.success && !results.error) {
    return "success";
  }

  return "warning";
}
