import React from 'react'
import SearchForm from "@/components/SearchForm";

const Navigation = () => {
    return (
        <nav className="flex flex-row justify-between  rounded-lg absolute z-10 top-0
        left-0 right-0 w-full">
            <div>

            </div>

            <div>
                <SearchForm />
            </div>
        </nav>
    )
}
export default Navigation
