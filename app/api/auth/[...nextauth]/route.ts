/** @format */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],

    callbacks: {
        async session({ session, token }) {
            token.picture = session.user?.image;
            // @ts-ignore
            session.user.username = session.user.name
                .split(" ")
                .join("")
                .toLocaleLowerCase();
            // @ts-ignore
            session.user.uid = token.sub;
            return session;
        },
    },
});

export { handler as GET, handler as POST };
