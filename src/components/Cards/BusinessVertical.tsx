import { ChatBubbleLeftIcon, StarIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const BusinessVerticalCard = ({
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
    <div className={`w-full flex items-center rounded-[16px] overflow-hidden h-[127px] lg:min-h-[302px]`}>
      <>
        <div
          className={`w-full flex items-center rounded-t-[16px] lg:rounded-t-none lg:rounded-tr-[16px] lg:rounded-br-[16px] h-full overflow-hidden`}
        >
          <div className="w-[40%] h-full relative">
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
            className={`w-[60%] h-full flex flex-col gap-2 bg-white justify-between p-4 lg:px-8 lg:py-8 border-b border-t border-l  border-yellow-04 overflow-hidden rounded-tl-[16px] rounded-bl-[16px]`}
          >
            <div className={`w-full flex items-center justify-between`}>
              <span className={`text-[14px] lg:text-[24px] font-[700]`}>{name}</span>
              <div className={`flex items-center gap-2`}>
                <div className={`flex items-center gap-2`}>
                  <StarIcon className={`w-3 h-3 lg:w-5 lg:h-5 text-yellow-main`} />
                  <span
                    className={`text-[12px] lg:text-[16px] leading-6 text-write-04 flex items-center justify-center`}
                  >
                    {score}
                  </span>
                </div>
                <span className="w-[2px] h-[50px] bg-gray-02 hidden lg:flex"></span>
                <div className={`items-center gap-2 hidden lg:flex`}>
                  <ChatBubbleLeftIcon className={`w-5 h-5 text-gray-04`} />
                  <span className={`text-[16px] leading-6 text-write-04 flex items-center justify-center`}>
                    {comments}
                  </span>
                </div>
              </div>
            </div>
            <span className={`text-[12px] text-ellipsis leading-6 lg:text-[16px] text-write-main font-[500]`}>
              {address}
            </span>
            <p className={`text-[12px] leading-6 lg:leading-8 text-ellipsis lg:text-[16px] text-write-main font-[200]`}>
              {desc}
            </p>
            <Link
              href={"/business/1"}
              className={`py-[6px] px-[38px] lg:py-[9px] lg:px-[38px] border border-yellow-main rounded-[16px] w-fit text-[16px] self-end`}
            >
              بیشتر
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default BusinessVerticalCard;
