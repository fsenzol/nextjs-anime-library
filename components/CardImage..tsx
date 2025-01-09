
import React, {Suspense, useState} from 'react'
import Image from "next/image"
import {Skeleton} from "@/components/ui/skeleton";

const CardImage =  ({src} : {src: string}) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleLoadImage = async () => {
       return (
           <Image src={imgSrc}
                  alt="cardimage"
                  width={300}
                  height={300}
                  onError={() => setImgSrc(src)}
                  className="object-fill aspect-auto w-full h-auto max-sm:max-h-96 rounded-sm"
           />
       )
    }

    return (
        <div>
            <Suspense fallback={<Skeleton className="w-full h-full"> </Skeleton>} >
                {handleLoadImage}
            </Suspense>
        </div>
    )
}
export default CardImage
