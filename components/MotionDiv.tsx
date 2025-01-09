"use client";
import {motion} from "framer-motion";
import {ReactNode, useRef} from "react";
import gsap from "gsap";

export const MotionDiv = ({children, index, color} : Readonly<{
    children: ReactNode;
    index: number,
    color: string,
}>) => {

    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const box = cardRef.current.getBoundingClientRect();

            const x = event.clientX - box!.left;
            const y = event.clientY - box!.top;

            const rotateX = ((y / box!.height) - 0.5) * 20; // Tilt vertically
            const rotateY = ((x / box!.width) - 0.5) * -20; // Tilt horizontally

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
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={variants}
            initial="hidden"
            animate="visible"
            style={
                {
                    backgroundColor: `${color}3A`,
                }
            }
            className={`rounded-lg py-1 px-2 cursor-pointer overflow-hidden backdrop-blur-[3px]`}
            transition={{
                delay: (0.25 * (index % 8)),
                ease: "easeInOut",
                duration: 0.5
            }}
        >
            {children}
        </motion.div>
    )
}