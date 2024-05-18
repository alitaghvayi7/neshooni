"use client";
import { BookmarkIcon, IdentificationIcon, MegaphoneIcon, UserIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopProfileSideBar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <section className={`w-full whitespace-nowrap bg-opacity-10 pb-14 pt-[5rem] lg:pt-[8rem]`}>
      <section
        className={`mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-wrap items-center justify-between gap-4 lg:w-[calc(100%-128px)] lg:gap-0`}
      >
        <div className={`flex w-full`}>
          <div className={`h-[365px] w-[398px] rounded-[32px] border-yellow-main px-8 py-10 lg:border lg:bg-white`}>
            <div className="flex items-center gap-4">
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-yellow-04 lg:h-[80px] lg:w-[80px]">
                <UserIcon className="h-[24px] w-[24px] text-white lg:h-[40px] lg:w-[40px]" />
              </span>
              <span className="text-[14px] font-[400] text-write-02 lg:text-[16px]">
                {session?.user?.email ?? session?.user.mobile}
              </span>
            </div>
            <span className="my-5 block h-[2px] w-full bg-gray-02"></span>
            <Link href={"/profile/info"} className={`my-4 flex items-center gap-4`}>
              <IdentificationIcon className={`h-6 w-6 text-write-04`} />
              <span
                className={`text-write-main transition lg:text-[20px] ${pathname === "/profile/info" ? "font-[600]" : "font-[300]"}`}
              >
                اطلاعات حساب کاربری
              </span>
            </Link>
            <Link href={"/profile/your-introduction"} className={`my-4 flex items-center gap-4`}>
              <MegaphoneIcon className={`h-6 w-6 text-write-04`} />
              <span
                className={`text-write-main transition lg:text-[20px] ${pathname === "/profile/your-introduction" ? "font-[600]" : "font-[300]"}`}
              >
                معرفی های شما
              </span>
            </Link>
            <Link href={"/profile/bookmarks"} className={`my-4 flex items-center gap-4`}>
              <BookmarkIcon className={`h-6 w-6 text-write-04`} />
              <span
                className={`text-write-main transition lg:text-[20px] ${pathname === "/profile/bookmarks" ? "font-[600]" : "font-[300]"}`}
              >
                پست های ذخیره شده
              </span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DesktopProfileSideBar;
