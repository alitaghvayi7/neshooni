import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import { mainConfig } from "@/configs/WebsiteMainConfigs";
import IntroductionSection from "@/features/SingleBusinessPage/IntroductionSection";
import { getSingleBusiness } from "@/services/business";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}): Promise<Metadata> => {
  const [businessData] = await Promise.all([getSingleBusiness({ id })]);
  if (businessData === "Error") return {};
  return {
    title: businessData.data?.name || "",
    description: businessData.data?.desc || "",
    openGraph: {
      url: `${mainConfig.WebsiteDomain}/business/${id}`,
      title: businessData.data?.name || "",
      description: businessData.data?.desc || "",
      images: businessData.data?.img || "",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: businessData.data?.name || "",
      description: businessData.data?.desc || "",
      images: businessData.data?.img || "",
    },
    other: {
      "business:contact_data:street_address": businessData.data?.address?.address || "",
      "twitter:url": `${mainConfig.WebsiteDomain}/business/${id}`,
    },
  };
};

export default async function SingleBusinessPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const pageData = await getSingleBusiness({
    id,
  });
  if (pageData === "Error") {
    throw new Error("خطایی رخ داده است.");
  }
  if (pageData.statusCode === 404 || pageData.data === null) {
    return notFound();
  }
  console.log(pageData.data.address);
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
        <section className={`w-full bg-blue-04 bg-opacity-10`}>
          {/* <MapSection />
          <BusinessSection /> */}
          <IntroductionSection
            id={pageData.data.id}
            description={pageData.data?.desc || ""}
            name={pageData.data?.name}
            score={pageData.data?.average_score[0]?.average_score ?? "0"}
            image={pageData.data?.img}
            details={pageData.data?.details}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
