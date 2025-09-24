import { TrailsWidget } from "0xtrails/widget";
import { Coins } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

export default function EarnWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a
            href="https://docs.trails.build/examples/earn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 text-primary"
          >
            <span>Earn →</span>
          </a>
        </CardTitle>
        <CardDescription>
          Deposit into various DeFi vaults from Aave & Morpho across multiple chains with automatic swap/bridge to the
          required asset in a single confirmation to enable your users to earn yield on their assets.
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-center w-full">
        <TrailsWidget
          mode="earn"
          theme="auto"
          buttonText="Start Earning"
          customCss={`
            --trails-border-radius-button: 9999px;
            --trails-primary: #10B981;
            --trails-primary-hover: #059669;
            --trails-text-inverse: #ffffff;
            --trails-focus-ring: rgba(16,185,129,.4);
          `}
        >
        </TrailsWidget>
      </CardFooter>
    </Card>
  );
}


