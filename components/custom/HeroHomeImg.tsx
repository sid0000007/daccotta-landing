
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import home from "../../assets/Features/Hero01.png";
import Image from "next/image";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function BackgroundGradientDemo() {
  return (
    <div>
      {/* <BackgroundGradient className="">
        <Image src={home} alt="" className="rounded-[18px]" />
      </BackgroundGradient> */}
      <HoverBorderGradient
        containerClassName="rounded-[18px]"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-4"
      >
      <Image src={home} alt="" className="rounded-[18px]" />
      </HoverBorderGradient>
    </div>
  );
}
