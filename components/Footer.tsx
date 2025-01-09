"use server";

import React from 'react'
import Image from "next/image";

import logoImage from "@/app/assets/images/logo.svg"
import IgImage from "@/app/assets/images/ig.svg"
import XImage from "@/app/assets/images/twitter.svg"

const Footer = () => {
    return (
        <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
            <p className="text-base font-bold text-white">@2023 BaseDCaTx</p>
            <Image
                src={logoImage}
                alt="logo"
                width={47}
                height={44}
                className="object-contain"
            />
            <div className="flex items-center gap-6">
                <Image
                    src={IgImage}
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
                <Image
                    src={XImage}
                    alt="logo"
                    width={19}
                    height={19}
                    className="object-contain"
                />
            </div>
        </footer>
    );
}
export default Footer
