import Menu from "@/components/shared/Menu"
import SearchBox from "@/components/shared/SearchBox"


const HeaderSection = () => {
    return (
        <>
            <header className={`w-full bg-blue-04 bg-opacity-20`}>
                <Menu />
                <div
                    style={{
                        backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
                    }}
                    className={`relative w-full h-[65px] lg:h-[156px] z-[1] isolate`}
                >
                    <div className="w-full h-full absolute left-0 right-0 bottom-[-75%]">
                        <SearchBox />
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderSection