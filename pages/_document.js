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
          <link
            rel="preload"
            href="/Fonts/MoonTime-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin
          />
          <link
            rel="preload"
            href="/Fonts/MoonTime-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/ianfajardo/ianandtheresa2022@latest/public/Fonts/fonts.css"
            crossOrigin
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
