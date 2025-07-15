import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UM Marketing - Performance Marketing Agency for E-commerce",
  description: "Scale your e-commerce business with data-driven Facebook Ads, Google Ads, and conversion optimization. Proven results with 394% average ROAS.",
  keywords: "performance marketing, e-commerce marketing, facebook ads, google ads, conversion optimization, ROAS",
  authors: [{ name: "UM Marketing" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "UM Marketing - Performance Marketing Agency for E-commerce",
    description: "Scale your e-commerce business with data-driven Facebook Ads, Google Ads, and conversion optimization. Proven results with 394% average ROAS.",
    url: "https://um.marketing",
    siteName: "UM Marketing",
    type: "website",
    images: [
      {
        url: "/wp-content/themes/um/assets/img/hero-girl.png",
        width: 1200,
        height: 630,
        alt: "UM Marketing - Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UM Marketing - Performance Marketing Agency for E-commerce",
    description: "Scale your e-commerce business with data-driven Facebook Ads, Google Ads, and conversion optimization. Proven results with 394% average ROAS.",
    images: ["/wp-content/themes/um/assets/img/hero-girl.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/wp-content/uploads/fbrfg/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/wp-content/uploads/fbrfg/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/wp-content/uploads/fbrfg/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/wp-content/uploads/fbrfg/favicon-16x16.png" />
        <link rel="manifest" href="/wp-content/uploads/fbrfg/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}