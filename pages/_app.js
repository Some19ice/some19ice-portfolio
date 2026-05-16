import '../styles/globals.css'
import 'highlight.js/styles/atom-one-dark.css'
import dynamic from 'next/dynamic'

const CommandPalette = dynamic(() => import('../components/CommandPalette'), { ssr: false })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CommandPalette />
    </>
  )
}

export default MyApp
