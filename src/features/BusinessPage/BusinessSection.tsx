"use client";

import { GRID_ICON, ROWS_ICON } from "@/assets/icons/svgs";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import Image2 from "@/assets/images/businesspage/business-image(2).png";
import Image3 from "@/assets/images/businesspage/business-image(3).png";
import Image4 from "@/assets/images/businesspage/business-image(4).png";
import Image5 from "@/assets/images/businesspage/business-image(5).png";
import Image6 from "@/assets/images/businesspage/business-image(6).png";
import Image7 from "@/assets/images/businesspage/business-image(7).png";
import BusinessHorizantalCard from "@/components/Cards/BusinessHorizantal";
import BusinessVerticalCard from "@/components/Cards/BusinessVertical";
import FilterBox from "@/components/shared/FilterBox";
import { imageBaseURL, imagePlaceHolders } from "@/data";
import { SingleBusiness } from "@/models/business";
import { useRef, useState } from "react";

const BusinessSection = ({ data }: { data: SingleBusiness[] }) => {
  const [collections, setCollections] = useState([]);
  const [showContentType, setShowContentType] = useState<"row" | "grid">("row");
  const [loading, setloading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (containerRef?.current) {
      if (containerRef.current.scrollTop + containerRef.current.clientHeight === containerRef.current.scrollHeight) {
        setloading(true);
        try {
          setCollections((prev) => [...prev]);
        } catch (e) {
          console.log(e);
        } finally {
          setloading(false);
        }
      }
    }
  };

  return (
    <section
      className={`mx-auto flex w-[calc(100%-56px)] max-w-[1666px] flex-col gap-8 pb-[64px] pt-8 lg:w-[calc(100%-128px)] lg:flex-row`}
    >
      {/* <div className="sticky top-5 hidden h-[429px] w-[402px] lg:block">
        <FilterBox />
      </div> */}
      {/* <div className="lg:w-[calc(100%-434px)]"> */}
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="hidden w-full items-center justify-end gap-4 lg:flex">
          <button
            onClick={() => {
              setShowContentType("grid");
            }}
          >
            <GRID_ICON fill={showContentType === "row" ? "#AFAFAF" : "#4D3500"} />
          </button>
          <button
            onClick={() => {
              setShowContentType("row");
            }}
          >
            <ROWS_ICON fill={showContentType === "grid" ? "#AFAFAF" : "#4D3500"} />
          </button>
        </div>
        <div
          onScroll={() => {
            onScroll();
          }}
          ref={containerRef}
          dir="ltr"
          className={`mt-6 w-full overflow-hidden overflow-y-auto ${
            showContentType === "row" ? "max-h-[556px] lg:max-h-[1188px]" : "max-h-[556px] lg:max-h-[1188px]"
          }`}
        >
          <div
            dir="rtl"
            className={`h-full w-full ${showContentType === "row" ? "flex flex-col gap-6" : "grid grid-cols-3 gap-6"}`}
          >
            {data.map((item) => {
              return showContentType === "row" ? (
                <BusinessHorizantalCard
                  address={item.address?.address || ""}
                  comments={item.comments_count}
                  desc={item.desc || ""}
                  image={item?.img ? `${item.img}` : imagePlaceHolders.business}
                  name={item.name}
                  score={`${item.average_score[0]?.average_score || 0}`.substring(0, 3)}
                  key={item.id}
                  id={item.id}
                />
              ) : (
                <div key={item.id} className="h-[540px]">
                  <BusinessVerticalCard
                    address={item.address?.address || ""}
                    comments={item.comments_count}
                    desc={item.desc || ""}
                    image={item?.img ? `${item.img}` : imagePlaceHolders.business}
                    name={item.name}
                    score={`${item.average_score[0]?.average_score || 0}`.substring(0, 3)}
                    key={item.id}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>
          {loading && (
            <div className={`mx-auto my-4 h-[32px] w-[32px] animate-spin rounded-full border-r border-r-gray-04`}></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
