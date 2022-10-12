import '../src/styles/reset.scss'
import '../src/styles/global.scss'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
