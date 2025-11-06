import { TrailsWidget } from "0xtrails/widget";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";

export default function FundWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a
            href="https://docs.trails.build/use-cases/fund"
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
          toChainId={5031} // Base
          toToken="0x28bec7e30e6faee657a03e19bf1128aad7632a00"
          theme="auto"
          customCss={`
            --trails-border-radius-button: 9999px;
            --trails-primary: #F59E0B; /* amber-500 */
            --trails-primary-hover: #D97706; /* amber-600 */
            --trails-text-inverse: #1F2937; /* slate-800 for better contrast on amber */
            --trails-focus-ring: rgba(245,158,11,.35);
          `}
        >
          <Button
            type="button"
            className="h-10 w-full rounded-full p-0 font-semibold bg-blue-500 text-white hover:bg-blue-600"
          >
            Fund Account
          </Button>
        </TrailsWidget>
      </CardFooter>
    </Card>
  );
}


