import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/Fonts/MoonTime-Regular.woff" as="font" />
          <link rel="preload" href="/Fonts/MoonTime-Regular.woff2" as="font" />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/ianfajardo/ianandtheresa2022@latest/public/Fonts/fonts.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
