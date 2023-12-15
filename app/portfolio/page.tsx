import React from "react";
import { PORTFOLIO } from "../constants";
import Link from "next/link";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="max-container padding-container pt-16 lg:pt-20 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-32">Case Studies</h2>
        <p className="mt-2 text-center w-[350px] sm:w-[500px] md:w-[650px]">
          {PORTFOLIO.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6 lg:gap-6">
        <div className="flex flex-col items-center">
          <h2 className="semiBold-20 lg:semiBold-22 mb-1">Personal Website</h2>
          <Link
            href="/portfolio/personal-website"
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
            Event Registration
          </h2>
          <Link
            href="/portfolio/event-registration"
            className="relative flex items-center justify-center"
          >
            <Image
              src="/eventFigma.png"
              alt="Event Registration"
              width={415}
              height={500}
              className="z-10 rounded-lg border-2 border-[#89CFF0] hover:opacity-30"
            />
            <p className="absolute semiBold-18">View Project</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="semiBold-18 lg:semiBold-22 mb-1">
            Banking Case Study
          </h2>
          <Link
            href="/portfolio/case-study"
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
