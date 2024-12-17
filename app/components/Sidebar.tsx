/** @format */
"use client";

import React from "react";
import { HiHome, HiDotsHorizontal } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
    const { data: session } = useSession();
    const router = useRouter();
    console.log(session);

    return (
        <div className="flex flex-col p-3 justify-between h-full">
            <div className="flex flex-col gap-4">
                <FaXTwitter
                    onClick={() => router.push("/")}
                    className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200"
                />
                <div className="flex items-center cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200 w-fit">
                    <HiHome
                        className="w-7 h-7"
                        onClick={() => router.push("/")}
                    />
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
            {session && (
                <div className="dark:text-gray-100 text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-all duration-200 gap-x-2">
                    {session.user?.email === "mohammadmunzir2k@gmail.com" ? (
                        <Image
                            src={"/avatar/me.jpeg"}
                            alt="usr"
                            width={40}
                            height={10}
                            className="rounded-full"
                        />
                    ) : (
                        <Image
                            src={session.user?.image!}
                            alt="usr"
                            width={40}
                            height={10}
                            className="rounded-full"
                        />
                    )}
                    <div className="hidden xl:inline">
                        <h2 className="font-bold">{session.user?.name}</h2>
                        <p className="text-muted-foreground">
                            @{session.user?.username}
                        </p>
                    </div>
                    <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline" />
                </div>
            )}
        </div>
    );
};

export default Sidebar;
