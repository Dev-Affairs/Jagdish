import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jagdish Infra Heights | Shaping the Future of Odisha",
  description: "JAGDISH INFRAHEIGHTS PRIVATE LIMITED is a front-runner in the Bhubaneswar construction scene, specializing in premium residential and commercial developments with an unwavering commitment to quality and elegance.",
  openGraph: {
    title: "Jagdish Infra Heights | Shaping the Future of Odisha",
    description: "JAGDISH INFRAHEIGHTS PRIVATE LIMITED is a front-runner in the Bhubaneswar construction scene, specializing in premium residential and commercial developments with an unwavering commitment to quality and elegance.",
    url: "https://jagdishinfraheights.com",
    siteName: "Jagdish Infra Heights",
    images: [
      {
        url: "/og/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Jagdish Infra Heights Pvt. Ltd.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdish Infra Heights | Shaping the Future of Odisha",
    description: "JAGDISH INFRAHEIGHTS PRIVATE LIMITED is a front-runner in the Bhubaneswar construction scene, specializing in premium residential and commercial developments.",
    images: ["/og/og_image.jpg"],
  },
  keywords: [
    "Jagdish Infra Heights",
    "Construction Bhubaneswar",
    "Real Estate Odisha",
    "Commercial Construction",
    "Residential Construction",
    "Top Builders in Odisha",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
