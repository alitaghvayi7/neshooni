import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

interface Props {
  breadcumbs: object[];
}

const Breadcrumbs = (props: Props) => {
  const { breadcumbs } = props;

  return (
    <>
      <div className={`flex w-full items-center gap-3 py-4`}>
        {breadcumbs.map((breadcumb: any, index: number) => {
          return (
            <Fragment key={index}>
              <Link
                href={breadcumb?.href}
                className={`text-[16px] font-[400] ${
                  index !== breadcumbs.length - 1 ? "text-write-03 opacity-60" : "text-write-main"
                }`}
              >
                {breadcumb?.label}
              </Link>
              {index !== breadcumbs.length - 1 && <ChevronLeftIcon className="h-4 w-4 text-write-03" />}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumbs;
