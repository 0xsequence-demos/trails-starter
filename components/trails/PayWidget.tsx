import { TrailsWidget } from "0xtrails/widget";
import { CreditCard } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

export default function PayWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a
            href="https://docs.trails.build/examples/pay"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 text-primary"
          >
            <span>Pay →</span>
          </a>
        </CardTitle>
        <CardDescription>
          Exact-output payments. You set the amount the recipient receives; the
          user pays what's needed.
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-center w-full">
        <TrailsWidget
          mode="pay"
          theme="auto"
          sequenceEnv="dev"
          appId={import.meta.env.VITE_TRAILS_APP_ID ?? ""}
          toAddress="0xF69F076c7225651b30d17B1a9C454319A4CfE77c"
          toAmount="0.1"
          toChainId={42161}
          toToken="USDC"
          toCalldata="0x6a62784200000000000000000000000097c4a952b46becad0663f76357d3776ba11566e1"
          buttonText="Pay with Trails"
          customCss={`
            --trails-border-radius-button: 9999px;
            --trails-primary: #4285F4;
            --trails-primary-hover: #357AE8;
            --trails-text-inverse: #ffffff;
            --trails-focus-ring: rgba(66,133,244,.4);
          `}
        >
        </TrailsWidget>
      </CardFooter>
    </Card>
  );
}


