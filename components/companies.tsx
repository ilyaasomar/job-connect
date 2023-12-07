import { companiniesLogo } from "@/constants";
import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="px-4 lg:container mx-auto mt-36">
      <div className="flex flex-col gap-y-5">
        <p className="text-[#6E7175] text-center font-semibold text-[24px] ">
          Trusted by 4,000+ companies
        </p>
        <div className="flex flex-wrap justify-between items-center gap-y-5 gap-x-10">
          {companiniesLogo.map((logo) => (
            <Image
              src={logo.logo}
              key={logo.id}
              width={100}
              height={100}
              alt="logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
