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

type Phrase = ReadonlyArray<string | EntryProps>;
type ArrayOfPhrases = ReadonlyArray<Phrase>;

interface ExerciseData {
  refs: RefsTable;
  phrases: ArrayOfPhrases;
}

const adjektiveDeklination: ExerciseData = {
  refs: {
    1: "Unbestimmter Artikel, Neutral, Dativ.",
    2: "Unbestimmter Artikel, Maskulin, Akkusativ.",
    3: "Deklination nach „viel“ entspricht den Regeln des Nullartikels, Plural, Akkusativ.",
    4: "Negativartikel, Plural, Akkusativ.",
    5: "Unbestimmter Artikel, Maskulin, Nominativ.",
    6: "Unbestimmter Artikel, Maskulin, Akkusativ.",
    7: "Nullartikel, Plural, Akkusativ.",
    8: "Possessivartikel, Feminin, Akkusativ.",
    9: "Nullartikel, Plural, Dativ.",
    10: "Nullartikel, Plural, Akkusativ.",
    11: "Nullartikel, Plural, Dativ. Das Adjektiv „hoch“ verliert mit einer Endung das 'c'.",
    12: "Unbestimmter Artikel, Maskulin, Dativ.",
  },
  phrases: [
    [
      "Liam: Wie stellt ihr euch euer Leben in 20 Jahren vor?",
      "Jana: Hoffentlich wohne ich dann in ",
      { value: "einem großen", ref: 1 },
      " Haus (Eins / Groß), habe ",
      { value: "einen reichen", ref: 2 },
      "Mann (Eins / Reich) und ",
      { value: "viele süße", ref: 3 },
      " Kinder (Viel, Süß). Und du?",
    ],
    [
      "Liam: Ich hoffe, ich habe ",
      { value: "keine nervigen", ref: 4 },
      " Kinder (Kein, Nervig). ",
      "Ich möchte ",
      { value: "ein berühmter", ref: 5 },
      " Sänger (Eins / Berühmt) sein, ",
      { value: "einen schicken", ref: 6 },
      " Porsche (Eins / Schick) fahren und ",
      { value: "teure", ref: 7 },
      " (Teuer) Zigarren rauchen. Und du, Isa?",
    ],
    [
      "Isa: Ich brauche den Luxus nicht. Ich möchte um ",
      { value: "unsere schöne, weite Welt", ref: 8 },
      " (Unser / Schön,Weit / Welt) ",
      "reisen, an ",
      { value: "einsamen Stränden", ref: 9 },
      " (Einsam / *:Strand) spazieren, ",
      { value: "exotische Früchte", ref: 10 },
      " (Exotisch / *:Frucht) essen und von ",
      { value: "hohen Wasserfällen", ref: 11 },
      " (Hoch / *:Wasserfall) springen. ",
      "Liam: Das hört sich auf jeden Fall nach ",
      { value: "einem guten", ref: 12 },
      " Plan (Eins / Gut) an.",
    ],
  ],
};

function getExercises({ phrases, refs }: ExerciseData) {
  return phrases.map((contents, idx) => {
    let numEntries = 0;
    return (
      <CompleteText key={idx}>
        <Text>
          {contents.map((elem, numEl) =>
            typeof elem === "string" ? (
              elem
            ) : (
              <Entry
                key={`${idx}-${numEl}`}
                value={elem.value}
                autoFocus={numEntries++ === 0}
                title={elem.ref ? refs[elem.ref] : undefined}
                upperFirst={elem.upperFirst}
              />
            )
          )}
        </Text>
      </CompleteText>
    );
  });
}

function initExercises() {
  const allExercises = getExercises(adjektiveDeklination);
  return allExercises;
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
