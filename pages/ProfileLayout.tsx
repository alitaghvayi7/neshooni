import {BookmarkIcon, IdentificationIcon, MegaphoneIcon, UserIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import {useSession} from "next-auth/react";

export default function ProfileLayout({children}:{children:React.ReactNode}) {
    const searchParams = useSearchParams();
    const { data: session } = useSession();


    return (
        <>
            <section
                className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] mx-auto max-w-[1662px] flex flex-wrap gap-4 lg:gap-0 items-center justify-between`}>
                <div className={`w-full flex`}>
                    <div className={`bg-white rounded-[32px] w-[398px] h-[365px] px-8 py-10 border border-yellow-main`}>
                        <div className="flex items-center gap-4">
                            <span
                                className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] rounded-full bg-yellow-04 flex items-center justify-center">
                              <UserIcon className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px] text-white"/>
                            </span>
                            <span
                                className="text-[14px] lg:text-[16px] font-[400] text-write-02">{session?.user?.email ?? 'willie.jennings@example.com'}</span>
                        </div>
                        <span className="w-full block h-[2px] my-5 bg-gray-02"></span>
                        <Link href={'/profile?tab=info'} className={`flex items-center gap-4 my-4`}>
                            <IdentificationIcon className={`w-6 h-6 text-write-04`}/>
                            <span className={`lg:text-[20px] text-write-main transition ${searchParams.get('tab')==='info' ? 'font-[600]' : 'font-[300]'}`}>اطلاعات حساب کاربری</span>
                        </Link>
                        <Link href={'/profile?tab=your-introduction'} className={`flex items-center gap-4 my-4`}>
                            <MegaphoneIcon className={`w-6 h-6 text-write-04`}/>
                            <span className={`lg:text-[20px] text-write-main transition ${searchParams.get('tab')==='your-introduction' ? 'font-[600]' : 'font-[300]'}`}>معرفی های شما</span>
                        </Link>
                        <Link href={'/profile?tab=my-bookmarks'} className={`flex items-center gap-4 my-4`}>
                            <BookmarkIcon className={`w-6 h-6 text-write-04`}/>
                            <span className={`lg:text-[20px] text-write-main transition ${searchParams.get('tab')==='my-bookmarks' ? 'font-[600]' : 'font-[300]'}`}>پست های ذخیره شده</span>
                        </Link>
                    </div>
                    {children}
                </div>
            </section>
        </>
    )
}