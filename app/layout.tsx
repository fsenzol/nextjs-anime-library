import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import SearchForm from "@/components/SearchForm";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Anime Library",
  description: "Your favorite anime, all in one place",
};

const dmSans = DM_Sans({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}
      >
        <main className="bg-[#0F1117] min-h-screen w-full text-white -z-50">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
