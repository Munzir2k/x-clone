/** @format */

import Image from "next/image";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
import { ThemeToggle } from "@/components/Provider/ThemeToggle";

export default function Home() {
    return (
        <div className="flex justify-between max-w-6xl mx-auto">
            <div className="hidden sm:inline border-r h-screen p-4">
                <Sidebar />
            </div>
            <div>Home</div>
            {/* Left component */}
            <div className="flex gap-3">
                <ThemeToggle />
                <News />
            </div>
        </div>
    );
}
