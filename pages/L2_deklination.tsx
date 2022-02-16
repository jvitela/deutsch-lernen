import Head from "next/head";
import shuffle from "lodash/shuffle";
import React, { useState } from "react";
import { Loading } from "components/Loading";
import { ExerciseProvider, useExerciseContext } from "contexts/ExerciseContext";
import { useNoSSR } from "hooks/useNoSSR";
import { CompleteText } from "components/CompleteText";
import { Entry, EntryProps } from "components/Entry";
import { Text } from "components/Text";
import { ProgressBar } from "components/ProgressBar";

type RefsTable = Record<number, string>;

interface EntryData {
  value: string;
  ref?: number;
  upperFirst?: boolean;
}

type Phrase = ReadonlyArray<string | EntryData>;
type ArrayOfPhrases = ReadonlyArray<Phrase>;

interface ExerciseData {
  refs: RefsTable;
  phrases: ArrayOfPhrases;
}

type ExerciseItem = string | EntryProps;

const nominativ: ExerciseData = {
  refs: {
    1: "Subjekt, maskulin, Singular",
    2: "Subjekt, neutral Singular",
    3: "Subjekt, Plural",
  },
  phrases: [
    ["Im Park geht ", { value: "der", ref: 1 }, " Hund spazieren."],
    [{ value: "Das", ref: 2, upperFirst: true }, " Kind isst ein Vanilleeis"],
    [
      { value: "Die", ref: 3, upperFirst: true },
      " Eltern singen ein Gutenachtlied für ihre Kinder.",
    ],
    ["Abends arbeitet ", { value: "der", ref: 1 }, " Vater immer am Computer."],
    [
      "Vor dem Haus steht ",
      { value: "der", ref: 1 },
      " Lebensbaum von Claudia.",
    ],
    ["Im Garten spielen ", { value: "die", ref: 3 }, " vielen Kinder."],
    ["Auf dem Tisch steht schon ", { value: "das", ref: 2 }, " Essen."],
  ],
};

// Ergänze den bestimmten Artikel im Akkusativ.
const akkusativ: ExerciseData = {
  refs: {
    1: "direktes Objekt, maskulin, Singular",
    2: "direktes Objekt, neutral, Singular",
    3: "direktes Objekt, Plural",
    4: "Für → Akkusativ, Plural",
  },
  phrases: [
    [
      "Ich sehe",
      { value: "den", ref: 1 },
      " Hund von meiner Freundin im Park spazieren",
    ],
    [
      "Er findet",
      { value: "das", ref: 2 },
      " Kind von seiner Freundin nicht mehr.",
    ],
    ["Sie suchen ", { value: "die", ref: 3 }, " Eltern von Anna."],
    [
      "Laura hat ",
      { value: "den", ref: 1 },
      " Vater vom kleinen Alex gesucht.",
    ],
    [
      "Er findet ",
      { value: "den", ref: 1 },
      " Lebensbaum von Claudia wunderschön.",
    ],
    [
      "Für ",
      { value: "die", ref: 3 },
      " vielen Kinder ist ein schöner Garten der beste Spielplatz.",
    ],
    ["Ich liebe ", { value: "das", ref: 2 }, " Essen von meiner Mutter."],
  ],
};

const dativ: ExerciseData = {
  refs: {
    1: "mit → Dativpräposition, maskulin, Singular",
    2: "gehören → Dativverb, feminin, Singular",
    3: "von → Dativpräposition, feminin, Singular",
    4: "auf → wo? → Dativ, neutral, Singular",
    5: "mit → Dativpräposition, neutral, Singular",
    6: "indirektes Objekt, Plural",
    7: "mit → Dativpräposition, Plural",
  },
  phrases: [
    [
      "Ich gehe mit ",
      { value: "dem", ref: 1 },
      " Hund von meiner Freundin im Park spazieren.",
    ],
    [
      "Spielst du oft mit ",
      { value: "dem", ref: 5 },
      " Kind von deiner Freundin?",
    ],
    [
      "Wir geben ",
      { value: "den", ref: 6 },
      " Eltern von Anna einen Gutschein für Spielsachen.",
    ],
    [
      "Laura hat mit ",
      { value: "dem", ref: 1 },
      " Vater von dem kleinen Alex einen Ausflug gemacht.",
    ],
    ["Mit ", { value: "dem", ref: 1 }, " Lebensbaum hat sie eine Freude."],
    [
      "Wir gehen oft mit ",
      { value: "den", ref: 7 },
      " vielen Kindern auf den Spielplatz.",
    ],
    ["Mit ", { value: "dem", ref: 5 }, " Essen spielt man nicht."],
  ],
};

