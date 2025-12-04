import { TrailsWidget } from "0xtrails/widget";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";


const apiKey = import.meta.env.VITE_TRAILS_API_KEY;

export default function PayWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a
            href="https://docs.trails.build/use-cases/pay"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 text-primary"
          >
            <span>Pay →</span>
          </a>
        </CardTitle>
        <CardDescription>
          Payment flow for trails. You set the amount and token the recipient should receive; the
          user can pay in any token from any chain.
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-center w-full">
        <TrailsWidget
          mode="pay"
          apiKey={apiKey}
          theme="light"
          toAddress="0xF69F076c7225651b30d17B1a9C454319A4CfE77c"
          toAmount="0.15"
          toChainId={42161}
          toToken="0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
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


