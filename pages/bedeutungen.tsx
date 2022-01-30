import Head from "next/head";
import React, { useReducer, useEffect, useState, useContext } from "react";
import shuffle from "lodash/shuffle";
import range from "lodash/range";
import { useNoSSR } from "hooks/useNoSSR";
import { ExerciseContext } from "contexts/ExerciseContext";
import { Loading } from "components/Loading";
import { Button, ButtonVariants } from "components/Button";

interface SelectPairsOptions {
  pairs: Record<string, string>;
}

type Status = "idle" | "success" | "error" | "finished";

interface Item {
  key: string;
  value: string;
  status: "enabled" | "selected" | "disabled";
}

interface State {
  status: Status;
  items: ReadonlyArray<Item>;
  table: ReadonlyArray<ReadonlyArray<number>>;
  selectedKey?: number;
  selectedValue?: number;
}

interface Action {
  type: "selectKey" | "selectValue" | "setResult" | "clearResult";
  payload?: number;
}

function isSuccess({ items, selectedKey, selectedValue }: State): boolean {
  if (selectedValue === undefined || selectedKey === undefined) return false;
  return items[selectedKey] === items[selectedValue];
}

function isFinished(items: State["items"]): boolean {
  return items.every((item) => item.status === "disabled");
}

function selectMatchingItem(state: State): State["items"] {
  const { items, selectedKey, selectedValue } = state;
  return items.map((item, idx) =>
    idx === selectedKey && selectedKey === selectedValue
      ? {
          ...item,
          status: "selected",
        }
      : item
  );
}

function clearSelectedItem(items: State["items"]): State["items"] {
  return items.map((item) =>
    item.status === "selected"
      ? {
          ...item,
          status: "disabled",
        }
      : item
  );
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "selectKey":
      return {
        ...state,
        selectedKey: action.payload,
      };
    case "selectValue":
      return {
        ...state,
        selectedValue: action.payload,
      };
    case "setResult":
      return {
        ...state,
        items: selectMatchingItem(state),
        status: isSuccess(state) ? "success" : "error",
      };
    case "clearResult": {
      const items = clearSelectedItem(state.items);
      const status = isFinished(items) ? "finished" : "idle";
      return {
        ...state,
        status,
        items,
        selectedKey: undefined,
        selectedValue: undefined,
      };
    }
  }
}

function mapItems(pairs: Record<string, string>): ReadonlyArray<Item> {
  return Object.entries(pairs).map(([key, value]) => ({
    key,
    value,
    status: "enabled",
  }));
}

function getBtnVariant(
  status: Status,
  idx: number,
  selectedIdx?: number
): ButtonVariants {
  if (idx === selectedIdx) {
    if (status === "success" || status === "error") {
      return status;
    }
    return "default";
  }
  return "secondary";
}

function init(pairs: SelectPairsOptions["pairs"]): State {
  const items = mapItems(pairs);
  const indexes = range(items.length);
  return {
    status: "idle",
    items,
    table: [
      shuffle(indexes), // keys
      shuffle(indexes), // values
    ],
  };
}

function SelectPairs({ pairs }: SelectPairsOptions) {
  const { next: finishExercise } = useContext(ExerciseContext);
  const [state, dispatch] = useReducer(reducer, pairs, init);

  useEffect(() => {
    if (
      state.status === "idle" &&
      state.selectedKey !== undefined &&
      state.selectedValue !== undefined
    ) {
      dispatch({ type: "setResult" });
    }
  }, [state]);

  useEffect(() => {
    if (state.status === "success" || state.status === "error") {
      setTimeout(() => dispatch({ type: "clearResult" }), 300);
    }
  }, [state.status]);

  useEffect(() => {
    if (state.status === "finished") {
      finishExercise(true);
    }
  }, [state.status, finishExercise]);

  const { items, table } = state;

  return (
    <div className="flex">
      {table.map((rows, col) => (
        <div className="flex-col flex-grow" key={col}>
          {rows.map((idx, row) => (
            <div className="p-2" key={`${col}:${row}`}>
              <Button
                variant={getBtnVariant(
                  state.status,
                  idx,
                  col ? state.selectedValue : state.selectedKey
                )}
                disabled={items[idx].status === "disabled"}
                onClick={() =>
                  dispatch({
                    type: col ? "selectValue" : "selectKey",
                    payload: idx,
                  })
                }
              >
                {col ? items[idx].value : items[idx].key}
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const allExercises = [
  {
    abwechselnd: "Ich brauche Abwechslung in meinem Alltag", // change without specifity
    wechselnd: "Ich muss mein Handy wechseln", // specific change
    one: "uno",
    two: "dos",
    three: "tres",
    four: "cuatro",
    five: "cinco",
  },
];

export default function Bedeutungen() {
  const canRender = useNoSSR();
  const [exercises] = useState(() => allExercises);
  const [index, setIndex] = useState(0);
  const next = () => setIndex((idx) => idx + 1);
  const isFinished = index >= exercises.length;

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container h-full md:max-w-lg mx-auto">
        {isFinished ? (
          <p>Finished</p>
        ) : canRender ? (
          <ExerciseContext.Provider value={{ index, next }}>
            <SelectPairs pairs={exercises[index]} />
          </ExerciseContext.Provider>
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}
