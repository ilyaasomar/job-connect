import { opportunitiesCardInfo } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { User } from "lucide-react";

const Opportunities = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex flex-col gap-y-4">
        <p className="font-bold text-[36px] ">
          <span className="text-primaryColor">Latest </span>
          <span className="text-black">Job Opportunities</span>
        </p>
        {/* main section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-12 mt-10">
          {/* frist div */}
          <div className="flex flex-col gap-y-4">
            {/* div one */}
            {opportunitiesCardInfo.map((info) => (
              <>
                <div className="px-4 border-l-2 flex flex-col gap-y-2 group-[]:hover:border-primaryColor">
                  <div className="flex items-center gap-x-10">
                    <p className="text-[24px] font-normal text-primaryColor">
                      {info.title}
                    </p>
                    <div
                      className={cn(
                        "w-8 h-8 flex items-center justify-center rounded-md p-2"
                      )}
                      // @ts-ignore
                      style={{ backgroundColor: info.bgColor }}
                    >
                      {/* {`w-8 h-8 flex items-center justify-center rounded-md p-2 bg-${info.bgColor}` */}
                      <p className="text-[18px] leading-[24px] text-[#131517]">
                        {info.amount}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* second card */}
          <Card className="flex w-full flex-col bg-gradient-to-b rounded-xl from-[#025be1] to-[#3963a2]">
            <CardHeader className="flex flex-col gap-y-2">
              <CardTitle>
                <p className="font-semibold text-[24px] text-white">
                  Product Desinger
                </p>
              </CardTitle>
              <CardDescription className="flex gap-x-3">
                <div className="p-1 rounded-full bg-[#00378b] w-fit px-3 flex items-center justify-center">
                  <p className="text-[16px] leading-[24px] text-white">
                    Full Time
                  </p>
                </div>
                <div className="p-1 rounded-full bg-[#00378b] w-fit px-3 flex items-center justify-center">
                  <p className="text-[16px] leading-[24px] text-white">
                    Product
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-[24px] text-[#5AFEF4]">
                34K$ - 45K$
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full ">
                <div className="flex items-center gap-x-1">
                  <div className="w-3/4 bg-white h-0.5" />
                  <p className="flex w-1/4 text-[12px] font-bold text-white">
                    1hour ago
                  </p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-x-2">
                    {/* image */}
                    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center">
                      <Image
                        src="/images/icons/gitlab.png"
                        width={40}
                        height={40}
                        alt="image"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[12px] font-bold leading-[24px] text-white ">
                        Gitlab
                      </p>
                      <div className="flex items-center">
                        <User size={20} className="mr-2 text-white" />
                        <p className="text-[12px] font-normal leading-[24px] text-white ">
                          1200-3000
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* right section */}
                  <div className="">
                    <div className="p-1 rounded-full bg-[#5AFEF4] w-16 flex items-center justify-center">
                      <p className="text-[12px] leading-[24px] text-black">
                        20 Jobs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
          {/* third card */}
          <Card className="flex w-full flex-col bg-gradient-to-b rounded-xl bg-[#E4EEFC]">
            <CardHeader className="flex flex-col gap-y-2">
              <CardTitle>
                <p className="font-semibold text-[24px] text-black">
                  Senior Designer
                </p>
              </CardTitle>
              <CardDescription className="flex gap-x-3">
                <div className="p-1 rounded-full bg-[#BBD3F8] w-fit px-3 flex items-center justify-center">
                  <p className="text-[16px] leading-[24px] text-black">
                    Full Time
                  </p>
                </div>
                <div className="p-1 rounded-full bg-[#BBD3F8] w-fit px-3 flex items-center justify-center">
                  <p className="text-[16px] leading-[24px] text-black">
                    Head of Design
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-[24px] text-black">
                25K$ - 45K$
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full ">
                <div className="flex items-center gap-x-1">
                  <div className="w-3/4 bg-white h-0.5" />
                  <p className="flex w-1/4 text-[12px] font-bold text-primaryColor">
                    4hour ago
                  </p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-x-2">
                    {/* image */}
                    <div className="bg-black w-12 h-12 rounded-xl flex items-center justify-center">
                      <Image
                        src="/images/icons/hector.png"
                        width={30}
                        height={30}
                        alt="image"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[12px] font-bold leading-[24px] text-[#6E7175] ">
                        Hotjar
                      </p>
                      <div className="flex items-center">
                        <User size={20} className="mr-2 text-[#6E7175]" />
                        <p className="text-[12px] font-normal leading-[24px] text-[#6E7175]">
                          140-300
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* right section */}
                  <div className="">
                    <div className="p-1 rounded-full bg-[#FDC0AE] w-16 flex items-center justify-center">
                      <p className="text-[12px] leading-[24px] text-black">
                        45 Jobs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
          {/* fourth card */}
          <Card className="flex w-full flex-col bg-gradient-to-b rounded-xl bg-[#E4EEFC]">
            <CardHeader className="flex flex-col gap-y-2">
              <CardTitle>
                <p className="font-semibold text-[24px] text-black">
                  Creative Diractor
                </p>
              </CardTitle>
              <CardDescription className="flex gap-x-3">
                <div className="p-1 rounded-full bg-[#BBD3F8] w-fit px-3 flex items-center justify-center">
                  <p className="text-[16px] leading-[24px] text-black">
                    Full Time
                  </p>
                </div>
                <div className="p-1 rounded-full bg-[#BBD3F8] w-fit px-3 flex items-center justify-center">
                  <p className="text-[16px] leading-[24px] text-black">
                    Design
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-[24px] text-black">
                35K$ - 55K$
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full ">
                <div className="flex items-center gap-x-1">
                  <div className="w-3/4 bg-white h-0.5" />
                  <p className="flex w-1/4 text-[12px] font-bold text-primaryColor">
                    8hour ago
                  </p>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex items-center gap-x-2">
                    {/* image */}
                    <div className="bg-black w-12 h-12 rounded-xl flex items-center justify-center">
                      <Image
                        src="/images/icons/github.png"
                        width={30}
                        height={30}
                        alt="image"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[12px] font-bold leading-[24px] text-[#6E7175] ">
                        Github
                      </p>
                      <div className="flex items-center">
                        <User size={20} className="mr-2 text-[#6E7175]" />
                        <p className="text-[12px] font-normal leading-[24px] text-[#6E7175]">
                          6200-4000
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* right section */}
                  <div className="">
                    <div className="p-1 rounded-full bg-[#FDC0AE] w-16 flex items-center justify-center">
                      <p className="text-[12px] leading-[24px] text-black">
                        75 Jobs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
