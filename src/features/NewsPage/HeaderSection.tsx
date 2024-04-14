import Menu from "@/components/shared/Menu";
import SearchBox from "@/components/shared/SearchBox";

const HeaderSection = () => {
  return (
    <>
      <header className={`w-full bg-blue-04 bg-opacity-20`}>
        <Menu />
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
          }}
          className={`relative isolate z-[1] h-[65px] w-full lg:h-[156px]`}
        >
          <div className="absolute bottom-[-75%] left-0 right-0 h-full w-full">
            <SearchBox />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
