import { useRef } from "react";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TrailsProvider } from "0xtrails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const config = useRef<ReturnType<typeof createConfig> | null>(null);

  if (!config.current) {
    config.current = createConfig({
      chains: [mainnet, polygon, optimism, arbitrum, base],
      transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
        [optimism.id]: http(),
        [arbitrum.id]: http(),
        [base.id]: http(),
      },
    });
  }

  return (
    <WagmiProvider config={config.current}>
      <QueryClientProvider client={queryClient}>
        <TrailsProvider
          config={{
            trailsApiKey: import.meta.env.VITE_TRAILS_API_KEY ?? "",
          }}
        >
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </TrailsProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
