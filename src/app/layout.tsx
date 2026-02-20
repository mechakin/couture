import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://couture-2i48c91x0-mechakin.vercel.app"
  ),
  title: "Couture",
  description:
    "Discover the world of Couture. Our designer store embodies luxury and style, showcasing meticulously crafted garments and accessories that redefine fashion. Immerse yourself in the allure of haute couture at its finest.",
  twitter: {
    title: "Couture",
    description:
      "Discover the world of Couture. Our designer store embodies luxury and style, showcasing meticulously crafted garments and accessories that redefine fashion. Immerse yourself in the allure of haute couture at its finest.",
  },
  openGraph: {
    title: "Couture",
    description:
      "Discover the world of Couture. Our designer store embodies luxury and style, showcasing meticulously crafted garments and accessories that redefine fashion. Immerse yourself in the allure of haute couture at its finest.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
