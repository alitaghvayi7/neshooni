import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

interface Props {
  breadcumbs: object[];
}

const Breadcrumbs = (props: Props) => {
  const { breadcumbs } = props;

  return (
    <>
      <div className={`flex items-center gap-3 w-full py-4`}>
        {breadcumbs.map((breadcumb: any, index: number) => {
          return (
            <>
              <Link
                href={breadcumb?.href}
                className={`text-[16px] font-[400] ${
                  index !== breadcumbs.length - 1 ? "text-write-03 opacity-60" : "text-write-main"
                }`}
              >
                {breadcumb?.label}
              </Link>
              {index !== breadcumbs.length - 1 && <ChevronLeftIcon className="w-4 h-4 text-write-03" />}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumbs;
