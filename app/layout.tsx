import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signing Tool with Private Key",
  description: "A simple tool to sign a message with a private key",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
