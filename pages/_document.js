import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://opengraph.githubassets.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
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
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}