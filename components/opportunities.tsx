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

const Opportunities = () => {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex flex-col gap-y-4">
        <p className="font-bold text-[36px] ">
          <span className="text-primaryColor">Latest </span>
          <span className="text-black">Job Opportunities</span>
        </p>
        {/* main section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 ">
          {/* let div */}
          <div className="flex flex-col gap-y-4">
            {/* div one */}
            {opportunitiesCardInfo.map((info) => (
              <>
                <div className="px-4 border-l-2 flex flex-col gap-y-2">
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
          {/* second div */}
          <Card className="flex w-full flex-col bg-gradient-to-b from-[#025be1] to-[#3963a2]">
            <CardHeader className="flex flex-col gap-y-2">
              <CardTitle>
                <p className="font-semibold text-[24px] text-white">
                  Product Desinger
                </p>
              </CardTitle>
              <CardDescription>
                <div className="p-1 rounded-full bg-[#00378b] w-24 flex items-center justify-center">
                  <p className="text-[16px] leading-[24px] text-white">
                    Full Time
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
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex flex-row border-t-2 w-3/4 px-2"></div>
                  <p className="flex 1/4 text-[12px] font-bold text-white">
                    1hour ago
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-2">Gitlab</div>
                  <div>20 jobs</div>
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
