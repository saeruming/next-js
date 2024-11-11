import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MBTIProvider } from "./context/MBTIContext";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <MBTIProvider>
      <Component {...pageProps} />
    </MBTIProvider>
  );
}
