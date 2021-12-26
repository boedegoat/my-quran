import 'styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  const url = `http://localhost:3000${router.route}`
  return (
    <SessionProvider session={session}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </SessionProvider>
  )
}
