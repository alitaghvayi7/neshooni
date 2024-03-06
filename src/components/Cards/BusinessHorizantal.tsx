import { ChatBubbleLeftIcon, StarIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const BusinessHorizantalCard = ({
  address,
  comments,
  desc,
  image,
  name,
  score,
}: {
  image: string | StaticImageData;
  score: number;
  name: string;
  comments: number;
  address: string;
  desc: string;
}) => {
  return (
    <div className={`w-full flex flex-col items-center rounded-t-[16px] h-full overflow-hidden`}>
      <div className="w-full h-1/2 relative">
        <Image
          // style={{ borderRadius: `0 16px 16px 0` }}
          alt=""
          src={image}
          className={`object-cover`}
          fill
        />
      </div>
      <div
        // style={{ borderRadius: `16px 0 0 16px` }}
        className={`w-full h-1/2 flex flex-col gap-2 bg-white p-4 lg:px-3 lg:py-4 border-b border-r border-l border-yellow-04 overflow-hidden rounded-b-2xl`}
      >
        <div className={`w-full flex items-center justify-between`}>
          <span className={`text-[14px] lg:text-[24px] font-[700]`}>{name}</span>
        </div>
        <span className={`text-[12px] text-ellipsis leading-6 lg:text-[14px] text-write-main font-[500] line-clamp-2`}>
          {address}
        </span>
        <p
          className={`text-[12px] leading-6 lg:leading-6 text-ellipsis lg:text-[16px] text-write-main font-[200] line-clamp-4`}
        >
          {desc}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className={`flex items-center gap-2`}>
            <div className={`flex items-center gap-2`}>
              <StarIcon className={`w-3 h-3 lg:w-5 lg:h-5 text-yellow-main`} />
              <span
                className={`text-[12px] lg:text-[16px] leading-none text-write-04 pt-1 flex items-center justify-center`}
              >
                {score}
              </span>
            </div>
            <span className="w-[2px] h-[20px] bg-gray-02 hidden lg:flex"></span>
            <div className={`items-center gap-2 hidden lg:flex`}>
              <ChatBubbleLeftIcon className={`w-5 h-5 text-gray-04`} />
              <span className={`text-[16px] leading-none text-write-04 pt-1 flex items-center justify-center`}>
                {comments}
              </span>
            </div>
          </div>
          <Link href={"/business/1"} className={`border border-yellow-main rounded-[16px] w-fit px-6`}>
            بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessHorizantalCard;
