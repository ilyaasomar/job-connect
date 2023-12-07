import { Briefcase, Building2, ShieldBan, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full mt-36">
      <div className="px-4 lg:container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-x-16 gap-y-7">
          {/* left section */}
          <div className="flex w-full lg:flex-1 ">
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold text-[36px] text-[#131517] text-start ">
                Whay We are Most Popular
              </h1>
              <p className="text-[16px] leading-[24px] text-[#24272D]">
                Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed
                praesent pharetra quisque consectetur tellus elit. Suspendisse
                ultrices vitae at platea. Euismod pretium sit est etiam.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* job */}
                <div className="bg-white border-[0.5px] border-[#D6DAE0] px-6 py-4 flex items-center gap-x-2 rounded-md">
                  <div className="bg-[#E4EEFC] w-10 h-10 flex items-center justify-center rounded-md">
                    <ShieldCheck size={25} className="text-black" />
                  </div>
                  <h3 className="text-[#24272D] font-semibold text-[16px] leading-[24px]">
                    Quality Job
                  </h3>
                </div>
                {/* companies */}
                <div className="bg-white border-[0.5px] border-[#D6DAE0] px-6 py-4 flex items-center gap-x-2 rounded-md">
                  <div className="bg-[#E4EEFC] w-10 h-10 flex items-center justify-center rounded-md">
                    <Building2 size={25} className="text-black" />
                  </div>
                  <h3 className="text-[#24272D] font-semibold text-[16px] leading-[24px]">
                    Top Companies
                  </h3>
                </div>
                {/* charge */}
                <div className="bg-white border-[0.5px] border-[#D6DAE0] px-6 py-4 flex items-center gap-x-2 rounded-md">
                  <div className="bg-[#E4EEFC] w-10 h-10 flex items-center justify-center rounded-md">
                    <ShieldBan size={25} className="text-black" />
                  </div>
                  <h3 className="text-[#24272D] font-semibold text-[16px] leading-[24px]">
                    Quality Job
                  </h3>
                </div>
                {/* international charge */}
                <div className="bg-white border-[0.5px] border-[#D6DAE0] px-6 py-4 flex items-center gap-x-2 rounded-md">
                  <div className="bg-[#E4EEFC] w-10 h-10 flex items-center justify-center rounded-md">
                    <Briefcase size={25} className="text-black" />
                  </div>
                  <h3 className="text-[#24272D] font-semibold text-[16px] leading-[24px]">
                    International Job
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="w-full lg:flex-1 h-fit">
            <div className="bg-[#F3F7FA] relative flex items-center justify-center rounded-lg pt-10">
              <Image src="/images/1.png" width={250} height={250} alt="image" className="z-10" />
              <div className="absolute -left-16 shadow-2xl top-16 rounded-md w-52 py-3 bg-white px-4 flex gap-x-2">
                <ShieldCheck />
                <p className="text-[18px] text-[#131517] leading-[24px] font-semibold">
                  100% Trusted
                </p>
              </div>
              {/* stars */}
              <div className="absolute top-16 right-20">
                <Image
                  src="/images/Portal.png"
                  width={30}
                  height={30}
                  alt="image"
                  className="object-cover"
                />
              </div>
              {/* bottom star right */}
              <div className="absolute top-[260px] right-4 md:right-12">
                <Image
                  src="/images/Portal.png"
                  width={30}
                  height={30}
                  alt="image"
                  className="object-cover"
                />
              </div>
              {/* bottom star lett */}
              <div className="absolute top-[330px] left-4 md:left-12">
                <Image
                  src="/images/Portal.png"
                  width={30}
                  height={30}
                  alt="image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
