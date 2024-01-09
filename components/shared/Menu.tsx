import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import Logo from "../../assets/images/mainpage/logo.png";
import {useSession} from "next-auth/react";
import {useState} from "react";

const Menu = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return (
        <>
            {showMobileMenu && <div className={`w-screen h-screen fixed inset-0 z-[100] flex flex-col lg:hidden py-7 px-6 bg-[#FAFBFF]`}>
                <div className={`flex items-center justify-between w-full`}>
                    <XMarkIcon onClick={() => setShowMobileMenu(false)}
                               className={"w-8 h-8 cursor-pointer text-write-main"}/>
                    <Image src={Logo} alt={"qom-neshan-logo"} className={`w-8 h-8 object-cover`}/>
                </div>
                <ul className={`flex flex-col items-center gap-4 mt-6 w-full`}>
                    <Link
                        href={"/"}
                        className={`w-full bg-white border h-[48px] flex items-center justify-center rounded-[16px] text-[14px] text-write-main border-gray-01  ${router.pathname === "/" && "border-yellow-04"}`}
                    >
                        صفحه اصلی
                    </Link>{" "}
                    <Link
                        href={"/tourist"}
                        className={`w-full bg-white border h-[48px] flex items-center justify-center rounded-[16px] text-[14px] text-write-main border-gray-01  ${router.pathname.startsWith("/tourist") && " border-yellow-04"
                        }`}
                    >
                        گردشگری
                    </Link>
                    <Link
                        href={"/business"}
                        className={`w-full bg-white border h-[48px] flex items-center justify-center rounded-[16px] text-[14px] text-write-main border-gray-01  ${router.pathname.startsWith("/business") && " border-yellow-04"
                        }`}
                    >
                        کسب و کار
                    </Link>
                    <Link
                        href={"/news"}
                        className={`w-full bg-white border h-[48px] flex items-center justify-center rounded-[16px] text-[14px] text-write-main border-gray-01  ${router.pathname.startsWith("/news") && " border-yellow-04"}`}
                    >
                        اخبار
                    </Link>
                    <Link
                        href={"/introduction"}
                        className={`w-full bg-white border h-[48px] flex items-center justify-center rounded-[16px] text-[14px] text-write-main border-gray-01  ${router.pathname === "/introduction" && " border-yellow-04"}`}
                    >
                        شما معرفی کنید
                    </Link>
                </ul>
            </div>}
            <nav
                style={{
                    backgroundImage: "linear-gradient(to bottom,rgba(255,255,255,1), rgba(255,255,255,0.05))",
                }}
                className={`w-full p-6 flex items-center justify-between lg:hidden bg-transparent`}
            >
                <Bars3Icon onClick={()=>setShowMobileMenu(true)} className={"w-8 h-8 cursor-pointer text-write-main"}/>
                <Image src={Logo} alt={"qom-neshan-logo"} className={`w-8 h-8 object-cover`}/>
                <Link
                    href={`${session ? '/profile' : '/auth'}`}
                    className={`bg-white border border-blue-main text-blue-main rounded-[16px] px-6 py-2 flex items-center justify-center`}
                >
                    {!session && 'ورود / ثبت نام'}
                    {session && 'پروفایل'}
                </Link>
            </nav>

            <nav
                style={{
                    backgroundImage: "linear-gradient(to bottom,rgba(255,255,255,1), rgba(255,255,255,0.05))",
                }}
                className={`w-full py-[52px] px-[10%] items-center justify-between bg-transparent hidden lg:flex`}
            >
                <ul className={`flex items-center gap-12`}>
                    <Link href={"/"}>
                        <Image src={Logo} alt={"qom-neshan-logo"} className={`w-8 h-8 object-cover`}/>
                    </Link>
                    <Link
                        href={"/"}
                        className={`text-[18px] text-write-main ${router.pathname === "/" && "border-b border-yellow-04"}`}
                    >
                        صفحه اصلی
                    </Link>{" "}
                    <Link
                        href={"/tourist"}
                        className={`text-[18px] text-write-main ${router.pathname.startsWith("/tourist") && "border-b border-yellow-04"
                        }`}
                    >
                        گردشگری
                    </Link>
                    <Link
                        href={"/business"}
                        className={`text-[18px] text-write-main ${router.pathname.startsWith("/business") && "border-b border-yellow-04"
                        }`}
                    >
                        کسب و کار
                    </Link>
                    <Link
                        href={"/news"}
                        className={`text-[18px] text-write-main ${router.pathname.startsWith("/news") && "border-b border-yellow-04"}`}
                    >
                        اخبار
                    </Link>
                    <Link
                        href={"/introduction"}
                        className={`text-[18px] text-write-main ${router.pathname === "/introduction" && "border-b border-yellow-04"}`}
                    >
                        شما معرفی کنید
                    </Link>
                </ul>

                <Link
                    href={`${session ? '/profile?tab=info' : '/auth'}`}
                    className={`bg-white border border-blue-main text-blue-main rounded-[16px] px-6 py-2 flex items-center justify-center`}
                >
                    {!session && 'ورود / ثبت نام'}
                    {session && 'پروفایل'}
                </Link>
            </nav>
        </>
    );
};

export default Menu;
