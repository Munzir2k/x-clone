/** @format */

import { Input } from "@/components/ui/input";
import React from "react";

const Search = () => {
    return (
        <div className="sticky top-0 py-2">
            <Input
                placeholder="Search"
                type="text"
                className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-zinc-900 rounded-3xl text-sm w-[22rem] px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
        </div>
    );
};

export default Search;
