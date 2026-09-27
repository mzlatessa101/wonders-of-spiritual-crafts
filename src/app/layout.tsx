import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://mzlatessa101.github.io/wonders-of-spiritual-crafts";

const siteDescription =
  "Wonders of Spiritual Crafts (Wonders / Spiritual Crafts) is a social learning platform for witchcraft and spiritual craft\u2014spells & rituals, astrology, crystals, mediumship, moon cycles, and elemental practice\u2014hosted by Supreme Witch Latessa Jamison.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wonders of Spiritual Crafts",
    template: "%s \u00b7 Wonders of Spiritual Crafts",
  },
  description: siteDescription,
  keywords: [
    "Wonders of Spiritual Crafts",
    "Wonders Spiritual Crafts",
    "witchcraft community",
    "spiritual crafts",
    "spells rituals",
    "astrology",
    "crystals",
    "mediumship",
    "Supreme Witch Latessa Jamison",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wonders of Spiritual Crafts",
    title: "Wonders of Spiritual Crafts",
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonders of Spiritual Crafts",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Wonders of Spiritual Crafts",
      url: siteUrl,
      description:
        "A social + learning platform where spiritual people, witches, beginners, and practitioners of many paths can learn craft, share community, read a spiritual library, receive newsletters, and gather in VIP circles.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Wonders of Spiritual Crafts",
      url: siteUrl,
      description:
        "A social + learning platform where spiritual people, witches, beginners, and practitioners of many paths can learn craft, share community, read a spiritual library, receive newsletters, and gather in VIP circles.",
      founder: {
        "@type": "Person",
        name: "Latessa Jamison",
        alternateName: "Supreme Witch Latessa Jamison",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="stars-bg font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
