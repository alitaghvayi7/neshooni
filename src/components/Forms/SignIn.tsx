"use client";

import Logo from "@/assets/images/mainpage/logo.png";
import { useLogin } from "@/hooks/login";
import { loginUser } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  phoneNumber: z.string().regex(/^(\+98|0098|0)?9\d{9}$/, "شماره همراه وارد شده صحیح نمی‌باشد"),
  password: z.string().min(1, "لطفاً رمز عبور خود را وارد کنید."),
});

type SignInFormValues = z.infer<typeof schema>;

const SignInForm = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    register,
  } = useForm<SignInFormValues>({
    resolver: zodResolver(schema),
  });
  const { login } = useLogin();
  const searchParams = useSearchParams();

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      const req = await loginUser({
        data: {
          mobile: data.phoneNumber,
          password: data.password,
        },
      });
      if (req === "Error") {
        return setError("password", {
          message: "خطا در برقراری ارتباط",
        });
      } else {
        if (req.ok) {
          login({
            email: req.data.data.user.email,
            firstName: req.data.data.user.fname,
            lastName: req.data.data.user.lname,
            mobile: req.data.data.user.mobile,
            role: req.data.data.role,
            token: req.data.data.token,
            id: req.data.data.user.id,
          });
        } else {
          setError("password", {
            message: req.data.message || "",
          });
        }
      }
    } catch (error) {}
  });

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col items-center gap-6 rounded-[32px] border border-gray-02 bg-white px-6 py-6 lg:px-8 lg:py-8"
    >
      {/* logo */}
      <Link href={`/`} className="relative size-[40px]">
        <Image src={Logo} alt="website logo" fill className="object-cover" />
      </Link>
      <div className="flex flex-col items-stretch gap-2">
        <h2 className="text-[20px] font-bold text-write-main">ورود به حساب کاربری</h2>
        <p className="text-write-main">
          <span className="block">سلام!</span>
          لطفا شماره موبایل و رمز عبور خود را وارد کنید.
        </p>
      </div>
      <div className="flex w-full flex-col items-stretch gap-3">
        <div className="flex flex-col items-stretch gap-2">
          <input
            className="rounded-2xl border border-gray-01 px-4 py-3 outline-none"
            type="text"
            inputMode="tel"
            placeholder="شماره موبایل"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && <span className="text-[12px] text-red-500">{errors.phoneNumber.message}</span>}
        </div>
        <div className="flex flex-col items-stretch gap-2">
          <input
            className="rounded-2xl border border-gray-01 px-4 py-3 outline-none"
            type="password"
            placeholder="رمز عبور"
            {...register("password")}
          />
          {errors.password && <span className="text-[12px] text-red-500">{errors.password.message}</span>}
        </div>
      </div>
      <div className="mt-2 w-full">
        <button
          type={"submit"}
          disabled={isSubmitting}
          className={`flex max-h-[40px] min-h-[40px] w-full items-center justify-center rounded-[16px] bg-yellow-main py-3 text-[14px] text-write-main disabled:cursor-not-allowed disabled:opacity-80`}
        >
          {isSubmitting ? <Loader2Icon className="size-[20px] animate-spin text-red-600 duration-1000" /> : "ورود"}
        </button>
      </div>
      <div>
        حساب کاربری ندارید؟{" "}
        <span>
          <Link
            href={`/auth/register${searchParams.get("refer") ? `?refer=${searchParams.get("refer")}` : ""}`}
            className="text-blue-500"
          >
            ثبت نام
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignInForm;
