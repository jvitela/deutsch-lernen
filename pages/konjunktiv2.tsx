import Head from "next/head";
import React, { useState } from "react";
import shuffle from "lodash/shuffle";
import { useNoSSR } from "hooks/useNoSSR";
import { ExerciseContext } from "contexts/ExerciseContext";
import { OrderSentence } from "components/OrderSentence";
import { Loading } from "components/Loading";
import { sentences as sentences1 } from "exercises/konjunktiv2/exercise01";
import { sentences as sentences2 } from "exercises/konjunktiv2/exercise02";

const allExercises = [...sentences1, ...sentences2];

export default function Konjunktiv2() {
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

      <div className="container h-full md:max-w-lg mx-auto">
        {isFinished ? (
          <p>Finished</p>
        ) : canRender ? (
          <ExerciseContext.Provider value={{ index, next }}>
            <OrderSentence
              key={index}
              instructions={exercises[index].instructions}
              answers={exercises[index].answers}
              options={exercises[index].options}
            />
          </ExerciseContext.Provider>
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}
