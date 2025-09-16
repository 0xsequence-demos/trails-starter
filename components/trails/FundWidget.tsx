import { TrailsWidget } from "0xtrails/widget";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

export default function FundWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a
            href="https://docs.trails.build/examples/fund"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 text-primary"
          >
            <span>Fund →</span>
          </a>
        </CardTitle>
        <CardDescription>
          Deposit into a chain, app, or protocol, in this case USDC on Base. Users choose how much
          to send from any token with a variable amount. Fiat on-ramping also supported from exchanges.
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-center w-full">
        <TrailsWidget
          mode="fund"
          toChainId={8453} // Base
          toToken="USDC"
          theme="auto"
          appId={import.meta.env.VITE_TRAILS_APP_ID ?? ""}
          buttonText="Fund Account"
          customCss={`
            --trails-border-radius-button: 9999px;
            --trails-primary: #F59E0B; /* amber-500 */
            --trails-primary-hover: #D97706; /* amber-600 */
            --trails-text-inverse: #1F2937; /* slate-800 for better contrast on amber */
            --trails-focus-ring: rgba(245,158,11,.35);
          `}
        >
        </TrailsWidget>
      </CardFooter>
    </Card>
  );
}


