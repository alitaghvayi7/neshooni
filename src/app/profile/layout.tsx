"use client";

import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import DesktopProfileSideBar from "@/features/Profile/DesktopProfileSideBar";
import MobileProfileSidebar from "@/features/Profile/MobileProfileSideBar";

import { Loader2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const router = useRouter();
  const [isMobilePageVisible, setIsMobilePageVisible] = useState(false);

  if (session.status === "unauthenticated") {
    router.push("/auth");
  } else if (session.status === "loading") {
    return (
      <div className="absolute inset-0 m-auto flex items-center justify-center">
        <Loader2Icon className="size-[60px] animate-spin text-blue-08" />
      </div>
    );
  } else {
    return (
      <>
        <main className={`flex min-h-screen w-full flex-col`}>
          <header className={`w-full bg-blue-04 bg-opacity-20`}>
            <Menu />
          </header>
          <div className="flex grow flex-col items-stretch bg-[#FAFBFF] lg:flex-row lg:items-center">
            <div className="hidden overflow-hidden lg:block">
              <DesktopProfileSideBar />
            </div>
            <div className={`${isMobilePageVisible ? `hidden` : ""} lg:hidden`}>
              <MobileProfileSidebar
                isMobilePageVisible={isMobilePageVisible}
                setIsMobilePageVisible={setIsMobilePageVisible}
              />
            </div>
            <div className={`${isMobilePageVisible ? `` : `hidden`}`}>{children}</div>
            <div className={`${isMobilePageVisible ? `hidden` : ``}`}>{children}</div>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
          {/* <MapComponent /> */}
        </main>
      </>
    );
  }
}
