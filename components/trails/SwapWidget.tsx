import { TrailsWidget } from "0xtrails/widget";
import { Button } from "../ui/button";
import { ArrowLeftRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

export default function SwapWidget() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a
            href="https://docs.trails.build/examples/swap"
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
          mode="swap"
          theme="auto"
          buttonText="Swap with Trails"
          customCss={`
            --trails-font-family: "Century Gothic", "Arial", sans-serif;
            --trails-border-radius-button: 24px;
            --trails-primary: rgb(255 0 199);
            --trails-primary-hover: rgb(230 0 179);
            --trails-text-inverse: rgb(255 255 255);
            --trails-focus-ring: rgb(255 0 199);
          `}
        />
      </CardFooter>
    </Card>
  );
}


