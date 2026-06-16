import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Café Gameria — Ultimate Cyberpunk Gaming Zone | DHA Phase 1, Lahore",
  description:
    "PS5 | PS4 | Xbox | Squad Gaming | Foosball & Snacks — Open 5PM to 6AM. Premium cyberpunk gaming lounge in DHA Phase 1, Lahore. Book your session now!",
  keywords: [
    "Café Gameria",
    "Gaming Cafe Lahore",
    "PS5 Lahore",
    "PS4 Gaming",
    "Xbox 360",
    "Squad Gaming",
    "LAN Gaming",
    "DHA Phase 1 Lahore",
    "Gaming Zone",
    "Late Night Gaming",
    "Esports Lounge",
    "Cyberpunk Gaming",
  ],
  authors: [{ name: "Café Gameria" }],
  icons: {
    icon: "/images/cafe-gameria/logo.jpg",
  },
  openGraph: {
    title: "Café Gameria — Ultimate Cyberpunk Gaming Zone",
    description:
      "PS5 | PS4 | Xbox | Squad Gaming | Foosball & Snacks — Open 5PM to 6AM in DHA Phase 1, Lahore",
    url: "https://cafegameria.com",
    siteName: "Café Gameria",
    type: "website",
    images: [
      {
        url: "/images/cafe-gameria/hero-cyberpunk.jpg",
        width: 1344,
        height: 768,
        alt: "Café Gameria - Cyberpunk Gaming Arena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Gameria — Ultimate Cyberpunk Gaming Zone",
    description:
      "PS5 | PS4 | Xbox | Squad Gaming — Open 5PM to 6AM in DHA Phase 1, Lahore",
    images: ["/images/cafe-gameria/hero-cyberpunk.jpg"],
  },
  metadataBase: new URL("https://cafegameria.com"),
};

export const viewport: Viewport = {
  themeColor: "#050508",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
