import Image from "next/image";
import backgroundImage from "../../../public/assets/images/auth/lines-background.png";
import abs from "../../../public/assets/images/auth/main-bg.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/Auth";
import { redirect } from "next/navigation";
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/profile");
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="z-[4]">{children}</div>
      <section
        className={`absolute bottom-0 left-0 top-0 z-[3] flex h-full w-full flex-col justify-center gap-4 overflow-hidden`}
      >
        <Image src={backgroundImage} alt="background" fill />
        <Image src={abs} alt="background" />
      </section>
    </div>
  );
};

export default RootLayout;
