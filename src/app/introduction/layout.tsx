import Footer from "@/components/shared/Footer";
import Menu from "@/components/shared/Menu";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <header className={`w-full bg-blue-04 bg-opacity-20`}>
        <Menu />
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, #D7E3FF 0%, #C3D5FF 100%)`,
          }}
          className={`relative isolate z-[1] h-[65px] w-full lg:h-[106px]`}
        ></div>
      </header>
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default RootLayout;
