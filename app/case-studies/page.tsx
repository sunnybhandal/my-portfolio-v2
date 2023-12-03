import React from "react";
import { CASESTUDY } from "../constants";
import Link from "next/link";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="max-container padding-container pt-16 lg:pt-20 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-36">Case Studies</h2>
        <p className="mt-2 text-center w-full sm:w-[500px] md:w-[650px] lg:w-[750px] px-4 sm:px-10 md:px-24 lg:px-28">
          {CASESTUDY.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6 lg:gap-2">
        <div className="flex flex-col items-center">
          <h2 className="semiBold-20 lg:semiBold-22 mb-1">Personal Website</h2>
          <Link
            href="https://www.figma.com/file/uZEErXqAYSUNBYfpcejCn8/Portfolio?type=design&node-id=0%3A1&mode=design&t=W01hZwUju46ZwADO-1"
            rel="noopener noreferrer"
            target="_blank"
            className="relative flex items-center justify-center"
          >
            <Image
              src="/portfolioFigma.png"
              alt="Portfolio Figma"
              width={429}
              height={280}
              className="z-10 rounded-lg border-2 border-[#89CFF0] hover:opacity-30"
            />
            <p className="absolute semiBold-18">View Project</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="semiBold-18 lg:semiBold-22 mb-1">
            Banking Case Study (Coming Soon)
          </h2>
          <Link
            href="https://www.figma.com/file/uZEErXqAYSUNBYfpcejCn8/Portfolio?type=design&node-id=0%3A1&mode=design&t=W01hZwUju46ZwADO-1"
            rel="noopener noreferrer"
            target="_blank"
            className="relative flex items-center justify-center"
          >
            <Image
              src="/design.jpg"
              alt="Banking App"
              width={415}
              height={280}
              className="z-10 rounded-lg border-2 border-[#89CFF0] hover:opacity-30"
            />
            <p className="absolute semiBold-18">View Project</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
