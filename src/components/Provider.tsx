"use client";
import { ReactNode } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import config from "@/config";
import merge from "lodash.merge";

const Provider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  const cre8ifyTheme = merge(darkTheme(), {
    colors: {
      modalBackground: "#e85c2e",
    },
  });
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" theme={cre8ifyTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Provider;
