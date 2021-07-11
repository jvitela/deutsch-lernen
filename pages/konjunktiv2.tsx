import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import shuffle from "lodash/shuffle";
import range from "lodash/range";
import { ExerciseContext } from "contexts/ExerciseContext";
import { OrderSentence } from "components/OrderSentence";
import { sentences as sentences1 } from "exercises/konjunktiv2/exercise01";
import { sentences as sentences2 } from "exercises/konjunktiv2/exercise02";

const allExercises = [...sentences1, ...sentences2];

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

export default function Konjunktiv2({ sequence }: PageProps) {
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
          <OrderSentence
            key={index}
            instructions={exercises[index].instructions}
            answers={exercises[index].answers}
            options={exercises[index].options}
          />
        </ExerciseContext.Provider>
      )}
    </React.Fragment>
  );
}
