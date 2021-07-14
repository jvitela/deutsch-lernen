import Link from "next/link";
import Head from "next/head";
import React from "react";
import twd from "utils/twd";

const clsLink = twd`
  w-full p-4 my-2
  font-bold text-center 
  text-white bg-blue-500 rounded
  focus:outline-none focus:ring 
  hover:bg-blue-700
`;

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Deutsch Lernen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-full">
        <header className="">
          <h1 className="px-4 py-8 text-center text-4xl text-blue-100 bg-blue-600">
            Deutsch Lernen
          </h1>
        </header>
        <main className="flex flex-col flex-grow justify-center p-4">
          <Link href="/praepositionen">
            <a className={clsLink}>Präpositionen</a>
          </Link>
          <Link href="/konjunktiv2">
            <a className={clsLink}>Konjunktiv II</a>
          </Link>
        </main>
      </div>
    </React.Fragment>
  );
}
