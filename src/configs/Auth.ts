import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt({ account, token, user, profile, session, trigger }) {
      if (trigger === "signIn") {
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.id = user.id as number;
        token.role = user.role;
        token.email = user.email;
        token.token = user.token;
        token.mobile = user.mobile;
      }
      return token;
    },
    session({ session, token, user, trigger }) {
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.token = token.token;
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.email = token.email;
      session.user.mobile = token.mobile;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      name: "گوگل",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: "loginWithMobile",
      name: "loginWithMobile",
      credentials: {
        mobile: { label: "mobile", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(_, { body, query }) {
        const data = JSON.parse(query?.data);

        return new Promise((resolve) =>
          resolve({
            firstName: data?.firstName,
            lastName: data?.lastName,
            id: data?.id,
            role: data?.role,
            token: data?.token,
            email: data?.email,
            mobile: data?.mobile,
          }),
        );
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
};
