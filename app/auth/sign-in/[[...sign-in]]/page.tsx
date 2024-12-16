/** @format */

import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
    return (
        <main className="flex h-screen w-full items-center justify-center bg-black">
            <SignIn />
        </main>
    );
}

export default SignInPage;
