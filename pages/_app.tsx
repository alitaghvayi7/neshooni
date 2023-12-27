import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextTopLoader from "nextjs-toploader";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <NextTopLoader color={"#FED474"}/>
        <Component {...pageProps} />
      </>
  )
}
