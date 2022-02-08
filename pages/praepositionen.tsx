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
// import { AbbreviatedPrepositions } from "exercises/prepositions/AbbreviatedPrepositions";
import { LocalPrepositions } from "exercises/prepositions/LocalPrepositions";

const allExercises = LocalPrepositions; // [...AbbreviatedPrepositions, ...LocalPrepositions];

export default function Praepositions() {
  const [exercises] = useState(() => shuffle(allExercises));

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ExerciseProvider exercises={exercises}>
        <Body />
      </ExerciseProvider>
    </React.Fragment>
  );
}

function Body() {
  const canRender = useNoSSR();
  const { isFinished } = useExerciseContext();

  return (
    <div className="container h-full md:max-w-lg mx-auto">
      {isFinished ? (
        <p>Finished</p>
      ) : canRender ? (
        <ActiveExercise />
      ) : (
        <Loading />
      )}
    </div>
  );
}
