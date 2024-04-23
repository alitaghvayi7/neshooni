import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import { attributeRegex } from "@/lib/utils/HtmlParser";
import { getSingleNews } from "@/services/news";
import { CalendarDaysIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// import { useState } from "react";
export async function generateMetadata(
  { params: { id }, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const [newsData, parentData] = await Promise.all([getSingleNews({ id }), parent]);

  if (newsData === "Error") return {};

  return {
    title: newsData.data.title,
    description: newsData.data.content,
    openGraph: {
      locale: "fa-IR",
      type: "article",
      title: newsData.data.title,
      description: newsData.data.content,
      url: `${process.env.NEXTAUTH_URL}/wire-service/${id}`,
      siteName: `${parentData?.title?.absolute}`,
      images: [
        {
          url: newsData.data.img || "",
          width: 400,
          height: 300,
        },
      ],
    },
    other: {
      author: new URL(newsData.data.source).hostname,
      // "article:published_time": newsData.data.yoast_head_json.article_published_time,
      // "article:modified_time": newsData.data.yoast_head_json.article_modified_time,
    },
  };
  // return {
  //     ...newsData.data.yoast_head_json,
  //     openGraph: {
  //         locale: newsData.data.yoast_head_json.og_locale,
  //         type: newsData.data.yoast_head_json.og_type,
  //         title: newsData.data.yoast_head_json.og_title,
  //         description: newsData.data.yoast_head_json.og_description,
  //         url: newsData.data.yoast_head_json.og_url.replace('https://blog.avir.co.com/', 'https://avir.co.com/blog/'),
  //         siteName: newsData.data.yoast_head_json.og_site_name
  //     },
  //     other: {
  //         author: newsData.data.yoast_head_json.author,
  //         "article:published_time": newsData.data.yoast_head_json.article_published_time,
  //         "article:modified_time": newsData.data.yoast_head_json.article_modified_time,
  //         "og:image": newsData.data.yoast_head_json.og_image[0].url,
  //         "og:image:width": newsData.data.yoast_head_json.og_image[0].width,
  //         "og:image:height": newsData.data.yoast_head_json.og_image[0].height,
  //         "og:image:type": newsData.data.yoast_head_json.og_image[0].type,
  //     }
  // }
}

export default async function SingleNewsPage({ params: { id } }: { params: { id: string } }) {
  // const [bookmarked, setBookmarked] = useState(false);
  const newsData = await getSingleNews({ id });

  if (newsData === "Error") return notFound();
  return (
    <>
      <main className={`w-full`}>
        <header className={`w-full bg-blue-04 bg-opacity-20`}>
          <Menu />
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
            }}
            className={`relative isolate z-[1] h-[65px] w-full lg:h-[156px]`}
          ></div>
        </header>
        <section className={`w-full bg-blue-04 bg-opacity-10 pb-14 pt-[3rem]`}>
          <section
            className={`relative isolate z-[1] mx-auto flex w-[calc(100%-56px)] max-w-[1430px] flex-col gap-8 pb-[64px] pt-2 lg:w-[calc(100%-245px)] lg:pt-0 `}
          >
            <Breadcrumbs
              breadcumbs={[
                { href: "/", label: "خانه" },
                { href: "/news", label: "اخبار" },
                { href: "/news/wire-service", label: "خبرگزاری های رسمی" },
                {
                  href: `/news/wire-service/${newsData.data.id}`,
                  label: newsData.data.title,
                },
              ]}
            />
            <div className="flex w-full items-start justify-between gap-10">
              <h1 className="text-[20px] font-[700] text-write-main lg:text-[32px]">{newsData.data.title}</h1>
              <div className="flex items-center gap-4 whitespace-nowrap">
                <div className={`flex items-center gap-2`}>
                  <Link
                    href={newsData.data.source}
                    rel="nofollow"
                    target="_blank"
                    className={`flex items-center justify-center text-[12px] leading-6 text-blue-main lg:text-[20px]`}
                  >
                    منبع
                  </Link>
                </div>
                <span className="h-8 w-[1px] bg-gray-03 lg:flex lg:h-[50px]"></span>
                <div className={`hidden items-center gap-2 lg:flex`}>
                  <CalendarDaysIcon className={`h-6 w-6 text-gray-04`} />
                  <span
                    className={`flex items-center justify-center text-[12px] leading-6 text-gray-04 lg:text-[20px]`}
                  >
                    پنج شنبه
                  </span>
                  <span
                    dir={"ltr"}
                    className={`flex items-center justify-center text-[12px] leading-6 text-gray-04 lg:text-[20px]`}
                  >
                    1402 / 11 / 02
                  </span>
                  <span
                    dir={"ltr"}
                    className={`flex items-center justify-center text-[12px] leading-6 text-gray-04 lg:text-[20px]`}
                  >
                    12:55
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`flex h-[342px] w-full items-center justify-center overflow-hidden rounded-[16px] lg:h-[700px]`}
            >
              <div className="relative h-full w-full">
                <Image alt={`${newsData.data.title}`} src={newsData.data.img} className={`object-cover`} fill />
              </div>
            </div>

            <div
              className={`text-justify text-[20px] font-[400] leading-9 text-write-main`}
              dangerouslySetInnerHTML={{
                __html: newsData.data.content.replaceAll(attributeRegex, "") || "",
              }}
            ></div>
            <div className="flex w-full items-center justify-between">
              <div className={`flex items-center gap-3`}>
                <span className={`text-[20px] font-[600] text-write-main `}>برچسب ها:</span>
                <div className={`flex items-center gap-2`}>
                  <span
                    className={`flex items-center justify-center rounded-[8px] bg-gray-02 px-2 py-1 text-[16px] font-[600] text-gray-04`}
                  >
                    فلسطینَ
                  </span>
                  <span
                    className={`flex items-center justify-center rounded-[8px] bg-gray-02 px-2 py-1 text-[16px] font-[600] text-gray-04`}
                  >
                    جنگ
                  </span>
                  <span
                    className={`flex items-center justify-center rounded-[8px] bg-gray-02 px-2 py-1 text-[16px] font-[600] text-gray-04`}
                  >
                    وزیر امور خارجه
                  </span>
                </div>
              </div>

              <div className={`flex items-center gap-3`}>
                {/* {!bookmarked && (
                  <BookmarkIconOutline
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`h-6 w-6 cursor-pointer text-gray-04`}
                  />
                )}
                {bookmarked && (
                  <BookmarkIconSolid
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`h-6 w-6 cursor-pointer text-write-04`}
                  />
                )} */}
                <span className="h-8 w-[1px] bg-gray-03 lg:flex lg:h-[50px]"></span>
                <ShareIcon className={`h-6 w-6 cursor-pointer text-gray-04`} />
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}
