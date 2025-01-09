
import React, {Suspense, useState} from 'react'
import Image from "next/image"
import {Skeleton} from "@/components/ui/skeleton";

const LazyLoadImage = async (src: string, isFailed: () => void) => {
    return (
        <Image src={src}
               alt="cardimage"
               width={300}
               onError={isFailed}
               height={300}
               className="object-fill aspect-auto w-full h-auto max-sm:max-h-96 rounded-sm"
        />
    )
}

const CardImage =  ({src} : {src: string}) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <div>
            <Suspense fallback={<Skeleton className="p-5 h-full w-full"/>} >
                {LazyLoadImage(imgSrc, () => setImgSrc(imgSrc))}
            </Suspense>
        </div>
    )
}
export default CardImage
