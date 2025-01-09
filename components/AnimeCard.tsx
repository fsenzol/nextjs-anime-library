
import {AnilistAnimes} from "@/contants/constants";
import {MotionDiv} from "@/components/MotionDiv";
import Image from "next/image";

import episodeImg from "@/app/assets/images/episode.svg"
import starImg from "@/app/assets/images/star.svg"
import CardImage from "@/components/CardImage.";
import React from "react";


const AnimeCard = ({index, data}: { index: number, data: AnilistAnimes }) => {

    const {
        title: {
            english
        },
        coverImage: {
            extraLarge, color
        },
        averageScore,
        episodes,
        type
    } : AnilistAnimes = data



    return (
        <MotionDiv index={index}
        color={color}>
            <div>
                <CardImage src={`${extraLarge}`} />
            </div>

            <div>

                <div className="flex items-center justify-between p-2">
                    <p className="font-bold text-lg text-pretty break-all max-w-72">{`${english}`}</p>
                </div>

                <div className="flex items-center gap-6 px-2">
                    <div className="flex items-center gap-1">
                        <Image
                            src={episodeImg}
                            alt='Episode'
                            className="object-contain"
                        />
                        <span className="font-bold">{episodes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            src={starImg}
                            alt='Star'
                            className="object-contain"
                        />
                        <span className="font-boldtext-yellow-500">{averageScore}</span>
                    </div>

                    <div
                        className='flex items-center text-primary/50 justify-center w-fit mx-2 px-[4px] uppercase rounded-sm bg-accent-foreground/10 shadow-md pointer-events-none'>
                        <p>{type}</p>
                    </div>


                </div>
            </div>
        </MotionDiv>
    )
}
export default React.memo(AnimeCard)
