import NewIntroductionForm from "@/components/Forms/NewIntroduction";
import { authOptions } from "@/configs/Auth";
import { getServerSession } from "next-auth";

import Link from "next/link";

export default async function IntroductionPage() {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <div className="m-auto flex flex-col items-center justify-center p-10">
        <div className="flex flex-col items-center justify-center gap-8 p-14">
          <p className="text-[22px] font-semibold">لطفاً برای معرفی مکان‌های جدید ابتدا وارد حساب کاربری خود شوید.</p>
          <div>
            <Link href={`/auth?refer=/introduction`} className="rounded-lg bg-blue-03 px-6 py-2 text-[16px] text-white">
              ورود به حساب کاربری
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <NewIntroductionForm />
    </div>
  );
}
