import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-row">
      <h1 className="font-bold text-[29px] leading-[75px]">J</h1>
      <Image src="/images/logo.png" width={50} height={10} alt="logo" />
      <h1 className="font-bold text-[29px] leading-[75px]">B</h1>
    </div>
  );
};

export default Logo;
