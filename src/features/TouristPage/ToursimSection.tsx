"use client";

import { GRID_ICON, ROWS_ICON } from "@/assets/icons/svgs";
import TourismHorizantalCard from "@/components/Cards/TourismHorizantal";
import TourismVerticalCard from "@/components/Cards/TourismVertical";
import FilterBox from "@/components/shared/FilterBox";
import { SingleTourism } from "@/models/tourism";
import { useRef, useState } from "react";

const TourismSection = ({ data }: { data: SingleTourism[] }) => {
  const [collections, setCollections] = useState([...data.slice(0, 4)]);
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
      <div className="sticky top-5 hidden h-[429px] w-[300px] lg:block xl:w-[402px]">
        <FilterBox />
      </div>
      <div className={`lg:w-[calc(100%-334px)] xl:w-[calc(100%-434px)]`}>
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
            showContentType === "row" ? "max-h-[556px] lg:max-h-[1188px]" : "lg:max-h-[1188px]"
          }`}
        >
          <div
            dir="rtl"
            className={`h-full w-full ${showContentType === "row" ? "flex flex-col gap-6" : "grid grid-cols-2 gap-6 2xl:grid-cols-3"}`}
          >
            {collections.map((item) => {
              return showContentType === "row" ? (
                <TourismHorizantalCard
                  address={""}
                  comments={item.comments_count}
                  desc={item.content}
                  image={item.img}
                  name={item.title}
                  score={item.average_score.substring(0, 3)}
                  key={item.id}
                />
              ) : (
                <div key={item.id} className="lg:h-[490px] xl:h-[540px]">
                  <TourismVerticalCard
                    address={""}
                    comments={item.comments_count}
                    desc={item.content}
                    image={item.img}
                    name={item.title}
                    score={item.average_score.substring(0, 3)}
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

export default TourismSection;
