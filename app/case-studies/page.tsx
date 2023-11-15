import React from "react";
import { CASESTUDY } from "../constants";
import Link from "next/link";
import Button from "../components/Button";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="max-container padding-container pt-24 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-40 items-center">About Me</h2>
        <p className="mt-2">{CASESTUDY.intro}</p>
      </div>
      {/* Portfolio */}
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-16 gap-10">
          <div className="flex flex-col items-center">
            <h4 className="semiBold-24">Personal Website</h4>
            <p className="mt-2">{CASESTUDY.portfolio.first}</p>
          </div>
          <Image
            src="/portfolioFigma.png"
            alt="Portfolio Figma"
            width={500}
            height={280}
            className="rounded-lg border-2 border-[#89CFF0]"
          />
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="https://www.figma.com/file/uZEErXqAYSUNBYfpcejCn8/Portfolio?type=design&node-id=0%3A1&mode=design&t=W01hZwUju46ZwADO-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button title="View Design" variant="btn_primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
