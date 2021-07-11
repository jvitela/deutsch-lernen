import { GetStaticProps } from "next";
import Head from "next/head";
import shuffle from "lodash/shuffle";
import range from "lodash/range";
import React, { useState } from "react";
import { ExerciseContext } from "contexts/ExerciseContext";
import { AbbreviatedPrepositions } from "exercises/prepositions/AbbreviatedPrepositions";
import { LocalPrepositions } from "exercises/prepositions/LocalPrepositions";

const allExercises = [...AbbreviatedPrepositions, ...LocalPrepositions];

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      sequence: shuffle(range(0, allExercises.length)),
    },
  };
};

interface PageProps {
  sequence: number[];
}

export default function Praepositions({ sequence }: PageProps) {
  const [exercises] = useState(() => sequence.map((idx) => allExercises[idx]));
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
      ) : (
        <ExerciseContext.Provider value={{ index, next }}>
          <React.Fragment key={index}>{exercises[index]}</React.Fragment>
        </ExerciseContext.Provider>
      )}
    </React.Fragment>
  );
}