const genitiv: ExerciseData = {
  refs: {
    1: "Nomen, maskulin, Singular",
    2: "Nomen, neutral, Singular",
    3: "Nomen, Plural",
  },
  phrases: [
    [
      "Ich verstehe mich mit dem Besitzer ",
      { value: "des", ref: 1 },
      " Hundes nicht.",
    ],
    [
      "Triffst du dich oft mit der Mutter ",
      { value: "des", ref: 2 },
      " Kindes.",
    ],
    ["Wir brauchen das Auto ", { value: "der", ref: 3 }, " Eltern heute."],
    [
      "Habt ihr den Laptop ",
      { value: "des", ref: 1 },
      " Vaters von Alex gesehen?",
    ],
    [
      "Die Blätter ",
      { value: "des", ref: 1 },
      " Lebensbaums sind schon gefallen. Es ist Herbst.",
    ],
    [
      "Der Spielplatz ",
      { value: "der", ref: 3 },
      " Nachbarskinder ist gleich um die Ecke.",
    ],
    [
      "Die Qualität ",
      { value: "des", ref: 2 },
      " Essens muss einfach gut sein.",
    ],
  ],
};

function getExercises({
  phrases,
  refs,
}: ExerciseData): ReadonlyArray<ReadonlyArray<ExerciseItem>> {
  return phrases.map((contents, idx) => {
    let numEntries = 0;
    return contents.map((elem, numEl) =>
      typeof elem === "string"
        ? elem
        : {
            value: elem.value,
            autoFocus: numEntries++ === 0,
            title: elem.ref ? refs[elem.ref] : undefined,
            upperFirst: elem.upperFirst,
          }
    );
  });
}

function initExercises() {
  const allExercises = (
    [] as ReadonlyArray<ReadonlyArray<ExerciseItem>>
  ).concat(
    getExercises(nominativ),
    getExercises(dativ),
    getExercises(akkusativ),
    getExercises(genitiv)
  );

  return shuffle(allExercises).slice(0, 10);
}

export default function Deklination() {
  const [exercises] = useState(initExercises);

  console.log("Deklination::render", exercises);
  return (
    <div className="h-full container md:max-w-lg mx-auto flex flex-col py-2">
      <ExerciseProvider exercises={exercises}>
        <Progress />
        <Instructions />
        <Body />
      </ExerciseProvider>
    </div>
  );
}

function Instructions() {
  return (
    <header className="p-4">
      <h1 className="font-bold text-lg">Ergänzen Sie den Satz</h1>
      <p className="">
        Ergänze den bestimmten Artikel im Nominativ, Akkusativ, Dativ oder
        Genitiv
      </p>
    </header>
  );
}

function Progress() {
  const { numSuccess, total } = useExerciseContext();

  return (
    <div className="py-2 px-4">
      <ProgressBar total={total} progress={numSuccess} />
    </div>
  );
}

function Body() {
  const canRender = useNoSSR();
  const { isFinished, exercises, numTries, index } = useExerciseContext();
  const contents = exercises[index] as ReadonlyArray<ExerciseItem>;
  return (
    <div className="flex grow py-2 px-4">
      {isFinished ? (
        <p>Finished</p>
      ) : canRender ? (
        <Exercise key={numTries} contents={contents} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

function Exercise({ contents }: { contents: ReadonlyArray<ExerciseItem> }) {
  return (
    <CompleteText>
      <Text>
        {contents.map((entry, idx) =>
          typeof entry === "string" ? (
            entry
          ) : (
            <Entry
              key={`${idx}`}
              value={entry.value}
              autoFocus
              title={entry.title}
              upperFirst={entry.upperFirst}
            />
          )
        )}
      </Text>
    </CompleteText>
  );
}
