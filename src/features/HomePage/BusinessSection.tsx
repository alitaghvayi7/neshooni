import BusinessSlider from "@/components/HomePage/BuisinessSlider/BusinessSlider";
import { getTopBusiness } from "@/services/business";
import Link from "next/link";

const BusinessSection = async () => {
  const topBusiness = await getTopBusiness();
  console.log(topBusiness);
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
          <div className={`w-full rounded-[32px] border border-yellow-04 bg-white`}>
            <BusinessSlider data={topBusiness} />
          </div>
        </div>
        {/* <Link
          href={""}
          style={{ backgroundClip: "content-box", borderRadius: "0 0 0 32px" }}
          className={`flex w-fit border-b border-l border-yellow-04 bg-transparent px-6 py-1 text-[12px] text-write-04 lg:hidden`}
        >
          مشاهده همه
        </Link> */}
      </section>
    </>
  );
};

export default BusinessSection;
