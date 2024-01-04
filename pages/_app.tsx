import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import RootLayout from "./RootLayout";
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <NextTopLoader color={"#FED474"} />
      <SessionProvider session={pageProps.session}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </SessionProvider >
    </>
  );
}
