import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UmagineTN 2025 Experience",
  description: "Embark on a journey of Transformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/Fontspring-DEMO-neometricalt-black.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/MyraidPro-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-myraidpro">{children}</body>
    </html>
  );
}
