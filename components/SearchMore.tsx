"use client";

import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import {AnilistAnimes} from "@/contants/constants";
import AnimeCard from "@/components/AnimeCard";
import {fetchAniListAnimeByName} from "@/app/actions";

let page = 1;

import spinnerImage from "@/app/assets/images/spinner.svg";

const SearchMore = ({name}: { name: string }) => {

    const {ref, inView} = useInView();
    const [data, setData] = useState<AnilistAnimes[]>([]);

    useEffect(() => {
        if (inView) {
            fetchAniListAnimeByName(page, name).then(res => {
                setData(data => [...data, ...res])
                page++;
            })
        }
    }, [data, inView, name]);

    return (
        <main>
            <section className="px-3">
                <div
                    className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 2xl:grid-cols-5 ">
                    {Array.from(new Map(data.map(item => [item.id, item])).values()).map(
                        (item, index) => {
                            return (<AnimeCard data={item} index={index} key={item.id}/>)
                        })}
                </div>
            </section>
            <div className="w-full p-2 pb-6 flex items-center justify-center" ref={ref}>
                <Image src={spinnerImage}
                       alt="spinner"
                       width={56}
                       height={56}
                />
            </div>
        </main>

    )
}
export default SearchMore
