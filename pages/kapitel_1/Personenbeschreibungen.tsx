import Head from "next/head";
import React, { useReducer, useEffect, useState, useContext } from "react";
import shuffle from "lodash/shuffle";
import range from "lodash/range";
import { useNoSSR } from "hooks/useNoSSR";
import { ExerciseContext } from "contexts/ExerciseContext";
import { Loading } from "components/Loading";
import { Button, ButtonVariants } from "components/Button";

interface Pair {
  prop: string;
  desc: string;
  antonym: string;
}

interface SelectPairsOptions {
  pairs: ReadonlyArray<Pair>;
}

type Status = "idle" | "success" | "error" | "finished";

interface Item {
  // key: string;
  value: Pair;
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

function mapItems(pairs: ReadonlyArray<Pair>): ReadonlyArray<Item> {
  return pairs.map((pair, idx) => ({
    // key: pair.prop,
    value: pair,
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
                title={items[idx].value.desc}
                disabled={items[idx].status === "disabled"}
                onClick={() =>
                  dispatch({
                    type: col ? "selectValue" : "selectKey",
                    payload: idx,
                  })
                }
              >
                {col ? items[idx].value.antonym : items[idx].value.prop}
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Eigenschaften
const personProperties: ReadonlyArray<Pair> = [
  {
    prop: "pünktlich",
    desc: "sich nie oder selten vespäten",
    antonym: "unpünktlich",
  },
  {
    prop: "bescheiden", // modest
    desc: "genügsam sein", // careful about spending money or using things when you do not need to
    antonym: "angeberisch", // pretentious
  },
  {
    prop: "praktisch",
    desc: "gut mit alltäglichen Problemen umgehen können",
    antonym: "unpraktisch",
  },
  {
    prop: "klug",
    desc: "intelligent sein",
    antonym: "dumm",
  },
  {
    prop: "geizig",
    desc: "übertrieben sparsam sein",
    antonym: "freigiebig",
  },
  {
    prop: "tolerant",
    desc: "aufgeschlossen sein gegenüber anderen Ideen",
    antonym: "engstirnig",
  },
  {
    prop: "ausgeglichen",
    desc: "sich nicht aus der Ruhe bringen lassen",
    antonym: "launisch",
  },
  {
    prop: "ängstlich",
    desc: "schnell Angst bekommen",
    antonym: "mutig",
  },
  {
    prop: "gutmütig",
    desc: "immer hilfsbereit sein und leicht nachgeben",
    antonym: "bösartig",
  },
  {
    prop: "schweigsam",
    desc: "wenig oder selten reden",
    antonym: "gespreächig",
  },
  {
    prop: "gewissenhaft",
    desc: "sorgfälltig und zuverlässig sein",
    antonym: "oberflächlich",
  },
  {
    prop: "eitel", // vanidoso
    desc: "selbsgefällig sein",
    antonym: "uneitel",
  },
];

export default function Personenbeschreibungen() {
  const canRender = useNoSSR();
  const [index, setIndex] = useState(0);
  const next = () => setIndex((idx) => idx + 1);
  const isFinished = index >= 1;

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
            <SelectPairs pairs={personProperties} />
          </ExerciseContext.Provider>
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}
