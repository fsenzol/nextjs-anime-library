import React, {useRef} from 'react'
import {Anime, API_URL} from "@/contants/constants";
import {MotionDiv} from "@/components/MotionDiv";
import gsap from "gsap";

const AnimeCard = ({index,  data} : {index: number, data: Anime}) => {
    const {name, image: {original}, kind, episodes, score}: {id: string, name: string, kind: string, episodes: number, episodes_aired: number, image: {original: string}, score: string} = data;
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const box = cardRef.current.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        const rotateX = ((y / box.height) - 0.5) * 30; // Tilt vertically
        const rotateY = ((x / box.width) - 0.5) * -30; // Tilt horizontally

        gsap.to(cardRef.current, {
            rotateX,
            rotateY,
            scale: 1.04,
            transformPerspective: 1000,
            ease: 'power3.out',
        });
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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={variants}
            ref={cardRef}
            initial="hidden"
            animate="visible"
            transition={{
                delay: (0.25 * (index % 8)),
                ease: "easeInOut",
                duration: 0.5
            }}
            className="my-6 p-2 flex flex-col justify-between bg-primary/5 border rounded-lg cursor-pointer">
            <div>
                <img
                    src={`${API_URL}/${original}`}
                    className="object-fill aspect-auto w-full h-auto max-sm:max-h-96 rounded-sm"
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
                            alt='Episode'
                            className="object-contain"
                        />
                        <span className="font-bold">{episodes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                            src="./star.svg"
                            alt='Star'
                            className="object-contain"
                        />
                        <span className="font-boldtext-yellow-500">{score}</span>
                    </div>

                    <div
                        className='flex items-center justify-center w-fit mx-2 px-[4px] uppercase rounded-sm bg-accent-foreground/10 border shadow-md pointer-events-none'>
                        <p>{kind}</p>
                    </div>



                </div>
            </div>
        </MotionDiv>
    )
}
export default AnimeCard
