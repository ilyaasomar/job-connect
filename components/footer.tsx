import React from "react";
import Logo from "./logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full mt-24">
      <div className="px-4 lg:container mx-auto flex items-center justify-between">
        <h1 className="font-bold text-primaryColor text-[29px] leading-[75px]">
          JOB
        </h1>
        <div className="flex items-center gap-x-4">
          <p className="text-[#6E7175] font-semibold text-[16px] leading-6">
            2023. All right reserved.
          </p>
          <p className="text-[#6E7175] font-semibold text-[16px] leading-6">
            Privacy Policy.
          </p>
          <p className="text-[#6E7175] font-semibold text-[16px] leading-6">
            Terms of Services
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center justify-center bg-primaryColor w-8 h-8 rounded-lg">
            <Linkedin size={20} className="text-white" />
          </div>
          <div className="flex items-center justify-center bg-primaryColor w-8 h-8 rounded-lg">
            <Twitter size={20} className="text-white" />
          </div>
          <div className="flex items-center justify-center bg-primaryColor w-8 h-8 rounded-lg">
            <Instagram size={20} className="text-white" />
          </div>
          <div className="flex items-center justify-center bg-primaryColor w-8 h-8 rounded-lg">
            <Facebook size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
