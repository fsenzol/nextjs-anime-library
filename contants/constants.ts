import {z} from "zod";

export const API_URL = "https://shikimori.one"

export interface Anime {
    id: string;
    name: string;
    kind: string;
    episodes: number;
    episodes_aired: number;
    image: {
        original: string;
    };
    score: string;
}

export const formSchema = z.object({
    name: z.string().min(1, "Nigga please don't leave it empty lol!").max(25, "Jeez dude!")
})
