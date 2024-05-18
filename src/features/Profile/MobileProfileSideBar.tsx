"use client";
import { BookmarkIcon, IdentificationIcon, MegaphoneIcon, UserIcon } from "@heroicons/react/24/solid";
import { ChevronLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const MobileProfileSidebar = ({
  isMobilePageVisible,
  setIsMobilePageVisible,
}: {
  isMobilePageVisible: boolean;
  setIsMobilePageVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: session } = useSession();

  const handleOnLinkClick = () => {
    setIsMobilePageVisible(true);
  };

  return (
    <section
      className={`mx-auto w-full max-w-[400px] bg-opacity-10 px-2 pb-14 pt-[5rem] ${isMobilePageVisible ? "hidden" : ""}`}
    >
      <section className={`mx-auto flex w-full justify-between gap-4`}>
        <div className={`w-full`}>
          <div className={`rounded-[32px] border-yellow-main px-2 py-4 lg:border lg:bg-white`}>
            <div className="flex items-center justify-center gap-4 leading-none">
              <span className="flex size-10 items-center justify-center rounded-full bg-yellow-04">
                <UserIcon className="h-[24px] w-[24px] text-white" />
              </span>
              <span className="text-[14px] font-[400] text-write-02 lg:text-[16px]">
                {session?.user?.email ?? session?.user.mobile}
              </span>
            </div>
            <span className="my-5 block h-[2px] w-full bg-gray-02"></span>
            <div className="mt-10 space-y-8">
              <Link
                onClick={() => {
                  handleOnLinkClick();
                }}
                href={"/profile/info"}
                className={`my-4 flex items-center gap-4`}
              >
                <IdentificationIcon className={`h-6 w-6 text-write-04`} />
                <span className={`text-write-main transition lg:text-[20px]`}>اطلاعات حساب کاربری</span>
                <ChevronLeft className="mr-auto size-5 text-gray-03" />
              </Link>
              <Link
                onClick={() => {
                  handleOnLinkClick();
                }}
                href={"/profile/your-introduction"}
                className={`my-4 flex items-center gap-4`}
              >
                <MegaphoneIcon className={`h-6 w-6 text-write-04`} />
                <span className={`text-write-main transition lg:text-[20px]`}>معرفی های شما</span>
                <ChevronLeft className="mr-auto size-5 text-gray-03" />
              </Link>
              <Link
                onClick={() => {
                  handleOnLinkClick();
                }}
                href={"/profile/bookmarks"}
                className={`my-4 flex items-center gap-4`}
              >
                <BookmarkIcon className={`h-6 w-6 text-write-04`} />
                <span className={`text-write-main transition lg:text-[20px]`}>پست های ذخیره شده</span>
                <ChevronLeft className="mr-auto size-5 text-gray-03" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MobileProfileSidebar;
