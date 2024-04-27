"use client";
import { baseURL } from "@/services/news";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useToast } from "../ui/use-toast";

const searchTypes = [
  {
    name: "همه",
    value: "all",
  },
  {
    name: "کسب و کار",
    value: "shop",
    route: "/business",
  },
  {
    name: "اخبار",
    value: "news",
    route: "/news",
  },
  {
    name: "گردشگری",
    value: "tourism",
    route: "/tourist",
  },
];

const menuVariants = {
  close: {
    maxHeight: "0px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 1,
    maxHeight: "200px",
    transition: {
      duration: 0.5,
    },
  },
};
const resultsVariants = {
  close: {
    maxHeight: "0px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 1,
    maxHeight: "400px",
    transition: {
      duration: 0.5,
    },
  },
};

function SearchBox() {
  const { toast } = useToast();
  const [isSearchTypeOpen, setIsSearchTypeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchTypes[0]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchData, setSearchData] = useState<any>();
  const abortRef = useRef<null | AbortController>(null);

  useEffect(() => {
    if (searchInputValue.trim().length < 3) return;
    setIsLoading(true);
    const delayDebounceFn = setTimeout(() => {
      // console.log(searchInputValue);
      if (abortRef.current) {
        abortRef.current.abort();
      }
      const controller = new AbortController();
      abortRef.current = controller;

      const search = async () => {
        const req = await fetch(`${baseURL}/search?search_term=${searchInputValue}&type=${searchQuery.value}`, {
          signal: controller.signal,
        });
        if (req.ok) {
          const res = await req.json();
          console.log(res);
          setSearchData(res?.data);
        } else {
          toast({
            title: "خطای جستجو",
            variant: "destructive",
          });
        }
        setIsLoading(false);
      };

      search();

      return () => controller.abort();
    }, 700);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInputValue, toast, searchQuery]);

  const business: any[] = useMemo(() => {
    if (!searchData) return [];
    return searchData.filter((item: any) => "bussinessman_id" in item).slice(0, 4);
  }, [searchData]);
  const tourism: any[] = useMemo(() => {
    if (!searchData) return [];
    return searchData.filter((item: any) => "address_id" in item && "source" in item).slice(0, 4);
  }, [searchData]);
  const news: any[] = useMemo(() => {
    if (!searchData) return [];
    return searchData.filter((item: any) => "type" in item && "source" in item).slice(0, 4);
  }, [searchData]);
  const mainStreets: any[] = useMemo(() => {
    if (!searchData) return [];
    return searchData.filter((item: any) => item.parent_id === null).slice(0, 4);
  }, [searchData]);

  return (
    <div className="relative z-[9999] flex h-full w-full flex-col items-center gap-2">
      <div className="relative mx-auto flex h-16 w-[80%] min-w-[342px] max-w-[966px] items-center justify-between gap-10 rounded-[16px] border border-gray-01 bg-white 2xl:h-[72px] 2xl:min-w-[966px]">
        <div className=" mr-[3%] flex h-full grow items-center gap-4">
          <div className="">
            <button
              className="flex items-center justify-center gap-2"
              onClick={() => setIsSearchTypeOpen(!isSearchTypeOpen)}
            >
              <span className="whitespace-nowrap text-[14px] text-write-main xl:text-[18px]">{searchQuery.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer text-write-main xl:h-6 xl:w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <motion.div
              className="absolute right-0 top-[110%] h-fit items-center overflow-hidden whitespace-nowrap rounded-[16px] border border-gray-01 bg-white"
              initial="close"
              variants={menuVariants}
              animate={isSearchTypeOpen ? "open" : "close"}
            >
              <div className="flex flex-col p-1">
                {searchTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => {
                      setSearchQuery(type);
                      setIsSearchTypeOpen(false);
                    }}
                    className="flex h-[40px] w-full cursor-pointer items-center justify-center
                  rounded-xl px-3 py-1 text-center text-[14px] hover:bg-gray-02
                    hover:text-write-main xl:text-[16px]"
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="h-[60%] w-[1px] bg-gray-01"></div>
          <input
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            placeholder="گردشگری، کسب‌وکار، اخبار"
            className="h-full w-full grow text-[12px] outline-none placeholder:text-[#AFAFAF] xl:text-[18px]"
          />
        </div>
        <button className="font-peydaBold ml-[3%] h-8 w-[77px] rounded-[8px] bg-blue-02 text-[16px] text-white xl:w-[103px] 2xl:h-10">
          جستجو
        </button>
      </div>
      <motion.div
        className="flex h-fit w-[80%] min-w-[342px] max-w-[966px] flex-col whitespace-nowrap rounded-[16px] border border-gray-01 bg-white px-2 py-2"
        initial="close"
        variants={resultsVariants}
        animate={searchInputValue.length >= 3 ? "open" : "close"}
      >
        {isLoading ? (
          <div className="mx-auto">در حال جستجو...</div>
        ) : searchData?.length > 0 ? (
          <div className="">
            <div className="flex flex-col gap-4 p-2">
              {mainStreets.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-[18px] font-medium text-write-main">جستجوی {searchInputValue} در معابر</span>
                  <ul className="flex flex-col gap-2 text-[16px] font-normal text-write-03">
                    {mainStreets.map((item, i) => (
                      <li key={item.id} className="line-clamp-1">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tourism.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-[18px] font-medium text-write-main">جستجوی {searchInputValue} در گردشگری</span>
                  <ul className="flex flex-col gap-2 text-[16px] font-normal text-write-03">
                    {tourism.map((item, i) => (
                      <li key={item.id} className="line-clamp-1">
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {business.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-[18px] font-medium text-write-main">
                    جستجوی {searchInputValue} در کسب و کارها
                  </span>
                  <ul className="flex flex-col gap-2 text-[16px] font-normal text-write-03">
                    {business.map((item, i) => (
                      <li key={item.id} className="line-clamp-1">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {news.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-[18px] font-medium text-write-main">جستجوی {searchInputValue} در اخبار</span>
                  <ul className="flex flex-col gap-2 text-[16px] font-normal text-write-03">
                    {news.map((item, i) => (
                      <li key={item.id} className="line-clamp-1">
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mx-auto">نتیجه‌ای یافت نشد</div>
        )}
      </motion.div>
    </div>
  );
}

export default SearchBox;
