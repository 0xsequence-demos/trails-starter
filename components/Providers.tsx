import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
// Optional wallets (uncomment to enable)
// import { walletConnectWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import { mainnet, polygon, optimism, arbitrum, base, soneium } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TrailsProvider } from "0xtrails";

const config = getDefaultConfig({
  appName: "Trails Starter",
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? "",
  chains: [mainnet, polygon, optimism, arbitrum, base, soneium],
  wallets: [
    {
      groupName: "Injected Wallets",
      wallets: [injectedWallet],
    },
    // Uncomment to include WalletConnect and Rainbow wallets in the modal
    // {
    //   groupName: "Other Wallets",
    //   wallets: [
    //     walletConnectWallet({ projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? "" }),
    //     rainbowWallet({ projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? "" }),
    //   ],
    // },
  ],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <TrailsProvider // only needed if using Trails React Hooks
          config={{
            trailsApiKey: import.meta.env.VITE_TRAILS_API_KEY ?? "",
            // Optional: Custom API endpoints
            // trailsApiUrl: "...",
            // sequenceIndexerUrl: "...",
            // sequenceNodeGatewayUrl: "..."
          }}
        >
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </TrailsProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
