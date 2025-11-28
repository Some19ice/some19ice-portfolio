import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html>
          <Head>
              {/* Preconnect to external domains for faster resource loading */}
              <link rel="preconnect" href="https://opengraph.githubassets.com" />
              <link rel="dns-prefetch" href="https://api.github.com" />
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                        (function() {
                          try {
                            var localValue = localStorage.getItem('darkMode');
                            if (localValue === 'true' || localValue === null) {
                               document.documentElement.classList.add('dark');
                            } else {
                               document.documentElement.classList.remove('dark');
                            }
                          } catch (e) {}
                        })();
                      `,
                  }}
              />
          </Head>
          <body className="font-poppins">
              <Main />
              <NextScript />
          </body>
      </Html>
  )
}