import {Bars3Icon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import Logo from "../../assets/images/mainpage/logo.png";
import {useSession} from "next-auth/react";

const Menu = () => {
    const router = useRouter();
    const {data: session} = useSession();
    return (
        <>
            <nav
                style={{
                    backgroundImage: "linear-gradient(to bottom,rgba(255,255,255,1), rgba(255,255,255,0.05))",
                }}
                className={`w-full p-6 flex items-center justify-between lg:hidden bg-transparent`}
            >
                <Bars3Icon className={"w-8 h-8 cursor-pointer text-write-main"}/>
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
                        href={""}
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
                        className={`text-[18px] text-write-main ${router.pathname == "/introduction" && "border-b border-yellow-04"}`}
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
