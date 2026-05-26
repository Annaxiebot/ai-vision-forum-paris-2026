import type { Metadata } from "next";
import { EVENT_CONFIG } from "@/lib/constants";
import { EssayContent } from "./EssayContent";

export const metadata: Metadata = {
  title: `Beyond the "Double Exponential" — 5 Critical Takeaways · ${EVENT_CONFIG.name}`,
  description:
    "Companion essay distilling the AI Vision Forum Paris 2026 into five critical takeaways: the CLAW stack, sovereign AI as branding, the junior developer crisis, friction as a feature, and tokens as the new digital public good.",
  openGraph: {
    title: `Beyond the "Double Exponential" — 5 Critical Takeaways`,
    description: "Companion essay from the AI Vision Forum Paris 2026.",
    images: [EVENT_CONFIG.ogImageUrl],
    type: "article",
  },
};

export default function DoubleExponentialBlog() {
  return <EssayContent />;
}
