import type { Metadata } from "next";
import { getSiteFont } from "@/lib/figma-font";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Nomads Academy Team Boilerplate",
  description:
    "Figma MCP link-ээс шууд дизайн implement хийхэд зориулсан Next.js team boilerplate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteFont = getSiteFont();

  return (
    <html lang="mn" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={siteFont.stylesheetHref} />
      </head>
      <body className="min-h-full flex flex-col" style={{ "--font-sans": siteFont.cssStack } as React.CSSProperties}>
        {children}
      </body>
    </html>
  );
}
