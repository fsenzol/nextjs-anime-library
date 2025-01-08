import React from 'react'
import SearchMore from "@/components/SearchMore";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {redirect} from "next/navigation";


const Page = async ({searchParams}: {searchParams: Promise<{name: string}>}) => {
    //const animeName = (await params).name
    const animeName = (await searchParams).name

    if (!animeName) {
        redirect("/");
    }

    return (
        <section>
            <nav className="p-5">
                <Link href="/">
                    <Button className="text-red-500 z-10 shadow-2xl border border-red-500 cursor-pointer">{'>'} BACK TO HOME {'<'}
                    </Button>
                </Link>
            </nav>
            <h1 className="p-5 text-3xl">Showing All Results That Match The Name/Title: <span className="text-red-500 uppercase">{animeName}</span></h1>
            <SearchMore name={animeName} />
        </section>
    )
}
export default Page
