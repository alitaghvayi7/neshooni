import Image from "next/image";

const IntroductionSection = () => {
  return (
    <>
      <section className={`w-[calc(100%-56px)] lg:w-[calc(100%-245px)] max-w-[1430px] mx-auto pb-[64px] gap-8`}>
        <div className={`w-full lg:h-[657px] rounded-[16px] overflow-hidden flexs items-center justify-center`}>
          <Image alt="" src={""} className={`w-full h-full object-cover`} />
        </div>
      </section>
    </>
  );
};

export default IntroductionSection;
