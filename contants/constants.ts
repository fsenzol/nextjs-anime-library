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
        x96: string;
        x48: string;
        preview: string;
    };
    score: string;
}


export interface AnilistAnimes {
    id: string
    title: {
        romaji: string
        english: string,
    },
    coverImage: {
        large: string,
        extraLarge: string,
        color: string
    },
    averageScore: number,
    episodes: number
    bannerImage: string
    type: string
}

export const QUERY_GET_ANIME_LIST =  (`
query ($page: Int, $perPage: Int) {
  Page(page: $page , perPage: $perPage) {
    media(type: ANIME, sort: POPULARITY_DESC) {
      id
      title {
        romaji
        english
      }
      bannerImage
      type
      episodes
      coverImage {
        large
        extraLarge
        color
      }
      averageScore
    }
  }
}
`)



export const formSchema = z.object({
    name: z.string().min(1, "Nigga please don't leave it empty lol!").max(25, "Jeez dude!")
})
