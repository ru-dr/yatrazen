import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

// Explicit types for metadata properties
type OpenGraph = {
  title: string;
  description: string;
  type: string;
  url: string;
  countryName: string;
  locale: string;
  determiner: string;
  emails: string[];
};

type CustomMetadata = {
  title: string;
  description: string;
  openGraph: OpenGraph;
};

export const metadata: CustomMetadata = {
  title: "YatraZen",
  description:
    "YaatraZen is your complete travel companion, that allows you to translate local languages, find nearby hospitals, see the latest weather, find all travel news , explore new places according to you and much more.",
  openGraph: {
    title: "YatraZen",
    description:
      "YatraZen is your complete travel companion, that allows you to translate local languages, find nearby hospitals, see the latest weather, find all travel news , explore new places according to you and much more.",
    type: "website",
    url: "https://yatrazen.vercel.app/",
    countryName: "India",
    locale: "en_IN",
    determiner: "auto",
    emails: ["yatrazen@proton.me"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta
          property="og:determiner"
          content={metadata.openGraph.determiner}
        />
        <meta
          property="og:country_name"
          content={metadata.openGraph.countryName}
        />
        {metadata.openGraph.emails.map((email, index) => (
          <meta key={index} property="og:email" content={email} />
        ))}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClerkProvider>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
