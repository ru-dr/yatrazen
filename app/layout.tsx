import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YatraZen",
  description: "Your Complete Travel Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>About - My Clothing Store</title>
        <meta
          name="description"
          content="Your Complete Travel Companion"
        />
        <meta property="og:title" content="YatraZen - travel companion" />
        <meta
          property="og:description"
          content="YatraZen is your complete travel companion, that allows you to translate local languages, find nearby hospitals, see the latest weather, find all travel news , explore new places according to you and much more. "
        />
        <meta property="og:url" content="https://yatrazen.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
