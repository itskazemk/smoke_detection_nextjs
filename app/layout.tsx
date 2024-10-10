import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Navbar } from "@/Components/Navbar";

const Vazirmatn = localFont({
  src: "./fonts/Vazirmatn[wght].woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${Vazirmatn.className} antialiased`}>
        <MantineProvider>
          <Navbar>{children}</Navbar>
        </MantineProvider>
      </body>
    </html>
  );
}
