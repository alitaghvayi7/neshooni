import NewIntroductionForm from "@/components/Forms/NewIntroduction";
import { authOptions } from "@/configs/Auth";
import { getServerSession } from "next-auth";

import Link from "next/link";

export default async function IntroductionPage() {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <div className="m-auto flex flex-col items-center justify-center py-10">
        <p className="text-[18px] font-semibold">لطفاً برای معرفی مکان‌های جدید ابتداوارد حساب کاربری خود شوید.</p>
        <div>
          <Link href={`/auth?refer=/introduction`}>ورود</Link>
        </div>
      </div>
    );

  return (
    <div>
      <NewIntroductionForm />
    </div>
  );
}
