import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import RootLayout from "./RootLayout";
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { wrapper } from '@/lib/store/store';
import { PersistGate } from "redux-persist/integration/react";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
  ...rest
}: AppProps) {
  const { store } = wrapper.useWrappedStore(rest);
  return (
    <>
      <NextTopLoader color={"#FED474"} initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #4C82FE,0 0 5px #4C82FE"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false} />
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate persistor={store.persistor}>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </PersistGate>
        </Provider>
      </SessionProvider >
    </>
  );
}
