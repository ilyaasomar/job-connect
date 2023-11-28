"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Switch } from "./ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[#F4F9FF] h-fit">
        <div className="px-4 md:container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center py-12 gap-y-16 lg:gap-x-1">
            {/* right section */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex w-full lg:flex-1 items-start flex-col gap-y-10"
            >
              <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-row gap-x-2"
              >
                <Switch />
                <p className="text-[16px] leading-[24px] text-[#131517]">
                  Find Your Dream Job
                </p>
              </motion.div>
              <motion.h1
                variants={slideInFromLeft(0.5)}
                className="text-3xl md:text-[48px] text-black font-extrabold leading-[61px] font-inter"
              >
                Freelance Jobs and Talents at Your Fingertips{" "}
              </motion.h1>
              <p className="font-normal font-inter text-[24px] leading-normal text-[#24272D]">
                Connect with top freelancers and clients on our platform! find
                your perfect match for your next project.
              </p>
              <Button className="bg-primaryColor-0 font-inter hover:bg-primaryColor-0">
                Make An Enquiry
              </Button>
            </motion.div>
            {/* left section */}
            <div className="flex w-full z-10 lg:flex-1 items-center relative lg:justify-center">
              <Image
                src="/images/hero-image.png"
                width={350}
                height={100}
                alt="image"
                className="object-cover z-10"
              />
              {/* star image */}
              <div className="absolute top-28 right-20">
                <Image
                  src="/images/Portal.png"
                  width={30}
                  height={30}
                  alt="image"
                  className="object-cover"
                />
              </div>
              <div className="absolute rounded-lg flex flex-col -right-24 top-44 bg-white p-8">
                <div className="flex gap-x-2 items-center">
                  <p className="text-[#131517] font-bold text-[24px] ">30K +</p>
                  <Image
                    src="/images/emoji.png"
                    width={30}
                    height={30}
                    alt="image"
                  />
                </div>
                <p className="text-[#131517] text-[16px] font-semibold leading-[24px]">
                  People got hired
                </p>
              </div>
              {/* bottom star right */}
              <div className="absolute top-[430px] right-7">
                <Image
                  src="/images/Portal.png"
                  width={30}
                  height={30}
                  alt="image"
                  className="object-cover"
                />
              </div>
              {/* bottom star lett */}
              <div className="absolute top-[430px] left-7">
                <Image
                  src="/images/Portal.png"
                  width={30}
                  height={30}
                  alt="image"
                  className="object-cover"
                />
              </div>
              {/* wave left */}
              <div className="absolute top-[330px] left-7">
                <Image
                  src="/images/object.png"
                  width={200}
                  height={200}
                  alt="image"
                  className="object-cover"
                />
              </div>
              {/* wave right */}
              <div className="absolute top-[330px] right-7">
                <Image
                  src="/images/object.png"
                  width={200}
                  height={200}
                  alt="image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CallToAction /> */}
      <div className="container mx-auto absolute bg-white hidden md:flex rounded-lg items-center justify-center shadow-lg w-full px-4 xl:w-2/3 left-1/2 lg:top-[670px] z-50 h-24 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-1 justify-between items-center">
          <div className="flex items-center gap-x-10">
            <div className="flex items-center gap-x-4 border-r-2 px-7">
              <Search size={25} className="text-gray-400" />
              <Select>
                <SelectTrigger className="w-52">
                  <SelectValue placeholder="Freelancer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Freelancer</SelectItem>
                  <SelectItem value="2">Rectuiter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="px-6 py-2 rounded-full bg-[#E4EEFC]">
              <p className="text-primaryColor text-[16px] leading-[24px] font-semibold">
                Web Design
              </p>
            </div>
            <div className="px-6 py-2 rounded-full bg-[#E4EEFC]">
              <p className="text-primaryColor text-[16px] leading-[24px] font-semibold">
                UI/UX Design
              </p>
            </div>
          </div>
          <div>
            <Button className="bg-secondaryColor flex gap-x-2 px-12 hover:bg-secondaryColor">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
