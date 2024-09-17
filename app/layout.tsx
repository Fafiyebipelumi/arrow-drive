import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";
import ChakraProviders from "@/Providers/ChakraProvider";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arrow Drive",
  description: "Arrow Drive is designed to give you an easy and better access to the world around you by maintaining your daily cost of living.",
  authors: {
    name: "JAY25 InteServe",
    url: "jay25inteserve.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Arrow Drive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ChakraProviders>
            <TopNav />
            {children}
            <Footer />
          </ChakraProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
