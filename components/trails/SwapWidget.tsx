import { TrailsWidget } from "0xtrails/widget";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

const apiKey = import.meta.env.VITE_TRAILS_API_KEY;

export default function SwapWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a
            href="https://docs.trails.build/use-cases/swap"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 text-primary"
          >
            <span>Swap →</span>
          </a>
        </CardTitle>
        <CardDescription>
          Exchange tokens across chains in a single flow. Users pick input and
          output tokens and amounts.
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-center w-full">
        <TrailsWidget
          apiKey={apiKey}
          mode="swap"
          theme="light"
          buttonText="Swap with Trails"
          customCss={`
            --trails-font-family: "Century Gothic", "Arial", sans-serif;
            --trails-border-radius-button: 24px;
            --trails-primary: rgb(255 0 199);
            --trails-primary-hover: rgb(230 0 179);
            --trails-text-inverse: rgb(255 255 255);
            --trails-focus-ring: rgb(255 0 199);
          `}
          onOriginConfirmation={({txHash:ye,chainId:qe,sessionId:Ze})=>console.log("onOriginConfirmation:",{txHash:ye,chainId:qe,sessionId:Ze})}
          onDestinationConfirmation={({txHash:ye,chainId:qe,sessionId:Ze})=>console.log("onDestinationConfirmation:",{txHash:ye,chainId:qe,sessionId:Ze})}
          onCheckoutStart={({sessionId:ye})=>console.log("onCheckoutStart:",{sessionId:ye})}
          onCheckoutQuote={({sessionId:ye,quote:qe})=>console.log("onCheckoutQuote:",{sessionId:ye,quote:qe})}
          onCheckoutComplete={({sessionId:ye})=>console.log("onCheckoutComplete:",{sessionId:ye})}
          onCheckoutError={({sessionId:ye,error:qe})=>console.log("onCheckoutError:",{sessionId:ye,error:qe})}
          onCheckoutStatusUpdate={({sessionId:ye,transactionStates:qe})=>console.log("onCheckoutStatusUpdate:",{sessionId:ye,transactionStates:qe})}
          onOpen={() => console.log('Widget modal opened')}
        />
      </CardFooter>
    </Card>
  );
}


