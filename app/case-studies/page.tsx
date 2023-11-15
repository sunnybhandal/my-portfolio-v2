import React from "react";
import { CASESTUDY } from "../constants";
import Link from "next/link";
import Button from "../components/Button";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="max-container padding-container pt-24 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-40 items-center">Case Studies</h2>
        <p className="mt-2">{CASESTUDY.intro}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6 lg:gap-2">
        <div className="flex flex-col items-center">
          <h2 className="semiBold-20 lg:semiBold-22 mb-1">Personal Website</h2>
          <Link
            href="https://www.figma.com/file/uZEErXqAYSUNBYfpcejCn8/Portfolio?type=design&node-id=0%3A1&mode=design&t=W01hZwUju46ZwADO-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/portfolioFigma.png"
              alt="Portfolio Figma"
              width={429}
              height={280}
              className="rounded-lg border-2 border-[#89CFF0] hover:opacity-50"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="semiBold-20 lg:semiBold-22 mb-1">
            Banking Case Study (Coming Soon)
          </h2>
          <Image
            src="/design.jpg"
            alt="Banking App"
            width={415}
            height={280}
            className="rounded-lg border-2 border-[#89CFF0]"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
