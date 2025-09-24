import { ConnectButton } from "@rainbow-me/rainbowkit";
import SwapWidget from "./trails/SwapWidget";
import EarnWidget from "./trails/EarnWidget";
import PayWidget from "./trails/PayWidget";
import FundWidget from "./trails/FundWidget";

export default function ClientHome() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">Trails Starter Repo</span>
        <ConnectButton chainStatus="none" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SwapWidget />
        <EarnWidget />
        <PayWidget />
        <FundWidget />
      </div>

    </div>
  );
}


