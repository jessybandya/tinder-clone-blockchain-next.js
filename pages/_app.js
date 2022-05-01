import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://1n6yww3r0sdo.usemoralis.com:2053/server'
      appId='rjnMZCXprSlpQmv50cYVtvrTWw72eYHY8WYQtrPX'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp