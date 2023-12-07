import { testmonials } from "@/constants";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testmonials = () => {
  return (
    <div className="mt-36">
      <div className="px-4 lg:container mx-auto ">
        <div className="flex flex-col ">
          {/* top section */}
          <div className="flex justify-between items-center">
            {/* left section */}
            <div className="max-w-xl flex flex-col items-start gap-y-3">
              <h1 className="font-bold text-[36px] text-[#131517]">
                Client's comment
              </h1>
              <p className="text-[16px] text-[#24272D] ">
                Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed
                praesent pharetra quisque consectetur tellus elit.
              </p>
            </div>
            {/* right section */}
            <div className="hidden md:flex max-w-xl items-center gap-x-2">
              {/* div one */}
              <div className="border border-primaryColor w-8 h-8 rounded-full flex items-center justify-center hover:bg-primaryColor hover:text-white">
                <ArrowLeft
                  size={20}
                  className="text-primaryColor hover:text-white"
                />
              </div>
              {/* second one */}
              <div className="border border-primaryColor w-8 h-8 rounded-full flex items-center justify-center hover:bg-primaryColor hover:text-white">
                <ArrowRight
                  size={20}
                  className="text-primaryColor hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* testmonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-10">
            {testmonials.map((test) => (
              <div className="flex flex-col relative gap-y-5 items-center border-[0.5px] border-gray-200 p-6">
                <Image src={test.image} width={80} height={80} alt="image" />
                <div className="absolute flex items-center justify-center top-[70px] right-[110px] w-8 h-8 rounded-full bg-[#00A79D] stroke-white">
                  <Quote size={15} className="text-white" />
                </div>
                <p className="text-center text-[#24272D] text-[16px] leading-6">
                  {test.desciption}
                </p>
                <div className="flex flex-col gap-y-1 items-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: test.dotColor }}
                  />
                  <h3 className="text-[18px] text-[#24272D] leading-6 font-semibold">
                    {test.name}
                  </h3>
                  <p className="text-[12px] text-[#6E7175] leading-6">
                    {test.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
