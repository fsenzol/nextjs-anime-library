import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import React from "react";
import Image from "next/image";
import {randomBgImage} from "@/app/assets/images";

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
        <body className={`${dmSans.className} dark`}
        >

        <div>
            <Image src={randomBgImage()}
                   width={randomBgImage().width}
                   alt="background-image"
                   height={randomBgImage().height}
                   className="w-full h-auto min-h-screen object-cover aspect-auto inset-0 -z-20 rounded-lg fixed opacity-60"/>
        </div>

        <main className="min-h-screen w-full text-white -z-50 dark ">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
