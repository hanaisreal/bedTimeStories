import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <meta name="theme-color" content="#000" />
        {/* Add viewport meta tag below */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
