import { TrailsProvider } from "0xtrails";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";
import { createConfig, http, WagmiProvider } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const config = useRef<ReturnType<typeof createConfig> | null>(null);

  const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

  if (!config.current) {
    config.current = createConfig({
      chains: [mainnet, polygon, optimism, arbitrum, base],
      ...(projectId && {
        connectors: [
          walletConnect({
            projectId,
            showQrModal: false,
          }),
        ],
      }),
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
