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
  const [exercises, setExercises] = useState(() => shuffle(allExercises));
  const [index, setIndex] = useState(0);
  const isFinished = index >= exercises.length;

  const next = (isSuccess: boolean) => {
    setIndex((index) => index + 1);
    if (!isSuccess) {
      // On fail, just move the item to the end
      setExercises((exercises) => exercises.concat(exercises[index]));
    }
  };

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
            <React.Fragment key={index}>{exercises[index]}</React.Fragment>
          </ExerciseContext.Provider>
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}
