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

interface Item<T> {
  value: T;
  status: "enabled" | "selected" | "disabled";
}

interface State {
  status: Status;
  total: number;
  completed: ReadonlyArray<number>;
  selectedKey?: number;
  selectedValue?: number;
}

interface Action {
  type: "selectKey" | "selectValue" | "setResult" | "clearResult";
  payload?: number;
}

// function isSuccess({ items, selectedKey, selectedValue }: State): boolean {
//   if (selectedValue === undefined || selectedKey === undefined) return false;
//   return items[selectedKey] === items[selectedValue];
// }

// function isFinished(items: State["items"]): boolean {
//   return items.every((item) => item.status === "disabled");
// }

// function selectMatchingItem(state: State): State["items"] {
//   const { items, selectedKey, selectedValue } = state;
//   return items.map((item, idx) =>
//     idx === selectedKey && selectedKey === selectedValue
//       ? {
//           ...item,
//           status: "selected",
//         }
//       : item
//   );
// }

// function clearSelectedItem(items: State["items"]): State["items"] {
//   return items.map((item) =>
//     item.status === "selected"
//       ? {
//           ...item,
//           status: "disabled",
//         }
//       : item
//   );
// }

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
        status: state.selectedKey === state.selectedValue ? "success" : "error",
      };

    case "clearResult":
      return {
        ...state,
        status: state.completed.length === state.total ? "finished" : "idle",
        completed:
          state.status === "success"
            ? state.completed.concat(state.selectedKey!)
            : state.completed,
        selectedKey: undefined,
        selectedValue: undefined,
      };
  }
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
  return {
    status: "idle",
    total: pairs.length,
    completed: [],
  };
}

function shuffleIndexes(length: number) {
  const indexes = range(length);
  return {
    keys: shuffle(indexes),
    values: shuffle(indexes),
  };
}

function mapItems(pairs: SelectPairsOptions["pairs"]) {
  return pairs.map((pair) => ({
    value: pair,
    status: "enabled",
  }));
}

function SelectPairs({ pairs }: SelectPairsOptions) {
  const [{ keys, values }] = useState(() => shuffleIndexes(pairs.length));
  const [items] = useState(() => mapItems(pairs));
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

  return (
    <div className="flex">
      <div className="flex-col flex-grow">
        {keys.map((idx) => (
          <div className="p-2" key={`keys-row-${idx}`}>
            <Button
              variant={getBtnVariant(state.status, idx, state.selectedKey)}
              title={items[idx].value.desc}
              disabled={state.completed.includes(idx)}
              onClick={() =>
                dispatch({
                  type: "selectKey",
                  payload: idx,
                })
              }
            >
              {items[idx].value.prop}
            </Button>
          </div>
        ))}
      </div>
      <div className="flex-col flex-grow">
        {values.map((idx) => (
          <div className="p-2" key={`values-row-${idx}`}>
            <Button
              variant={getBtnVariant(state.status, idx, state.selectedValue)}
              disabled={state.completed.includes(idx)}
              onClick={() =>
                dispatch({
                  type: "selectValue",
                  payload: idx,
                })
              }
            >
              {items[idx].value.antonym}
            </Button>
          </div>
        ))}
      </div>
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
