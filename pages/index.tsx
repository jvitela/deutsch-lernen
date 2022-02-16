import Link from "next/link";
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
    <div className="flex flex-col h-full">
      <header className="">
        <h1 className="px-4 py-8 text-center text-4xl text-blue-100 bg-blue-600">
          Deutsch Lernen
        </h1>
      </header>
      <main className="flex flex-col grow justify-center p-4 container md:max-w-lg mx-auto">
        <Link href="/L2_deklination">
          <a className={clsLink}>Deklination</a>
        </Link>
        <Link href="/L3_deklination">
          <a className={clsLink}>Deklination (2)</a>
        </Link>
        <Link href="/praepositionen">
          <a className={clsLink}>Präpositionen</a>
        </Link>
        <Link href="/konjunktiv2">
          <a className={clsLink}>Konjunktiv II</a>
        </Link>
        <Link href="/kapitel_1/Personenbeschreibungen">
          <a className={clsLink}>Personenbeschreibungen</a>
        </Link>
      </main>
    </div>
  );
}
