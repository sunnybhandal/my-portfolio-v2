import React from "react";
import { EXPERIENCE } from "../constants";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="max-container flex flex-col gap-8 px-6 sm:px-14 md:px-28 lg:px-56 xl:px-72 pt-16 lg:pt-20 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-32 items-center">Experience</h2>
      </div>
      <div>
        <div className="flex gap-2 w-full">
          <Image src="/freelance.svg" alt="Ohmni Logo" width={80} height={80} />
          <div className="flex flex-col w-full justify-end items-start">
            <h2 className="text-[#116D99] semiBold-20 lg:semiBold-22">
              Product Designer
            </h2>
            <div className="lg:flex w-full justify-between">
              <h4 className="medium-18">Freelance</h4>
              <h4 className="medium-18">Dec 2023 - Present</h4>
            </div>
          </div>
        </div>
        <ul className="list-none mt-4 flex flex-col gap-4">
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.freelance.first}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.freelance.second}
          </li>
        </ul>
      </div>
      <hr className="border-2 border-[#89CFF0] rounded-lg" />

      <div>
        <div className="flex gap-2 w-full">
          <Image src="/ohmniLabs.svg" alt="Ohmni Logo" width={80} height={80} />
          <div className="flex flex-col w-full justify-end items-start">
            <h2 className="text-[#116D99] semiBold-20 lg:semiBold-22">
              Lead Solutions Engineer
            </h2>
            <div className="lg:flex w-full justify-between">
              <h4 className="medium-18">OhmniLabs</h4>
              <h4 className="medium-18">Sept 2022 - Present</h4>
            </div>
          </div>
        </div>
        <ul className="list-none mt-4 flex flex-col gap-4">
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.ohmniLabs.first}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.ohmniLabs.second}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.ohmniLabs.third}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.ohmniLabs.fourth}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.ohmniLabs.fifth}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.ohmniLabs.sixth}
          </li>
        </ul>
      </div>
      <hr className="border-2 border-[#89CFF0] rounded-lg" />
      <div>
        <div className="flex gap-2 w-full">
          <Image
            src="/simplyAsk.svg"
            alt="SimplyAsk Logo"
            width={80}
            height={80}
          />
          <div className="flex flex-col w-full justify-end items-start">
            <h2 className="text-[#116D99] semiBold-20 lg:semiBold-22">
              Software Developer
            </h2>
            <div className="lg:flex w-full justify-between">
              <h4 className="medium-18">SimplyAsk.AI</h4>
              <h4 className="medium-18">Nov 2021 - Sept 2022</h4>
            </div>
          </div>
        </div>
        <ul className="list-none mt-4 flex flex-col gap-4">
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.simplyAsk.first}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.simplyAsk.second}
          </li>
          <li className="flex">
            <span className="mr-2 -mt-1 text-2xl text-[#89CFF0]">&#8226;</span>
            {EXPERIENCE.simplyAsk.third}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
