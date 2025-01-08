import React from 'react'
import {Anime, API_URL} from "@/contants/constants";
import {MotionDiv} from "@/components/MotionDiv";

const AnimeCard = ({index,  data} : {index: number, data: Anime}) => {
    const {name, image: {original}, kind, episodes, score}: {id: string, name: string, kind: string, episodes: number, episodes_aired: number, image: {original: string}, score: string} = data;

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1,},
    }

    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: (0.25 * (index % 8)),
                ease: "easeInOut",
                duration: 0.5
            }}
            className="my-6 p-2 flex flex-col justify-between">
            <div>
                <img
                    src={`${API_URL}/${original}`}
                    className="object-fill aspect-auto w-full h-auto max-sm:max-h-96 rounded-lg"
                    alt={name}
                />
            </div>

            <div>

                <div className="flex items-center justify-between p-2">
                    <p className="font-bold text-lg text-pretty break-all max-w-72">{name.replace(/_/g, " ")}</p>
                </div>

                <div className="flex items-center gap-6 px-2">
                    <div className="flex items-center gap-1">
                        <img
                            src="./episode.svg"
                            className="object-contain"
                        />
                        <span className="font-bold">{episodes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                            src="./star.svg"
                            className="object-contain"
                        />
                        <span className="font-boldtext-yellow-500">{score}</span>
                    </div>

                    <div
                        className='flex items-center justify-center w-fit mx-2 px-[4px] uppercase rounded-sm bg-gradient-to-br text-sm font-bold from-slate-400 to-transparent pointer-events-none'>
                        <p>{kind}</p>
                    </div>



                </div>
            </div>
        </MotionDiv>
    )
}
export default AnimeCard
