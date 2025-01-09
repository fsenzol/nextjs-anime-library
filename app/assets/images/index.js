import bg0 from "./bg-0.png"
import bg1 from "./bg-1.png"
import bg2 from "./bg-2.png"
import bg3 from "./bg-3.png"
import bg4 from "./bg-4.png"

export const randomBgImage = () => {
    const images = [bg0, bg1, bg2, bg3, bg4]
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex];
}