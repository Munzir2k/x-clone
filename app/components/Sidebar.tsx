/** @format */
"use client";

import React from "react";
import { HiHome } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignOutButton, useAuth } from "@clerk/nextjs";

const Sidebar = () => {
    const router = useRouter();
    const { userId } = useAuth();

    return (
        <div className="flex flex-col gap-4">
            <FaXTwitter
                onClick={() => router.push("/")}
                className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
            />
            <div className="flex items-center cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200 w-fit">
                <HiHome className="w-7 h-7" onClick={() => router.push("/")} />
                <span className="font-bold hidden xl:inline">Home</span>
            </div>

            <Button className="bg-blue-500 text-white font-bold px-4 py-2 mt-4 hover:bg-blue-600 hover:brightness-100 rounded-full transition-all duration-200 w-48 h-9 shadow-md">
                <SignOutButton />
            </Button>
        </div>
    );
};

export default Sidebar;
