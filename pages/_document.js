import { Html, Head, Main, NextScript } from "next/document";

export default function _document() {
  return (
    <Html>
        <Head>
          {/* <title>ShieldedBit - Global Cybersecurity Consultancy Company</title> */}
          <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}
