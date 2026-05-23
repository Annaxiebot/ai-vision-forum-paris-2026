import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EVENT_CONFIG } from "@/lib/constants";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const isCompleted = EVENT_CONFIG.status === "completed";

const description = isCompleted
  ? `Forum Report from ${EVENT_CONFIG.name} (${EVENT_CONFIG.dateDisplay}, Paris) — Architecting Human–AI Synergy. Executive summary, panel findings, multimedia recap, and the Paris Initiative.`
  : `Join us on ${EVENT_CONFIG.dateDisplay} in ${EVENT_CONFIG.location.city} for ${EVENT_CONFIG.name} - exploring Agents & Agentic Development's Impact on Humanity. Invitation-only event co-located with GOSIM Paris.`;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${EVENT_CONFIG.domain}`),
  title: `${EVENT_CONFIG.name} | ${EVENT_CONFIG.tagline}`,
  description,
  keywords: [
    "AI Vision Forum",
    "Paris 2026",
    "Agentic AI",
    "AI Agents",
    "Open Source AI",
    "AI Governance",
    "AIGC Spotlight",
    "GOSIM Paris",
    "CLAW Stack",
    "Open Token",
    "Digital Public Goods",
  ],
  authors: [{ name: "AI Vision Forum Organizing Committee" }],
  openGraph: {
    title: `${EVENT_CONFIG.name}`,
    description,
    url: `https://${EVENT_CONFIG.domain}`,
    siteName: EVENT_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: EVENT_CONFIG.ogImageUrl,
        width: 900,
        height: 1100,
        alt: `${EVENT_CONFIG.name} — ${EVENT_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_CONFIG.name}`,
    description,
    images: [EVENT_CONFIG.ogImageUrl],
  },
};

// JSON-LD Event schema — updates eventStatus based on lifecycle.
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT_CONFIG.name,
  description: `${EVENT_CONFIG.tagline} — ${EVENT_CONFIG.guidingQuestion}`,
  startDate: EVENT_CONFIG.date,
  eventStatus: isCompleted
    ? "https://schema.org/EventScheduled" // schema.org doesn't have a strict "Completed" state; use scheduled with isAccessibleForFree.
    : "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Paris, France",
    address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  },
  organizer: { "@type": "Organization", name: "AI Vision Forum" },
  url: `https://${EVENT_CONFIG.domain}`,
  image: [`https://${EVENT_CONFIG.domain}${EVENT_CONFIG.ogImageUrl}`],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
