import BusinessSlider from "@/components/HomePage/BuisinessSlider/BusinessSlider";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";

const BusinessSection = () => {
  return (
    <>
      <section
        className={`mx-auto mt-[11rem] flex  w-[calc(100%-56px)] max-w-[1689px] flex-col items-center gap-8 lg:mt-[15rem] lg:w-[calc(100%-128px)]`}
      >
        <div className={`flex w-full items-center justify-between`}>
          <span
            style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
            className={`w-fit border-b border-r border-yellow-04 bg-yellow-06 pl-6 indent-5 text-[20px] font-bold text-write-main lg:text-[40px]`}
          >
            کسب و کارها
          </span>
          <Link
            href={`/business`}
            style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
            className={`hidden w-fit border-b border-l border-yellow-04 bg-transparent px-6 pb-4 text-[12px] text-write-04 lg:flex lg:text-[16px]`}
          >
            مشاهده همه
          </Link>
        </div>
        <div className={`flex w-full items-center justify-center`}>
          <div
            className={`flex w-full flex-col  items-center rounded-[32px] border border-yellow-04 bg-white lg:flex-row`}
          >
            <div className={`h-[249px] w-full lg:h-[429px] lg:w-1/2`}>
              <BusinessSlider />
            </div>
            <div
              className={`flex h-[429px] w-full flex-col justify-between rounded-bl-[32px] rounded-tl-[32px] p-4 lg:w-1/2 lg:p-[4rem]`}
            >
              <div className={`flex w-full items-center justify-between`}>
                <span className={`text-[24px] font-[600]`}>پوشاک فروردین</span>
                <div className={`flex items-center gap-2`}>
                  <StarIcon className={`h-5 w-5 text-yellow-main`} />
                  <span className={`flex items-center justify-center text-[20px] leading-6 text-write-main`}>1.2</span>
                </div>
              </div>
              <span className={`text-[20px] font-[400] text-write-main`}>آدرس: میدان مفتح، خیابان گلستان، پلاک 21</span>
              <p className={`text-[16px] font-[400] leading-[32px] text-write-main`}>
                پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند.
                همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده
                شود. پوشیدنی‌ها همچنین می‌توانند نشان دهندهٔ باورهای مذهبی، فرهنگی و دیگر معانی اجتماعی باشند.
              </p>
              <Link
                href={""}
                className={`w-fit self-end rounded-[16px] border border-yellow-main px-[38px] py-[6px] text-[16px] lg:px-[54px] lg:py-[14px]`}
              >
                بیشتر
              </Link>
            </div>
          </div>
        </div>
        <Link
          href={""}
          style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
          className={`flex w-fit border-b border-l border-yellow-04 bg-transparent px-6 py-1 text-[12px] text-write-04 lg:hidden`}
        >
          مشاهده همه
        </Link>
      </section>
    </>
  );
};

export default BusinessSection;
