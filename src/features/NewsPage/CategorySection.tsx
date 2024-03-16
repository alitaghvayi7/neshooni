import Image2 from "@/assets/images/newspage/organ-background.png";
import Image1 from "@/assets/images/newspage/socail-media-background.png";
import Image from "next/image";
import Link from "next/link";

const CategorySection = () => {
  return (
    <>
      <section
        className={`relative isolate z-[1] mx-auto flex w-[calc(100%-56px)] max-w-[1662px] flex-wrap items-center gap-6 lg:w-[calc(100%-128px)] xl:grid xl:grid-cols-3`}
      >
        <Link
          href={`/news/social-media`}
          className="relative isolate flex h-[280px] w-full items-center justify-center rounded-[32px] bg-yellow-06 xl:aspect-[470/360] xl:w-full"
        >
          <Image src={Image1} className="absolute inset-0 h-full w-full object-contain object-center" alt="" />
          <button
            className={`absolute left-[50%] top-[50%] z-[2] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center truncate rounded-[16px] bg-yellow-05 px-6 py-3 text-[24px] font-[700] text-write-03`}
          >
            اخبار شبکه های اجتماعی
          </button>
        </Link>

        <Link
          href={`/news/organization`}
          className="relative isolate flex h-[280px] w-full items-center justify-center rounded-[32px] bg-blue-06 xl:aspect-[470/360] xl:w-full"
        >
          <Image src={Image2} className="absolute inset-0 h-full w-full object-contain object-center" alt="" />
          <button
            className={`absolute left-[50%] top-[50%] z-[2] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center truncate rounded-[16px] bg-yellow-05 px-6 py-3 text-[24px] font-[700] text-write-03`}
          >
            اخبار شرکت‌ها وسازمان‌ها
          </button>
        </Link>

        <Link
          href={`/news/wire-service`}
          className="relative isolate flex h-[280px] w-full items-center justify-center rounded-[32px] bg-[#EBFFF4] xl:aspect-[470/360] xl:w-full"
        >
          <Image src={Image2} className="absolute inset-0 h-full w-full object-contain object-center" alt="" />
          <button
            className={`absolute left-[50%] top-[50%] z-[2] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center truncate rounded-[16px] bg-yellow-05 px-6 py-3 text-[24px] font-[700] text-write-03`}
          >
            اخبار خبرگزاری‌های رسمی
          </button>
        </Link>
      </section>
    </>
  );
};

export default CategorySection;
