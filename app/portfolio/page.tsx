import React from "react";
import { PORTFOLIO } from "../constants";
import Link from "next/link";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="max-container padding-container h-screen pt-16 lg:pt-20">
      <div className="flex flex-col items-center">
        <h2 className="bold-32">Case Studies</h2>
        <p className="mt-2 text-center">{PORTFOLIO.intro}</p>
      </div>
      <div>
        <ol className="list-decimal">
          <li>Problem</li>
          <li>1</li>
          <li>1</li>
        </ol>
      </div>
    </section>
  );
};

export default CaseStudies;
