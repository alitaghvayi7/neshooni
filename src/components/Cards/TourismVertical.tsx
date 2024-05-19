import { attributeRegex } from "@/lib/HtmlParser";
import { ChatBubbleLeftIcon, StarIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const TourismVerticalCard = ({
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
    <div className={`flex h-full w-full flex-col items-center overflow-hidden rounded-t-[16px]`}>
      <div className="relative h-1/2 w-full">
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
        className={`flex h-1/2 w-full flex-col gap-2 overflow-hidden rounded-b-2xl border-b border-l border-r border-yellow-04 bg-white p-4 lg:px-3 lg:py-4`}
      >
        <div className={`flex w-full items-center justify-between`}>
          <span className={`text-[14px] font-[700] lg:text-[24px]`}>{name}</span>
        </div>
        <span className={`line-clamp-2 text-ellipsis text-[12px] font-[500] leading-6 text-write-main lg:text-[14px]`}>
          {address}
        </span>
        <div
          className={`line-clamp-3 text-ellipsis text-[12px] font-[200] leading-6 text-write-main lg:text-[16px] lg:leading-6`}
          dangerouslySetInnerHTML={{
            __html: desc.replaceAll(attributeRegex, "") || "",
          }}
        ></div>
        <div className="mt-auto flex items-center justify-between">
          <div className={`flex items-center gap-2`}>
            <div className={`flex items-center gap-2`}>
              <StarIcon className={`h-3 w-3 text-yellow-main lg:h-5 lg:w-5`} />
              <span
                className={`flex items-center justify-center pt-1 text-[12px] leading-none text-write-04 lg:text-[16px]`}
              >
                {score}
              </span>
            </div>
            <span className="hidden h-[20px] w-[2px] bg-gray-02 lg:flex"></span>
            <div className={`hidden items-center gap-2 lg:flex`}>
              <ChatBubbleLeftIcon className={`h-5 w-5 text-gray-04`} />
              <span className={`flex items-center justify-center pt-1 text-[16px] leading-none text-write-04`}>
                {comments}
              </span>
            </div>
          </div>
          <Link href={`/tourist/${id}`} className={`w-fit rounded-[16px] border border-yellow-main px-6`}>
            بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourismVerticalCard;
