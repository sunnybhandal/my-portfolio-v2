"use client";
import Image from "next/image";
import { BIO } from "./constants";
import Button from "./components/Button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["hero", "about", "experience"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`max-container padding-container pt-20 lg:pt-18 flex flex-col lg:flex-row gap-8 lg:gap-4 lg:h-screen items-center justify-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col gap-4 w-full whitespace-normal break-words lg:w-[600px] pb-2 lg:pb-0">
        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-0 md:mb-2">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
            Sunny Bhandal
          </span>
        </h1>
        <p className="semiBold-22 text-blue-600 whitespace-normal mt-1">
          Lead Solutions Engineer @{" "}
          <Link
            href="https://ir.symbotic.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-green-500">Symbotic</span>
          </Link>
        </p>

        <p className="regular-18">{BIO.p1}</p>
        <p className="regular-18">{BIO.p2}</p>
        <p className="medium-16">{BIO.quote}</p>
        <div className="flex items-center gap-4">
          <Link href="/about">
            <Button title="Learn More" variant="btn_primary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sunnybhandal/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button title="LinkedIn" variant="btn_secondary" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-[450px]">
        <Image
          src="deuces.svg"
          alt="deuces"
          width={250}
          height={100}
          className="w-64 lg:w-80"
        />
      </div>
    </div>
  );
}
