import { categories } from "@/constants";
import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div className="w-full bg-[#F3F7FA] mt-36">
      <div className="px-4 lg:container mx-auto pt-12">
        <div className="flex flex-col gap-y-7 py-16">
          <h1 className="font-bold text-[36px] text-[#131517] text-start ">
            Browse Talent by Category
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-md px-10 py-16 flex flex-col gap-y-8"
              >
                <h3 className="font-semibold text-[24px] text-[#24272D]">
                  {category.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-x-3">
                    <Image
                      src="/images/icons/star.png"
                      width={25}
                      height={25}
                      alt="image"
                    />
                    <p className="text-[#6E7175] text-[18px] leading-[24px] ">
                      {category.rating}
                    </p>
                  </div>
                  <p className="text-[#6E7175] text-[18px] leading-[24px]">
                    {category.skills}
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

export default Category;
