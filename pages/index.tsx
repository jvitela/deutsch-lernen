import Link from "next/link";
import Head from "next/head";
import React from "react";

const clsLink =
  "w-full font-bold p-4 my-2 rounded text-center text-white bg-blue-500 " +
  "focus:outline-none focus:ring hover:bg-blue-700";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Deutsch Lernen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen">
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
