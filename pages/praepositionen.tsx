import Head from "next/head";
import shuffle from "lodash/shuffle";
import React, { useState } from "react";
import { Loading } from "components/Loading";
import { ExerciseContext } from "contexts/ExerciseContext";
import { useNoSSR } from "hooks/useNoSSR";
import { AbbreviatedPrepositions } from "exercises/prepositions/AbbreviatedPrepositions";
import { LocalPrepositions } from "exercises/prepositions/LocalPrepositions";

const allExercises = [...AbbreviatedPrepositions, ...LocalPrepositions];

export default function Praepositions() {
  const canRender = useNoSSR();
  const [exercises] = useState(() => shuffle(allExercises));
  const [index, setIndex] = useState(0);
  const next = () => setIndex((idx) => idx + 1);
  const isFinished = index >= exercises.length;

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isFinished ? (
        <p>Finished</p>
      ) : canRender ? (
        <ExerciseContext.Provider value={{ index, next }}>
          <React.Fragment key={index}>{exercises[index]}</React.Fragment>
        </ExerciseContext.Provider>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
}
