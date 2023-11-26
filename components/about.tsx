import { Briefcase, Building2, ShieldBan, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full mt-36">
      <div className="container mx-auto ">
        <div className="flex items-center gap-x-5">
          {/* left section */}
          <div className="flex flex-1">
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
          <div className="flex-1">
            <div className="bg-[#F3F7FA] rounded-lg">
              <Image
                src="/images/engineer.png"
                width={300}
                height={300}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
