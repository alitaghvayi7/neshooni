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
      <NextTopLoader color={"#FED474"} />
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
