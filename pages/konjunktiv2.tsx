import Head from "next/head";
import React, { useState } from "react";
import shuffle from "lodash/shuffle";
import { useNoSSR } from "hooks/useNoSSR";
import {
  ActiveExercise,
  useExerciseContext,
  ExerciseProvider,
} from "contexts/ExerciseContext";
import { OrderSentence } from "components/OrderSentence";
import { Loading } from "components/Loading";
import { sentences as sentences1 } from "exercises/konjunktiv2/exercise01";
import { sentences as sentences2 } from "exercises/konjunktiv2/exercise02";

const allExercises = [...sentences1, ...sentences2];

function getAllExercises() {
  return allExercises.map((exercise, index) => (
    <OrderSentence
      key={index}
      instructions={exercise.instructions}
      answers={exercise.answers}
      options={exercise.options}
    />
  ));
}

export default function Konjunktiv2() {
  const [exercises] = useState(() => shuffle(getAllExercises()));
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
