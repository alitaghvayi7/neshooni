import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export type roles = "user" | "admin" | "businessOwner";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      token: string;
      id: number;
      firstName: string | null;
      lastName: string | null;
      role: roles[];
      email?: string | null;
      mobile: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    token: string;
    id: number;
    firstName: string | null;
    lastName: string | null;
    role: roles[];
    email?: string | null;
    mobile: string;
  }
}

declare module "next-auth" {
  interface User {
    token: string;
    id: number;
    firstName: string | null;
    lastName: string | null;
    role: roles[];
    email?: string | null;
    mobile: string;
  }

  interface AdapterUser {
    token: string;
    id: number;
    firstName: string | null;
    lastName: string | null;
    role: roles[];
    email?: string | null;
    mobile: string;
  }
}
