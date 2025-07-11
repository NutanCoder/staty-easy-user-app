import ErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RouteProgress from "@/components/RouteProgress";
import ToastProvider from "@/components/ToastProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: "Staty Easy",
    template: "%s | Staty Easy"
  },
  description: "Making property search and management easy and efficient.",
  keywords: [
    "real estate",
    "property management",
    "property search",
    "rental properties",
    "buy property",
    "sell property"
  ],
  authors: [{ name: "Staty Easy Team" }],
  creator: "Staty Easy",
  publisher: "Staty Easy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Staty Easy",
    description: "Making property search and management easy and efficient.",
    url: "https://statyeasy.com",
    siteName: "Staty Easy",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <RouteProgress />
        <ErrorBoundary />
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ToastProvider />
      </body>
    </html>
  );
}
