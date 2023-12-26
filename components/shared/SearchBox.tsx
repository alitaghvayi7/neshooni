import { motion } from "framer-motion";
import { useState } from "react";
const variant = {
  close: {
    height: "0px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  open: {
    opacity: 1,
    height: "300px",
    transition: {
      duration: 0.5,
    },
  },
};
function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-Peyda relative flex flex-col items-center gap-2">
      <div className="min-w-[342px] max-w-[966px] w-[80%] 2xl:h-[72px] 2xl:min-w-[966px] h-16 border rounded-[16px] border-gray-01 mx-auto flex justify-between gap-[5%] items-center bg-white">
        <div className="flex items-center gap-4 mr-[3%] h-full">
          <div className="text-write-main text-[14px] xl:text-[18px]">همه</div>
          <svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 xl:w-6 xl:h-6 text-write-main cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <div className="w-[1px] bg-gray-01 h-[60%]"></div>
          <span className="text-[12px] xl:text-[18px] text-[#AFAFAF] truncate">
            کسب و کار، گردشگری، اخبار
          </span>
        </div>
        <button className="w-[77px] xl:w-[103px] 2xl:h-10 h-8 bg-blue-02 text-white text-[16px] font-peydaBold rounded-[8px] ml-[3%]">
          جستجو
        </button>
      </div>
      <motion.div
        className="min-w-[342px] max-w-[966px] w-[80%] border border-gray-01 mx-auto rounded-[16px] bg-white"
        initial="close"
        variants={variant}
        animate={isOpen ? "open" : "close"}
      ></motion.div>
    </div>
  );
}

export default SearchBox;
