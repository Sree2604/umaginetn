import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UmagineTN 2025 Experience",
  description: "Embark on a journey of Transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
