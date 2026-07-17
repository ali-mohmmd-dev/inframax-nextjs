import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inframax UAE",
  description: "Leading HDD Infrastructure Solutions in the UAE",
  icons: {
    icon: "/inframax/assets/images/global-favicon-192x192.webp",
    shortcut: "/inframax/assets/images/global-favicon-32x32.webp",
    apple: "/inframax/assets/images/global-favicon-180x180.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/inframax/assets/images/global-favicon-192x192.webp" />
        <link rel="apple-touch-icon" href="/inframax/assets/images/global-favicon-180x180.webp" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
        <QuoteModal />
      </body>
    </html>
  );
}
