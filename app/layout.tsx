import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import VoiceWidget from "@/components/retell/VoiceWidget";
import NavbarNoSSR from "@/components/layout/NavbarNoSSR";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kairos Growth Advisors",
  description:
    "Delivering solutions to complex problems. We help you turn AI-driven complexities into measurable business value.",
};

const navigationData = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Insights", href: "/insights" },
  { title: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarNoSSR navigationData={navigationData} />
        <main className="flex-1">{children}</main>
        <Footer />
        <VoiceWidget />
      </body>
    </html>
  );
}
