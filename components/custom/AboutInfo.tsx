import Image from "next/image";
import stats from "../../assets/Features/daccotta-sidd-stats.png";
import BlurIn from "../magicui/blur-in";
import { cn } from "@/lib/utils";

export default function AboutDaccotta() {
  return (
    <div
      className=" container text-gray-100 py-8 md:mb-24 mb-0 px-0 sm:px-8 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
      id="about"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold text-purple-300 mb-14">
        <BlurIn word="About Daccotta" />
      </h2>

      <section className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 px-[2rem]">
          <Image
            src={stats}
            alt=""
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4 md:ml-6 px-[2rem] md:px-0 lg:px-0">
          <ul className="text-xs sm:text-sm lg:text-lg text-gray-300 text-left space-y-5 list-disc pl-4">
            <li>Film discovery platform</li>

            <li>Personalized movie recommendations</li>

            <li>Create custom lists</li>

            <li>Movie journal entries</li>

            <li>Connect with enthusiasts</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
