import React from "react";
import Navigation from "@/components/Navigation";
import LoadMore from "@/components/LoadMore";
import Image from "next/image";

import logoImage from "@/app/assets/images/logo.svg"
import animeImage from "@/app/assets/images/anime.png"

export const experimental_ppr = true

export default function Home() {
    return (
      <main>
          <header className="flex flex-col justify-center relative">
              <Navigation />
              <Image src={logoImage} alt="logo" width={101} height={68} className="m-2"/>
              <div className="flex items-center lg:justify-between mx-2 lg:flex-row flex-col justify-start">
                  <h1 className="text-7xl text-pretty max-lg:my-6 break-words leading-[80px]">Explore The <span
                      className="text-red-500">Diverse Realms</span> of Anime Magic</h1>
                  <Image
                      alt="logo"
                      width={1276}
                      height={1164}
                      className="object-contain lg:max-h-72 inset-0 h-auto"
                      src={animeImage}
                  />
              </div>

          </header>
          <LoadMore/>
      </main>
    );
}
