import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "センチュリー21ホームマート - 奈良の不動産会社",
  description: "センチュリー21リフォーム施工店。奈良県広陵町の不動産会社。センチュリー21ホームマートは、売買仲介・買取（URICO）・リフォームまでワンストップでサポート。地域密着の安心サービスをお届けします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingCTA />
      </body>
    </html>
  );
}
