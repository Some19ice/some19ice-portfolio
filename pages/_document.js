import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html>
          <Head>
              <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
                  rel="stylesheet"
              />
              <link
                  href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
                  rel="stylesheet"
              />
              <link
                  href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
                  rel="stylesheet"
              />
          </Head>
          <body className="font-poppins">
              <Main />
              <NextScript />
          </body>
      </Html>
  )
}
