import "@@/common/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "@radix-ui/themes/styles.css";
import type { AppProps } from "next/app";

import { Theme } from "@radix-ui/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme accentColor="indigo" appearance="dark">
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </Theme>
  );
}
