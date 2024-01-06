import Image1 from "@/assets/images/newspage/socail-media-background.png";
import Image2 from "@/assets/images/newspage/organ-background.png";
import Image3 from "@/assets/images/newspage/wire-service-background.png";
import Image from "next/image";

const CategorySection = () => {
    return (
        <>
            <section
                className={`w-[calc(100%-56px)] lg:w-[calc(100%-128px)] max-w-[1662px] mx-auto gap-6 relative z-[1] isolate flex flex-wrap items-center`}
            >
                <div className="w-full lg:w-[538px] h-[280px] lg:h-[404px] bg-yellow-06 rounded-[32px] relative isolate flex items-center justify-center">
                    <Image src={Image1} className="absolute w-full h-full object-center object-contain inset-0" alt="" />
                    <button
                        className={`truncate py-3 px-6 bg-yellow-05 text-write-03 rounded-[16px] font-[700] text-[24px] flex items-center justify-center absolute z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
                    >
                        اخبار شبکه های اجتماعی
                    </button>
                </div>

                <div className="w-full lg:w-[538px] h-[280px] lg:h-[404px] bg-blue-06 rounded-[32px] relative isolate flex items-center justify-center">
                    <Image src={Image2} className="absolute w-full h-full object-center object-contain inset-0" alt="" />
                    <button
                        className={`truncate py-3 px-6 bg-yellow-05 text-write-03 rounded-[16px] font-[700] text-[24px] flex items-center justify-center absolute z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
                    >
                        اخبار شرکت‌ها وسازمان‌ها
                    </button>
                </div>

                <div className="w-full lg:w-[538px] h-[280px] lg:h-[404px] bg-[#EBFFF4] rounded-[32px] relative isolate flex items-center justify-center">
                    <Image src={Image2} className="absolute w-full h-full object-center object-contain inset-0" alt="" />
                    <button
                        className={`truncate py-3 px-6 bg-yellow-05 text-write-03 rounded-[16px] font-[700] text-[24px] flex items-center justify-center absolute z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
                    >
                        اخبار خبرگزاری‌های  رسمی
                    </button>
                </div>
            </section>
        </>
    )
}

export default CategorySection