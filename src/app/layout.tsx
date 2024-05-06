import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import Link from "next/link";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "ANS Tech Test",
  description: "Bitcoin Converter Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <nav className="mt-5">
          <Link className="text-xl p-7" href="/">
            Home
          </Link>
          <Link className="text-xl p-7" href="/converter">
            Converter
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
