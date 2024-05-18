"use client";

import { signIn } from "next-auth/react";
import { useParams, useSearchParams } from "next/navigation";

export const useLogin = () => {
  const params = useSearchParams();

  const login = (
    {
      email,
      firstName,
      id,
      lastName,
      mobile,
      role,
      token,
    }: {
      firstName: string;
      lastName: string;
      mobile: string;
      id: number;
      role: string;
      token: string;
      email: string;
    },
    callbackUrl = "/profile",
  ) => {
    signIn(
      "loginWithMobile",
      {
        callbackUrl: params.get("refer") ? `${params.get("refer")}` : callbackUrl,
      },
      {
        data: JSON.stringify({
          firstName: firstName || "",
          lastName: lastName || "",
          mobile: mobile,
          role: role,
          token: token,
          email: email,
          id: id as any,
        }),
      },
    );
  };
  return {
    login,
  };
};
