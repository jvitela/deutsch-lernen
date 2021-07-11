import React, { useContext, useEffect, useRef, useState } from "react";
import { EntryContext } from "contexts/EntryContext";
import _upperFirst from "lodash/upperFirst";
import _trim from "lodash/trim";

interface EntryProps
  extends JSX.IntrinsicAttributes,
    React.ClassAttributes<HTMLInputElement>,
    React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  upperFirst?: boolean;
}

const text =
  "inline-block relative leading-4 border-b-2 w-16 mx-1 h-5 overflow-visible";

type EntryState = "editing" | "submitted" | "success" | "error";

const cls = {
  success: "text-green-600",
  error: "text-red-600 line-through",
  question: `${text} text-blue-400 border-gray-400 focus:outline-none focus:border-blue-400 focus:bg-blue-50`,
  correction: "absolute left-0 -bottom-4 text-green-600",
  correct: `${text} border-green-400`,
  wrong: `${text} border-red-400`,
};

export function Entry({ value, upperFirst, ...rest }: EntryProps) {
  const { isReady, setResult } = useContext(EntryContext);
  const [state, setState] = useState<EntryState>("editing");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isReady && state === "editing") {
      setState("submitted");
    }
  }, [isReady, state]);

  useEffect(() => {
    if (state === "submitted" && inputRef.current) {
      const isSuccess = value === getValue(inputRef.current, !!upperFirst);
      setState(isSuccess ? "success" : "error");
      setResult(isSuccess);
    }
  }, [setResult, state, upperFirst, value]);

  console.log("Entry", { state, value, input: inputRef.current?.value });
  return (
    <span className={getEntryClassName(state)}>
      <input
        {...rest}
        ref={inputRef}
        className={getInputClassName(state)}
        disabled={isReady}
      />
      {state === "error" && <span className={cls.correction}>{value}</span>}
    </span>
  );
}

function getValue(inputEl: HTMLInputElement, upperFirst: boolean) {
  const inputValue = upperFirst ? _upperFirst(inputEl.value) : inputEl.value;

  return _trim(inputValue);
}

function getInputClassName(state: EntryState) {
  return state === "success"
    ? cls.success
    : state === "error"
    ? cls.error
    : cls.question;
}

function getEntryClassName(state: EntryState) {
  return state === "success" ? cls.correct : state === "error" ? cls.wrong : "";
}
