import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
// Optional wallets (uncomment to enable)
// import { walletConnectWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import { mainnet, polygon, optimism, arbitrum, base, soneium } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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
          <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
