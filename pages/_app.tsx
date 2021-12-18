import 'styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </SessionProvider>
  )
}
