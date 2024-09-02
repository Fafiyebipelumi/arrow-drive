import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";
import ChakraProviders from "@/Providers/ChakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arrow Drive",
  description: "",
  authors: {
    name: "JAY25 InteServe",
    url: "",
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
          <ChakraProviders>{children}</ChakraProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
