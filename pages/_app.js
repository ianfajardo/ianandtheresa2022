import "animate.css";
import "../styles/main.scss";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
