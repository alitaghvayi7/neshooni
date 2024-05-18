"use client";

import Logo from "@/assets/images/mainpage/logo.png";
import { createNewUser, loginUser } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useLogin } from "@/hooks/login";
const schema = z
  .object({
    phoneNumber: z.string().regex(/^(\+98|0098|0)?9\d{9}$/, "شماره همراه وارد شده صحیح نمی‌باشد"),
    password: z.string().min(1, "لطفاً رمز عبور خود را وارد کنید."),
    confirmPassword: z.string().min(1, "لطفاً رمز عبور خود را تکرار کنید."),
  })
  .refine(
    ({ password, confirmPassword }) => {
      if (password !== confirmPassword) {
        return false;
      } else {
        return true;
      }
    },
    () => {
      return {
        message: "رمز عبور مطابقت ندارد",
        path: ["confirmPassword"],
      };
    },
  );

type SignUpFormValues = z.infer<typeof schema>;

const SingUpForm = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const { login } = useLogin();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    register,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = handleSubmit(async (data) => {
    console.log({
      mobile: data.phoneNumber,
      password: data.password,
      role: "user",
    });
    const req = await createNewUser({
      data: {
        mobile: data.phoneNumber,
        password: data.password,
        role: "user",
      },
    });
    if (req === "Error") {
      return toast({
        title: "خطا",
        description: "مشکلی پیش آمده است. لطفاً بعداً تلاش کنید",
        variant: "destructive",
      });
    } else {
      if (req.ok) {
        const loginReq = await loginUser({
          data: {
            mobile: data.phoneNumber,
            password: data.password,
          },
        });
        if (loginReq === "Error") {
          return toast({
            title: "خطا",
            description: "مشکلی پیش آمده است. لطفاً بعداً تلاش کنید",
            variant: "destructive",
          });
        } else {
          if (loginReq.ok) {
            login({
              email: loginReq.data.data.user.email,
              firstName: loginReq.data.data.user.fname,
              lastName: loginReq.data.data.user.lname,
              mobile: loginReq.data.data.user.mobile,
              role: loginReq.data.data.role,
              token: loginReq.data.data.token,
              id: loginReq.data.data.user.id,
            });
          } else {
            setError("confirmPassword", {
              message: "خطایی رخ داده است. لطفاً دوباره تلاش کنید",
            });
          }
        }
      } else {
        switch (req.status) {
          case 422: {
            return setError("confirmPassword", {
              message: req.data.mobile[0] || req.data.password[0] || "اطلاعات وارد شده نامعتبر می‌باشد",
            });
          }

          default:
            return setError("confirmPassword", {
              message: "خطایی رخ داده است. لطفاً مجدداً تلاش کنید",
            });
        }
      }
    }
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
        <h2 className="text-[20px] font-bold text-write-main">ساخت حساب کاربری</h2>
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
        <div className="flex flex-col items-stretch gap-2">
          <input
            className="rounded-2xl border border-gray-01 px-4 py-3 outline-none"
            type="password"
            placeholder="تکرار رمز عبور"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <span className="text-[12px] text-red-500">{errors.confirmPassword.message}</span>}
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
        قبلاً ثبت نام کرده‌اید؟{" "}
        <span>
          <Link
            href={`/auth${searchParams.get("refer") ? `?refer=${searchParams.get("refer")}` : ""}`}
            className="text-blue-500"
          >
            ورود
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SingUpForm;
