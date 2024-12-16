/** @format */

import Image from "next/image";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
import { ThemeToggle } from "@/app/Provider/ThemeToggle";
import Search from "./components/Search";

export default function Home() {
    return (
        <div className="flex justify-between max-w-8xl mx-auto px-5">
            <div className="hidden sm:inline border-r h-screen p-4">
                <Sidebar />
            </div>
            <div>Home</div>
            {/* Left component */}
            <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[450px]">
                <div className="flex items-center gap-6">
                    <ThemeToggle />
                    <Search />
                </div>
                <News />
            </div>
        </div>
    );
}
