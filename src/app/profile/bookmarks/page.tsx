import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

const BookmarkPage = () => {
  return (
    <Fragment>
      <div className={`flex w-full items-center gap-2 lg:hidden`}>
        <Link href={`/profile`}>
          {" "}
          <ArrowRightIcon className={`h-6 w-6 cursor-pointer text-gray-03`} />
        </Link>
        <h4 className={`text-[20px] font-[600] text-write-main`}>پست های ذخیره شده</h4>
      </div>
      {/* <div
          onScroll={onScroll}
          ref={containerRef}
          className="ms-6 h-[556px] max-w-[1243px] overflow-hidden overflow-y-auto pb-8 lg:h-[1288px]"
        >
          {collections.map((item: any) => {
            return (
              <div
                key={item?.id}
                className={`my-4 flex h-[127px] w-full items-center overflow-hidden rounded-[16px] lg:h-[302px]`}
              >
                <Fragment>
                  <div
                    className={`flex h-full w-full items-center overflow-hidden rounded-t-[16px] lg:rounded-t-none lg:rounded-br-[16px] lg:rounded-tr-[16px]`}
                  >
                    <Image
                      // style={{ borderRadius: `0 16px 16px 0` }}
                      alt={`${item?.title}`}
                      src={item?.image}
                      className={`h-full w-[40%] object-cover`}
                    />
                    <div
                      // style={{ borderRadius: `16px 0 0 16px` }}
                      className={`flex h-full w-[60%] flex-col justify-between gap-2 overflow-hidden rounded-bl-[16px] rounded-tl-[16px] border-b border-l border-t border-yellow-04  bg-white p-4 lg:px-8 lg:py-8`}
                    >
                      <div className={`flex w-full items-center justify-between`}>
                        <span className={`text-[14px] font-[700] lg:text-[24px]`}>{item?.name}</span>

                        <div className={`flex items-center gap-2`}>
                          <div className={`flex items-center gap-2`}>
                            <StarIcon className={`h-3 w-3 text-yellow-main lg:h-5 lg:w-5`} />
                            <span
                              className={`flex items-center justify-center text-[12px] leading-6 text-write-04 lg:text-[16px]`}
                            >
                              {item?.score}
                            </span>
                          </div>
                          <span className="hidden h-[50px] w-[2px] bg-gray-02 lg:flex"></span>
                          <div className={`hidden items-center gap-2 lg:flex`}>
                            <ChatBubbleLeftIcon className={`h-5 w-5 text-gray-04`} />
                            <span
                              className={`flex items-center justify-center text-[16px] leading-6 text-write-04`}
                            >
                              {item?.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-ellipsis text-[12px] font-[500] leading-6 text-write-main lg:text-[16px]`}
                      >
                        {item?.address}
                      </span>
                      <p
                        className={`text-ellipsis text-[12px] font-[200] leading-6 text-write-main lg:text-[16px] lg:leading-8`}
                      >
                        {item?.desc}
                      </p>

                      <Link
                        href={"/business/1"}
                        className={`w-fit self-end rounded-[16px] border border-yellow-main px-[38px] py-[6px] text-[16px] lg:px-[38px] lg:py-[9px]`}
                      >
                        بیشتر
                      </Link>
                    </div>
                  </div>
                </Fragment>
              </div>
            );
          })}
          {loading && (
            <div
              className={`mx-auto my-4 h-[32px] w-[32px] animate-spin rounded-full border-r border-r-gray-04`}
            ></div>
          )}
        </div> */}
    </Fragment>
  );
};

export default BookmarkPage;
