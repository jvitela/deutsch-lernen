import Head from "next/head";
import shuffle from "lodash/shuffle";
import React, { useState } from "react";
import { Loading } from "components/Loading";
import {
  ActiveExercise,
  ExerciseProvider,
  useExerciseContext,
} from "contexts/ExerciseContext";
import { useNoSSR } from "hooks/useNoSSR";
import { CompleteText } from "components/CompleteText";
import { Entry } from "components/Entry";
import { Text } from "components/Text";
import { ProgressBar } from "components/ProgressBar";

type RefsTable = Record<number, string>;

interface EntryProps {
  value: string;
  ref?: number;
  upperFirst?: boolean;
}

type Title = {
  title: string;
};
type Phrase = ReadonlyArray<string | EntryProps | Title>;
type ArrayOfPhrases = ReadonlyArray<Phrase>;

interface ExerciseData {
  refs: RefsTable;
  phrases: ArrayOfPhrases;
}

const fooBar: ExerciseData = {
  refs: {},
  phrases: [
    [
      { title: "witzig: Jan (+" },
      "Jan ist ",
      { value: "witziger" },
      " als Maya.",
    ],
  ],
};

function getExercises({ phrases, refs }: ExerciseData) {
  return phrases.map((contents, idx) => (
    <CompleteText key={idx}>
      <Text>
        {contents.map((elem, numEl) =>
          typeof elem !== "object" ? (
            elem
          ) : "title" in elem ? (
            <h3>{elem.title}</h3>
          ) : (
            <Entry
              key={`${idx}-${numEl}`}
              value={elem.value}
              autoFocus
              title={elem.ref ? refs[elem.ref] : undefined}
              upperFirst={elem.upperFirst}
            />
          )
        )}
      </Text>
    </CompleteText>
  ));
}

function initExercises() {
  const allExercises = ([] as Array<JSX.Element>).concat(getExercises(fooBar));

  return shuffle(allExercises);
}

export default function Deklination() {
  const [exercises] = useState(initExercises);

  return (
    <div className="container h-full md:max-w-lg mx-auto">
      <header className="p-4">
        Ergänze den bestimmten Artikel im Nominativ, Akkusativ, Dativ oder
        Genitiv
      </header>
      <ExerciseProvider exercises={exercises}>
        <Body />
      </ExerciseProvider>
    </div>
  );
}

function Body() {
  const canRender = useNoSSR();
  const { isFinished, numSuccess, total } = useExerciseContext();

  return (
    <>
      <ProgressBar total={total} progress={numSuccess} />
      {isFinished ? (
        <p>Finished</p>
      ) : canRender ? (
        <ActiveExercise />
      ) : (
        <Loading />
      )}
    </>
  );
}
