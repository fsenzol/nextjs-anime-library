"use client";

import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import {fetchAnime} from "@/app/actions";
import {AnilistAnimes} from "@/contants/constants";
import AnimeCard from "@/components/AnimeCard";

let page = 1;

import spinnerImage from "@/app/assets/images/spinner.svg";

const LoadMore = () => {

    const {ref, inView} = useInView();
    const [data, setData] = useState<AnilistAnimes[]>([]);

    useEffect(() => {
        if (inView) {
            fetchAnime(page).then(res => {
                setData( data => [...data, ...res])
                page++;
            })
        }
    }, [data, inView]);

    return (
        <main>
            <section className="px-3">
                <h1 className="my-10 text-2xl text-red-200 uppercase font-bold">Explore Anime</h1>
                <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 2xl:grid-cols-5 gap-3">
                    {
                        data.map((item, index) => {
                            return ( <AnimeCard data={item} index={index} key={item.id + index}/>)
                        })
                    }
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
export default LoadMore
