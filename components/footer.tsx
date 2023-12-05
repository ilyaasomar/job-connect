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
          <p>2023. All right reserved.</p>
          <p>Privacy Policy.</p>
          <p>Terms of Services</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <Linkedin size={20} className="text-primaryColor" />
          <Twitter size={20} className="text-primaryColor" />
          <Instagram size={20} className="text-primaryColor" />
          <Facebook size={20} className="text-primaryColor" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
