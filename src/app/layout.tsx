import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const garamond = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IFG - INSEAD Finance Group",
  description: "INSEAD Finance Group is a global network of alumni and students who are passionate about finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="ZedLJZHzMUth-z7iKPMSmfvG6avC-CZsSVG1ruMpDMM" />
      </head>
      <body className={garamond.className}>{children}</body>
    </html>
  );
}
