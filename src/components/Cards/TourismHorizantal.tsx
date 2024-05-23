import { attributeRegex } from "@/lib/HtmlParser";
import { ChatBubbleLeftIcon, StarIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const TourismHorizantalCard = ({
  address,
  comments,
  desc,
  image,
  name,
  score,
  id,
}: {
  image: string | StaticImageData;
  score: string;
  name: string;
  comments: number;
  address: string;
  desc: string;
  id: number;
}) => {
  return (
    <div className={`flex h-[137px] w-full items-center overflow-hidden rounded-[16px] md:h-[190px] lg:min-h-[302px]`}>
      <div
        className={`flex h-full w-full items-center overflow-hidden rounded-t-[16px] lg:rounded-t-none lg:rounded-br-[16px] lg:rounded-tr-[16px]`}
      >
        <div className="relative h-full w-[40%]">
          <Image
            // style={{ borderRadius: `0 16px 16px 0` }}
            alt={`${name}`}
            src={image}
            className={`object-cover`}
            fill
          />
        </div>
        <div
          // style={{ borderRadius: `16px 0 0 16px` }}
          className={`flex h-full w-[60%] flex-col justify-start gap-1 overflow-hidden rounded-bl-[16px] rounded-tl-[16px] border-b border-l border-t border-yellow-04 bg-white p-4 md:gap-2 lg:px-6 lg:py-6`}
        >
          <div className={`flex w-full items-center justify-between`}>
            <Link href={`/tourist/${id}`} className={`text-[14px] font-[700] md:text-[16px] lg:text-[24px]`}>
              {name}
            </Link>
            <div className={`flex items-center gap-2`}>
              <div className={`flex items-center gap-2`}>
                <StarIcon className={`h-3 w-3 text-yellow-main lg:h-5 lg:w-5`} />
                <span className={`flex items-center justify-center text-[12px] leading-6 text-write-04 lg:text-[16px]`}>
                  {score}
                </span>
              </div>
              <span className="hidden h-[50px] w-[2px] bg-gray-02 lg:flex"></span>
              <div className={`hidden items-center gap-2 lg:flex`}>
                <ChatBubbleLeftIcon className={`h-5 w-5 text-gray-04`} />
                <span className={`flex items-center justify-center text-[16px] leading-6 text-write-04`}>
                  {comments}
                </span>
              </div>
            </div>
          </div>
          <span
            className={`line-clamp-2 text-[12px] font-[500] text-write-main md:text-[14px] lg:text-[16px] lg:leading-5 2xl:line-clamp-1`}
          >
            {address}
          </span>
          <div
            className={`line-clamp-2 text-[12px] font-[200] text-write-main md:line-clamp-4 md:text-[14px] lg:line-clamp-3 lg:text-[16px] lg:leading-6 xl:line-clamp-4`}
            dangerouslySetInnerHTML={{
              __html: desc.replaceAll(attributeRegex, "") || "",
            }}
          ></div>
          <Link
            href={`/tourist/${id}`}
            className={`mt-auto hidden w-fit self-end rounded-[16px] border border-yellow-main px-[38px] py-[6px] text-[16px] lg:block lg:px-[38px] lg:py-[9px]`}
          >
            بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourismHorizantalCard;
