import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import SwapWidget from "./trails/SwapWidget";
import EarnWidget from "./trails/EarnWidget";
import PayWidget from "./trails/PayWidget";
import FundWidget from "./trails/FundWidget";

type Mode = "pay" | "swap" | "fund" | "earn";

const modes: { id: Mode; label: string }[] = [
  { id: "pay", label: "Pay" },
  { id: "swap", label: "Swap" },
  { id: "fund", label: "Fund" },
  { id: "earn", label: "Earn" },
];

export default function ClientHome() {
  const [activeMode, setActiveMode] = useState<Mode>("pay");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">Trails Starter Repo</span>
        <ConnectButton chainStatus="none" />
      </div>

      {/* Mode Selector Tabs */}
      <div className="mt-8 flex justify-center">
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-2">
          <nav className="flex gap-2">
            {modes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveMode(mode.id)}
                className={`
                  relative px-8 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer rounded-lg
                  ${
                    activeMode === mode.id
                      ? "text-gray-900 bg-white border border-gray-200 shadow-md"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                  }
                `}
              >
                {mode.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Single Widget Display - only one mounted at a time */}
      <div className="mt-6 max-w-md mx-auto">
        {activeMode === "pay" && <PayWidget key="pay" />}
        {activeMode === "swap" && <SwapWidget key="swap" />}
        {activeMode === "fund" && <FundWidget key="fund" />}
        {activeMode === "earn" && <EarnWidget key="earn" />}
      </div>
    </div>
  );
}


