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
    1: "Perfekt, regelmäßige Bildung, regelmäßig im Präsens.",
    2: "Plusquamperfekt, unregelmäßige Bildung, zusammengesetztes, nicht trennbares Verb. 3: Perfekt, unregelmäßige Bildung, Vokalwechsel, zusammengesetztes, nicht trennbares Verb.",
    4: "Perfekt, unregelmäßige Bildung, zusammengesetztes, nicht trennbares Verb.",
    5: "Futur 2, regelmäßige Bildung, zusammengesetztes, nicht trennbares Verb.",
    6: "Futur 2, regelmäßige Bildung, aber Verb auf -ieren -> ohne ge-.",
    7: "Perfekt, regelmäßige Bildung, unregelmäßiges Verb im Präsens, trennbares Verb.",
    8: "Perfekt, unregelmäßige Bildung, zusammengesetztes, nicht trennbares Verb.",
    9: "Präsens, Passiv, unregelmäßige Bildung, zusammengesetztes, nicht trennbares Verb. 10: Futur 2, regelmäßige Bildung, regelmäßig im Präsens.",
  },
  phrases: [
    [
      "A: Maria, ich warte immer noch auf den aktuellen Stand der Präsentation. ",
      { value: "Haben", upperFirst: true },
      " wir nicht ",
      { value: "gesagt", ref: 1 },
      ", dass du es mir heute senden sollst? (sagen)",
    ],
    [
      "B: Das ",
      { value: "hatten" },
      " wir vorgestern ",
      { value: "besprochen", ref: 2 },
      ", aber gestern ",
      { value: "haben" },
      "wir dann ",
      { value: "entschieden", ref: 3 },
      ", dass auch morgen reicht. Erinnerst du dich? (besprechen/entscheiden)",
    ],
    [
      "A: Das stimmt. Das ",
      { value: "habe" },
      " ich ",
      { value: "vergessen", ref: 4 },
      "(vergessen)",
    ],
    [
      "B: Mach dir keine Sorgen. Spätestens morgen um 09:00 werde ich die Präsentation ",
      { value: "erstellt", ref: 5 },
      " und ",
      { value: "perfektioniert", ref: 6 },
      " haben. (erstellen und perfektionieren)",
    ],
    [
      "A: Danke dir! Wie sieht es aus mit dem Bericht für den Kunden? ",
      { value: "Hast", upperFirst: true },
      " du ihn schon ",
      { value: "angefangen", ref: 7 },
      "? (anfangen)",
    ],
    [
      "B: Ich ",
      { value: "habe" },
      " schon ",
      { value: "begonnen", ref: 8 },
      "(beginnen). Gerade ",
      { value: "wird" },
      " die Datei von Jan ",
      { value: "bearbeitet", ref: 9 },
      "(bearbeiten). Ich mache weiter, sobald er seine Arbeit fertig ",
      { value: "gemacht", ref: 10 },
      { value: "hat" },
      ".(machen)",
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
        Ergänze das Partizip Perfekt. Achtung: Du musst es in verschiedenen
        Zeiten verwenden.
      </header>
      <ExerciseProvider exercises={exercises} tryOnce>
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
