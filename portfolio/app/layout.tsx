import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanchitha Prasad | Software Engineer",
  description:
    "Portfolio of Sanchitha Prasad, Software Engineer specialising in Desktop Applications, Mobile Applications, .NET, APIs, Databases, and Enterprise Systems.",
  keywords: [
    "Sanchitha Prasad",
    "Software Engineer",
    ".NET",
    "Desktop Applications",
    "Mobile Applications",
    "C#",
    "ASP.NET Core",
    "ERP",
    "POS",
    "SQL Server",
    "Databases",
  ],
  authors: [{ name: "Sanchitha Prasad" }],
  openGraph: {
    title: "Sanchitha Prasad | Software Engineer",
    description:
      "Software Engineer with 5+ years of experience developing Desktop, Mobile, and Enterprise Applications.",
    type: "website",
    locale: "en_US",
    siteName: "Sanchitha Prasad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchitha Prasad | Software Engineer",
    description:
      "Software Engineer with 5+ years of experience developing web applications and business solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://sanchithaprasad.dev" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
