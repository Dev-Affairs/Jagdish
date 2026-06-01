import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavBar from "../components/MobileNavBar";
import PageWrapper from "../components/PageWrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jagdish Infraheights Pvt. Ltd. | Premier Developers in Odisha",
  description: "Jagdish Estates (by Jagdish Infraheights Pvt. Ltd.) is a premier real estate builder, developer, and infrastructure owner. We offer luxury apartments, commercial leasing, and approved gated plots directly to clients across Bhubaneswar and Odisha.",
  icons: {
    icon: '/logo/logo-Rs.png',
    apple: '/logo/logo-Rs.png',
  },
  keywords: ["Real Estate", "Bhubaneswar", "Odisha", "Luxury Apartments", "Commercial Spaces", "Jagdish Infraheights", "RERA Approved Builder"],
  openGraph: {
    title: "Jagdish Infraheights Pvt. Ltd.",
    description: "Premium real estate builder and infrastructure owner in Odisha.",
    siteName: "Jagdish Infraheights",
    images: [
      {
        url: '/logo/logo-Rs.png',
        width: 1200,
        height: 630,
        alt: 'Jagdish Infraheights Logo',
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jagdish Infraheights Pvt. Ltd.',
    description: 'Premium real estate builder and infrastructure owner in Odisha.',
    images: ['/logo/logo-Rs.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-background text-foreground relative">
        <Header />
        <main className="flex-grow pb-16 md:pb-24">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <Footer />
        <MobileNavBar />
      </body>
    </html>
  );
}
