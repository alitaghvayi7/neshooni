import { authOptions } from "@/configs/Auth";
import NextAuth from "next-auth/next";

const AuthHandler = NextAuth(authOptions);

export { AuthHandler as POST, AuthHandler as GET };
