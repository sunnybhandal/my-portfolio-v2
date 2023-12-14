import Modal from "@/app/components/Modal";
import { ABOUT, MODALS } from "@/app/constants";
import Image from "next/image";
import React from "react";

const PersonalWebsite = () => {
  return (
    <section className="max-container padding-container pt-16 lg:pt-20 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-36">Personal Website (Pending)</h2>
        <p className="mt-2 text-center w-[300px] sm:w-[450px] md:w-[660px] px-4 sm:px-10 md:px-24 lg:px-20">
          The design of my previous website was super boring and I started to
          hate looking at it. This one may not be that much better since I am
          limited by my coding skills.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div>
          <h4 className="semiBold-24">1. Define a Problem</h4>
          <p className="">How do I want to express myself?</p>
        </div>
        <div>
          <h4 className="semiBold-24">2. Research</h4>
          <p className="">Find portfolio websites that I like.</p>
        </div>
        <div>
          <h4 className="semiBold-24">
            3. Paper Mockups and Information Architecture
          </h4>
          <p className="">Needs description</p>
        </div>
        <div>
          <h4 className="semiBold-24">4. Digital Wireframes </h4>
          <p className="">Needs description</p>
        </div>
        <div>
          <h4 className="semiBold-24">5. Basic Prototypes </h4>
          <p className="">Needs description</p>
        </div>
        <div>
          <h4 className="semiBold-24">6. High Fidelity Prototypes </h4>
          <p className="">Needs description</p>
        </div>
        <div>
          <h4 className="semiBold-24">
            7. Continuous Iteration and Improvements
          </h4>
          <p className="">
            I keep revisiting the design of the website as I learn more and
            more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalWebsite;
