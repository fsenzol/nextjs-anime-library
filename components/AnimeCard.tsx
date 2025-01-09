import {Anime, API_URL} from "@/contants/constants";
import {MotionDiv} from "@/components/MotionDiv";
import Image from "next/image";

import episodeImg from "@/app/assets/images/episode.svg"
import starImg from "@/app/assets/images/star.svg"
import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";

const AnimeCard = ({index, data}: { index: number, data: Anime }) => {
    const {name, image: {original}, kind, episodes, score}: {
        id: string,
        name: string,
        kind: string,
        episodes: number,
        episodes_aired: number,
        image: { original: string },
        score: string
    } = data;

    // const [imageDim, setImageDim] = useState({width: 0, height: 0});
    //
    // useEffect(() => {
    //     const fetchImageDimensions = async () => {
    //         try {
    //             const response = await fetch(`${API_URL}/${original}`);
    //             const blob = await response.blob();
    //
    //             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //             // @ts-expect-error
    //             const img = new Image();
    //             img.onload = () => {
    //                 setImageDim({ width: img.width, height: img.height });
    //             };
    //             img.src = URL.createObjectURL(blob);
    //         } catch (error) {
    //             console.error('Error fetching image:', error);
    //         }
    //     };
    //
    //     fetchImageDimensions().then(r => r);
    // }, [original])
    

    const cardRef = useRef<HTMLDivElement | null>(null);
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const box = cardRef.current.getBoundingClientRect();

            const x = event.clientX - box!.left;
            const y = event.clientY - box!.top;

            const rotateX = ((y / box!.height) - 0.5) * 30; // Tilt vertically
            const rotateY = ((x / box!.width) - 0.5) * -30; // Tilt horizontally

            gsap.to(cardRef.current, {
                rotateX,
                rotateY,
                scale: 1.04,
                transformPerspective: 1000,
                ease: 'power3.out',
            });
        }
    };

    const handleMouseLeave = () => {
        // Reset the element to its original state
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            ease: 'power3.out',
        });
    };

    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1,},
    }

    return (
        <MotionDiv
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: (0.25 * (index % 8)),
                ease: "easeInOut",
                duration: 0.5
            }}
        >
            <div>
                <Image src={`${API_URL}/${original}`}
                       alt="cardimage" width={200}
                       height={200}
                       className="object-fill aspect-auto w-full h-auto max-sm:max-h-96 rounded-sm"
                />
            </div>

            <div>

                <div className="flex items-center justify-between p-2">
                    <p className="font-bold text-lg text-pretty break-all max-w-72">{name.replace(/_/g, " ")}</p>
                </div>

                <div className="flex items-center gap-6 px-2">
                    <div className="flex items-center gap-1">
                        <Image
                            width={1}
                            height={1}
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
                        <span className="font-boldtext-yellow-500">{score}</span>
                    </div>

                    <div
                        className='flex items-center text-primary/50 justify-center w-fit mx-2 px-[4px] uppercase rounded-sm bg-accent-foreground/10 shadow-md pointer-events-none'>
                        <p>{kind}</p>
                    </div>


                </div>
            </div>
        </MotionDiv>
    )
}
export default AnimeCard
