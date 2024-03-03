import BusinessSlider from "@/components/HomePage/BuisinessSlider/BusinessSlider";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/solid";

const BusinessSection = () => {
  return (
    <>
      <section
        className={`flex flex-col items-center  w-[calc(100%-56px)] lg:w-[calc(100%-128px)] max-w-[1689px] mx-auto mt-[11rem] lg:mt-[15rem] gap-8`}
      >
        <div className={`w-full flex items-center justify-between`}>
          <span
            style={{ backgroundClip: "content-box", borderRadius: "0 0 32px 0" }}
            className={`w-fit pl-6 border-b border-r border-yellow-04 bg-yellow-06 indent-5 font-bold text-[20px] lg:text-[40px] text-write-main`}
          >
            کسب و کارها
          </span>
          <Link
            href={""}
            style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
            className={`w-fit hidden lg:flex px-6 pb-4 border-b border-l border-yellow-04 bg-transparent text-[12px] lg:text-[16px] text-write-04`}
          >
            مشاهده همه
          </Link>
        </div>
        <div className={`w-full flex items-center justify-center`}>
          <div
            className={`w-full flex-col lg:flex-row  flex items-center bg-white rounded-[32px] border border-yellow-04`}
          >
            <div className={`w-full lg:w-1/2 h-[249px] lg:h-[429px]`}>
              <BusinessSlider />
            </div>
            <div
              className={`w-full lg:w-1/2 h-[429px] p-4 lg:p-[4rem] flex flex-col justify-between rounded-tl-[32px] rounded-bl-[32px]`}
            >
              <div className={`w-full flex items-center justify-between`}>
                <span className={`text-[24px] font-[600]`}>پوشاک فروردین</span>
                <div className={`flex items-center gap-2`}>
                  <StarIcon className={`w-5 h-5 text-yellow-main`} />
                  <span className={`text-[20px] leading-6 text-write-main flex items-center justify-center`}>1.2</span>
                </div>
              </div>
              <span className={`text-[20px] text-write-main font-[400]`}>آدرس: میدان مفتح، خیابان گلستان، پلاک 21</span>
              <p className={`text-[16px] leading-[32px] text-write-main font-[400]`}>
                پوشاک یا لِباس یا جامه آنچه است که بر تن پوشیده می‌شود. پوشاک، و دیگر خطرهای موجود در طبیعت حفظ می‌کند.
                همچنین پوشاک می‌تواند برای راحتی، زیبایی، حفظ در برابر سرما یا دگرگونی دمایی و نیز برای ایمنی استفاده
                شود. پوشیدنی‌ها همچنین می‌توانند نشان دهندهٔ باورهای مذهبی، فرهنگی و دیگر معانی اجتماعی باشند.
              </p>
              <Link
                href={""}
                className={`py-[6px] px-[38px] lg:py-[14px] lg:px-[54px] border border-yellow-main rounded-[16px] w-fit text-[16px] self-end`}
              >
                بیشتر
              </Link>
            </div>
          </div>
        </div>
        <Link
          href={""}
          style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
          className={`w-fit flex lg:hidden px-6 py-1 border-b border-l border-yellow-04 bg-transparent text-[12px] text-write-04`}
        >
          مشاهده همه
        </Link>
      </section>
    </>
  );
};

export default BusinessSection;
