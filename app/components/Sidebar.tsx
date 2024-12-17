/** @format */
"use client";

import React from "react";
import { HiHome } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const Sidebar = () => {
    const { data: session } = useSession();
    const router = useRouter();

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
            {session ? (
                <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
                    onClick={() => signOut()}
                >
                    Sign Out
                </Button>
            ) : (
                <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
                    onClick={() => signIn()}
                >
                    Sign In
                </Button>
            )}
        </div>
    );
};

export default Sidebar;
