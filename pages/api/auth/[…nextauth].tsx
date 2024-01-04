import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            name: 'گوگل',
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: "/auth",
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, handler as PUT }