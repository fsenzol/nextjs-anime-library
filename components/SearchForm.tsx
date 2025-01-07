"use client";

import React, {useActionState, useState} from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {useRouter} from "next/navigation";
import {formSchema} from "@/contants/constants";
import {ZodError} from "zod";


const SearchForm = () => {
    const router = useRouter()
    const [err, setErr] = useState<Record<string, string>>({})
    const handleSearchAnime = async (prevState: never, e: FormData) => {
        try {
            await formSchema.parseAsync({name: e.get("name")})
            router.push(`/search?name=${e.get("name")}`)
        } catch(error) {
            if (error instanceof ZodError) {
                setErr(error.flatten().fieldErrors as unknown as Record<string, string>)
                console.error(err)
            } else {
                console.log("Unknown error", err)
            }
        }

    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [, dispatch, isDone] = useActionState(handleSearchAnime, {
        error: '',
        state: "INITIAL"
    })
    return (
        <form action={dispatch}>
            <div className="flex w-full pt-8 px-5 pb-1 justify-center items-center space-x-2 z-30" tabIndex={0}>
                <Input type="text" placeholder="Anime title/name" name="name" className="max-w-lg"/>
                <Button type="submit" className="bg-white text-black hover:text-white" disabled={isDone}>{isDone ? "Search" : "Searching..."}</Button>
            </div>
            {err.name && (<p className="text-sm font-bold text-red-600">{err.name}</p>)}
        </form>
    )
}
export default SearchForm
