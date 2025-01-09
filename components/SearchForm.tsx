"use client";

import React, {useActionState, useState} from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {useRouter} from "next/navigation";
import {formSchema} from "@/contants/constants";
import {ZodError} from "zod";
import {Search} from "lucide-react";


const SearchForm = () => {
    const router = useRouter()
    const [err, setErr] = useState<Record<string, string>>({})
    const handleSearchAnime = async (prevState: never, e: FormData) => {
        try {
            await formSchema.parseAsync({name: e.get("name")})
            router.push(`/search?name=${e.get("name")}`)
        } catch(error) {
            if (error instanceof ZodError) {
                return setErr(error.flatten().fieldErrors as unknown as Record<string, string>)
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
            <div className="flex w-fit mt-8 mx-5 p-1 rounded-full bg-accent/80 justify-center items-center space-x-2 z-30 " tabIndex={0}>
                <Input type="text" placeholder="Search... <Anime>" name="name" className="max-w-lg rounded-full bg-primary/90 text-primary-foreground/60 !outline-0"
                />
                <Button type="submit" className="rounded-full bg-transparent" disabled={isDone}>
                    <Search className="size-6 stroke-primary" />
                </Button>
            </div>
            {err.name && (<p className="text-sm font-bold text-red-600">{err.name}</p>)}
        </form>
    )
}
export default SearchForm
