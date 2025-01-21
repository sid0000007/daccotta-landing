"use client";

import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradientDemo } from "./HeroHomeImg";
import BlurIn from "../magicui/blur-in";
import { WavyBackground} from "../ui/wavy-background";
import { BackgroundLines } from "../ui/background-lines";
import { Button } from "../ui/button";
import Link from "next/link";
import { FlipWords } from "../ui/flip-words";
export function BeamDesignBg() {
  const [showBeams, setShowBeams] = useState(false);

  const words = ["buff's", "creators", "Enthusiasts","friends", "binger"];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setShowBeams(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setShowBeams(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const Content = () => (
    // <WavyBackground>
     <BackgroundLines className="flex items-center justify-between lg:justify-center h-[70vh] lg:h-screen w-full flex-col px-4">
      <div className="container mx-auto px-4 py-8 md:my-24 my-0 ">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-start md:justify-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 text-left mb-4">              
              <BlurIn word="The Social Network for Movie" />
              <FlipWords className="text-2xl md:text-4xl lg:text-5xl text-purple-300" words={words} /> <br />
            </h1>
            <p className="text-gray-300 text-sm md:text-lg mb-8 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              Discover, share, and create lists of your favorite movies with
              friends. Join the community !
            </p>
            <div className="flex flex-wrap gap-4 py-5">
      <Link 
        href="https://app.daccotta.com/signin" 
        target="_blank"
        className="relative p-[1px] rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500"
      >
        <Button 
          variant="secondary" 
          className="relative px-4 md:px-8  text-sm lg:text-md py-1 md:py-2 h-auto bg-black hover:bg-black/80 text-white w-full"
        >
          Login
        </Button>
      </Link>

      <Link 
        href="https://app.daccotta.com/signup" 
        target="_blank"
        className="relative p-[1px] rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500"
      >
        <Button 
          variant="secondary"
          className="relative px-4 md:px-8 py-1 md:py-2 h-auto bg-black hover:bg-black/80 text-white w-full"
        >
          Sign Up
        </Button>
      </Link>
    </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 aspect-video flex items-center justify-center [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <BackgroundGradientDemo />
          </div>
        </div>
      </div>
      
    {/* </WavyBackground> */}
    </BackgroundLines>
  );

  return (
    // <BackgroundBeamsWithCollision>
    //   <Content />
    // </BackgroundBeamsWithCollision>
    <div className="container bg-gradient-to-b flex justify-start  md:justify-center items-center top-0">
      <Content />
    </div>
  );
}
