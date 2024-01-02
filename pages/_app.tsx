import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import RootLayout from "./RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextTopLoader color={"#FED474"} />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
