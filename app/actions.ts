"use server";


import {API_URL} from "@/contants/constants";

export const fetchAnime = async (page: number) => {
    const response = await fetch(`${API_URL}/api/animes?page=${page}&limit=8&order=popularity`);
    const data = await response.json();
    return data;
}

export const findAllAnimes = async (name: string, page: number) => {
    const response = await fetch(`${API_URL}/api/animes?search=${name}&limit=8&order=popularity&page=${page}`);
    const data = await response.json();
    return data;
}
