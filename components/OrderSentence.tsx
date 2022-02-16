import React, { useState } from "react";
import { useTogglesList } from "hooks/useTogglesList";
import { PillButton } from "components/PillButton";
import { Button } from "components/Button";
import { NextButton } from "components/NextButton";
import upperFirst from "lodash/upperFirst";

export interface OrderSentenceProps {
  instructions: string;
  answers: string[];
  options: string[];
}

type Status = "ready" | "success" | "error";

export function OrderSentence({
  instructions,
  answers,
  options,
}: OrderSentenceProps) {
  const [status, setStatus] = useState<Status>("ready");
  const toggles = useTogglesList(options);

  const onClick = () => {
    const input = upperFirst(
      toggles.selected.map((opt) => opt.value).join(" ")
    );
    console.log({
      result: input in answers,
      input,
      answers,
    });
    setStatus(answers.some((curr) => curr === input) ? "success" : "error");
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <header className="p-4">
        <p>{instructions}</p>
      </header>
      <main className="flex flex-col grow">
        <div className="grow p-4 bg-gray-100">
          {toggles.selected.map((option) => (
            <PillButton
              key={option.id}
              value={option.value}
              onClick={() => toggles.unselect(option)}
            />
          ))}
        </div>
        <div className="p-4 mt-4">
          {toggles.all.map((option) => (
            <PillButton
              key={option.id}
              value={option.value}
              onClick={() =>
                option.isSelected
                  ? toggles.unselect(option)
                  : toggles.select(option)
              }
              isDisabled={option.isSelected}
            />
          ))}
        </div>
        {status === "error" && (
          <p className="text-red-700 p-4">
            {answers.map((answer, idx) => (
              <span key={idx}>
                {answer}
                <br />
              </span>
            ))}
          </p>
        )}
      </main>
      <footer className="p-4">
        {status === "ready" ? (
          <Button onClick={onClick}>Next</Button>
        ) : (
          <NextButton variant={status} />
        )}
      </footer>
    </div>
  );
}
