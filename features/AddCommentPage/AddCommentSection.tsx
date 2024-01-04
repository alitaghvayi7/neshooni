import Image from "next/image";
import Image1 from "@/assets/images/businesspage/business-image(1).png";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";

const AddCommentSection = () => {
    const [rating, setRating] = useState<number | null>(null);
    const [hover, setHover] = useState<number | null>(null);
    const [totalStars, setTotalStars] = useState(5);
    const [comment, setcomment] = useState("");

    return (
        <>
            <section
                className={`w-[calc(100%-56px)] lg:w-[calc(100%-245px)] max-w-[1430px] mx-auto pb-[64px] gap-8 relative z-[1] isolate top-[-2rem] lg:top-[-5rem]`}
            >
                <div className={`w-full flex items-end lg:items-center gap-2 lg:gap-10`}>
                    <div className={`w-[140px] h-[140px] lg:w-[300px] lg:h-[300px] rounded-[32px] overflow-hidden flex items-center justify-center`}>
                        <Image alt="" src={Image1} className={`w-full h-full object-cover`} />
                    </div>
                    <div className="flex flex-col justify-center lg:gap-8 w-[calc(100%-140px)] lg:w-auto">
                        <h1 className="text-[16px] lg:text-[32px] font-[700] text-write-main">رستوران فیلیا</h1>
                        <span className="text-[14px] lg:text-[20px] font-[400] text-write-main text-justify">تهران، خیابان کریم‌خان زند، منطقه ۱۵، بلوار آیت‌الله کاشانی، کوچه ۱۲، پلاک ۵۰</span>
                    </div>
                </div>
                <span className="lg:text-[20px] font-[500] block text-write-main mt-[40px] lg:mt-[60px]">
                    به موبایل ارم چه امتیازی میدهید؟
                </span>
                <div className="flex items-center lg:mt-8 w-full">
                    {[...Array(totalStars)].map((star, index) => {
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
                                    className={`w-6 h-6 lg:w-10 lg:h-10 cursor-pointer ${currentRating <= (hover! || rating!) ? "text-yellow-main" : "text-gray-01"}`} />
                            </label>
                        );
                    })}
                </div>

                {rating && <span className="text-[16px] lg:text-[20px] flex text-gray-03 mt-4">امتیاز : {rating}</span>}

                <textarea
                    placeholder="نظر خود را بنویسید"
                    className="w-full h-[300px] rounded-[32px] border-[1px] border-gray-01 px-4 py-6 lg:p-10 mt-8 resize-none outline-none text-[16px] font-[500] text-write-04"
                    onChange={(e) => setcomment(e.target.value)}
                    value={comment}
                    readOnly={comment.length >= 500}
                ></textarea>

                <div className="flex flex-col gap-4 text-[12px] lg:text-[16px] text-gray-03 mt-4">
                    <span>{500 - comment.length} کاراکتر</span>
                    <span>برای نوشتن تجربه، مثلا می‌توانید فضا را توصیف کنید، از امکانات و ویژگی‌هابگویید و توصیه‌هایتان برای کاربران دیگر بنویسید</span>
                </div>

                <span className="text-[16px] lg:text-[20px] font-[500] block text-write-main mt-8 lg:mt-[42px]">
                    افزودن عکس
                </span>

                <input id="file" type="file" className="hidden" accept="image/*" placeholder="i" multiple={false} />
                <label htmlFor="file" className="w-[140px] h-[140px] lg:w-[300px] lg:h-[300px] cursor-pointer mt-4 flex items-center justify-center border border-dashed border-gray-01 rounded-[16px] bg-white">
                    <PhotoIcon className="text-gray-01 lg:w-[56px] lg:h-[56px] w-10 h-10" />
                </label>

                <button
                    className="w-full lg:w-[444px] bg-yellow-02 text-write-main rounded-[16px] py-3 flex items-center justify-center mt-9 cursor-pointer"
                >
                    ثبت دیدگاه
                </button>
            </section >
        </>
    )
}

export default AddCommentSection;