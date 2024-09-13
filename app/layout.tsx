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
  description: "",
  authors: {
    name: "JAY25 InteServe",
    url: "jay25inteserve.com",
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
