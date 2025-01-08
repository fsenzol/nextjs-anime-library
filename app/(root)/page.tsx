import React from "react";
import Navigation from "@/components/Navigation";
import LoadMore from "@/components/LoadMore";


export default function Home() {
    return (
      <main>
          <header className="flex flex-col justify-center relative">
              <Navigation />
              <img src="./logo.svg" alt="logo" width={101} height={68} className="m-2"/>
              <div className="flex items-center lg:justify-between mx-2 lg:flex-row flex-col justify-start">
                  <h1 className="text-7xl text-pretty max-lg:my-6 break-words leading-[80px]">Explore The <span
                      className="text-red-500">Diverse Realms</span> of Anime Magic</h1>
                  <img
                      alt="logo"
                      className="object-contain lg:max-h-72 inset-0 h-auto"
                      src="./anime.png"
                  />
              </div>
              <div>
                  <video src="./logo.mp4"
                         poster="./hero.png"
                         autoPlay
                         muted
                         loop
                         className="w-full h-auto min-h-screen object-cover absolute inset-0 -z-20 blur-md rounded-lg filter"/>
              </div>
          </header>
          <LoadMore/>
      </main>
    );
}
