"use client";
import Image from "next/image";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

const totalStars = 5;

const AddCommentSection = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [comment, setcomment] = useState("");

  const session = useSession();
  console.log(session.data?.user);

  return (
    <>
      <section
        className={`relative top-[-2rem] isolate z-[1] mx-auto w-[calc(100%-56px)] max-w-[1430px] gap-8 pb-[64px] lg:top-[-5rem] lg:w-[calc(100%-245px)]`}
      >
        <div className={`flex w-full items-end gap-2 lg:items-center lg:gap-10`}>
          <div
            className={`flex h-[140px] w-[140px] items-center justify-center overflow-hidden rounded-[32px] lg:h-[300px] lg:w-[300px]`}
          >
            <Image alt="" src={Image1} className={`h-full w-full object-cover`} />
          </div>
          <div className="flex w-[calc(100%-140px)] flex-col justify-center lg:w-auto lg:gap-8">
            <h1 className="text-[16px] font-[700] text-write-main lg:text-[32px]">رستوران فیلیا</h1>
            <span className="text-justify text-[14px] font-[400] text-write-main lg:text-[20px]">
              تهران، خیابان کریم‌خان زند، منطقه ۱۵، بلوار آیت‌الله کاشانی، کوچه ۱۲، پلاک ۵۰
            </span>
          </div>
        </div>
        <span className="mt-[40px] block font-[500] text-write-main lg:mt-[60px] lg:text-[20px]">
          به موبایل ارم چه امتیازی میدهید؟
        </span>
        <div className="flex w-full items-center lg:mt-8">
          {[...Array(totalStars)].map((star: any, index: number) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={currentRating}
                  onChange={() => setRating(currentRating)}
                  placeholder="rating"
                />
                <StarIcon
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                  className={`h-6 w-6 cursor-pointer lg:h-10 lg:w-10 ${currentRating <= (hover! || rating!) ? "text-yellow-main" : "text-gray-01"}`}
                />
              </label>
            );
          })}
        </div>

        {rating && <span className="mt-4 flex text-[16px] text-gray-03 lg:text-[20px]">امتیاز : {rating}</span>}

        <textarea
          placeholder="نظر خود را بنویسید"
          className="mt-8 h-[300px] w-full resize-none rounded-[32px] border-[1px] border-gray-01 px-4 py-6 text-[16px] font-[500] text-write-04 outline-none lg:p-10"
          onChange={(e) => setcomment(e.target.value)}
          value={comment}
          readOnly={comment.length >= 500}
        ></textarea>

        <div className="mt-4 flex flex-col gap-4 text-[12px] text-gray-03 lg:text-[16px]">
          <span>{500 - comment.length} کاراکتر</span>
          <span>
            برای نوشتن تجربه، مثلا می‌توانید فضا را توصیف کنید، از امکانات و ویژگی‌هابگویید و توصیه‌هایتان برای کاربران
            دیگر بنویسید
          </span>
        </div>

        <span className="mt-8 block text-[16px] font-[500] text-write-main lg:mt-[42px] lg:text-[20px]">
          افزودن عکس
        </span>

        <input id="file" type="file" className="hidden" accept="image/*" placeholder="i" multiple={false} />
        <label
          htmlFor="file"
          className="mt-4 flex h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-[16px] border border-dashed border-gray-01 bg-white lg:h-[300px] lg:w-[300px]"
        >
          <PhotoIcon className="h-10 w-10 text-gray-01 lg:h-[56px] lg:w-[56px]" />
        </label>

        <button className="mt-9 flex w-full cursor-pointer items-center justify-center rounded-[16px] bg-yellow-02 py-3 text-write-main lg:w-[444px]">
          ثبت دیدگاه
        </button>
      </section>
    </>
  );
};

export default AddCommentSection;
