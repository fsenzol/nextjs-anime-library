"use server";


import {AnilistAnimes, API_URL, QUERY_GET_ANIME_LIST} from "@/contants/constants";

export const fetchAnime = async (page: number) => {
    const data = await fetchAniListAnime(page)
    return data;
}

export const fetchAniListAnime = async (page: number): Promise<AnilistAnimes[]> => {
    const query = QUERY_GET_ANIME_LIST
    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {
                page: page,
                perPage: 8
            }
        }),
    })

    const data = await response.json();
    return data.data.Page.media
}

export const findAllAnimes = async (name: string, page: number) => {
    const response = await fetch(`${API_URL}/api/animes?search=${name}&limit=8&order=popularity&page=${page}`);
    const data = await response.json();
    console.log(data);
    return data;
}
