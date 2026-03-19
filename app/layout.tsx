import type { Metadata } from "next";
import "./globals.css";
import GSAPProvider from "@/components/providers/GSAPProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navigation from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "CHIRO — Premium Golf Accessories",
  description:
    "We always stand on the path to achievement. CHIRO designs premium golf accessories for those committed to excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="antialiased">
      <body className="bg-chiro-black text-chiro-light overflow-x-hidden">
        <GSAPProvider>
          <SmoothScrollProvider>
            <Navigation />
            {children}
          </SmoothScrollProvider>
        </GSAPProvider>
      </body>
    </html>
  );
}
