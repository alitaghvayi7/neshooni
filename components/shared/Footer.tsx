import Image from "next/image";
import Logo from "../../assets/images/mainpage/logo.png";
import Icon1 from "../../assets/images/icons/icons8_Instagram.png";
import Icon2 from "../../assets/images/icons/icons8_telegram_app.png";
import Icon3 from "../../assets/images/icons/icons8_whatsapp.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        style={{ background: `linear-gradient(268.7deg, rgba(215, 227, 255, 0.4) 0%, rgba(195, 213, 255, 0.1) 100%)` }}
        className={`w-full lg:h-[289px] flex flex-col items-center py-10`}
      >
        <Image
          src={Logo}
          alt={"qom-neshan-logo"}
          className={`w-8 h-8 lg:w-[64px] lg:h-[64px] object-cover opacity-80`}
        />
        <div className={`flex items-center justify-center gap-20 mt-6`}>
          <Link href={""}>
            <Image src={Icon1} alt={"qom-neshan-logo"} className={`w-6 h-6 lg:w-8 lg:h-8 object-cover`} />
          </Link>
          <Link href={""}>
            <Image src={Icon2} alt={"qom-neshan-logo"} className={`w-6 h-6 lg:w-8 lg:h-8 object-cover`} />
          </Link>
          <Link href={""}>
            <Image src={Icon3} alt={"qom-neshan-logo"} className={`w-6 h-6 lg:w-8 lg:h-8 object-cover`} />
          </Link>
        </div>
        <ul className={`flex items-center justify-center gap-8 lg:gap-[64px] mt-8`}>
          <Link className={`text-write-04 text-[16px] font-[400]`} href={"/"}>
            صفحه اصلی
          </Link>
          <Link className={`text-write-04 text-[16px] font-[400]`} href={"/"}>
            اخبار
          </Link>
          <Link className={`text-write-04 text-[16px] font-[400]`} href={"/"}>
            گردشگری
          </Link>
          <Link className={`text-write-04 text-[16px] font-[400]`} href={"/"}>
            کسب و کار
          </Link>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
