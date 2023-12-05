import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="px-4 lg:container mx-auto mt-36">
      <div className="w-full bg-primaryColor rounded-xl ">
        <div className="flex items-center relative">
          {/* left section */}
          <div className="flex flex-col pl-12 gap-y-6 py-24">
            <h1 className="text-[36px] font-bold text-white ">
              Explore New Job Now
            </h1>
            <p className="text-white text-[18px] leading-[24px] font-semibold max-w-4xl">
              Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed
              praesent pharetra quisque consectetur tellus elit. Suspendisse
              ultrices vitae at platea. Euismod pretium sit est etiam.
            </p>
            <Button className="px-6 py-2 w-fit bg-white text-primaryColor rounded-md">
              Get Started
            </Button>
          </div>
          {/* right section */}
          <div className="w-full">
            <Image
              src="/images/women.png"
              width={1000}
              height={1000}
              alt=""
              className="w-fit object-contain absolute bottom-0 -right-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
