import "tailwindcss/tailwind.css";
import "../main.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
function Page({ children }) {
  return (
    <>
      <Head>
        <title>Deutsch Lernen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default MyApp;
