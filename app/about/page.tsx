"use client";
import Image from "next/image";
import React, { useState } from "react";
import PictureSlider from "../components/PictureSlider";
import { ABOUT } from "../constants";

const About = () => {
  const [hikingModalOpen, setHikingModalOpen] = useState(false);
  const [healthModalOpen, setHealthModalOpen] = useState(false);
  const [moviesModalOpen, setMoviesModalOpen] = useState(false);
  const [showsModalOpen, setShowsModalOpen] = useState(false);

  return (
    <section className="max-container padding-container pt-16 lg:pt-20 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-32">About</h2>
        <div className="pt-6 text-xl">
          I'm an outdoorsy guy who loves a good adventure
        </div>
      </div>
      {/* Hobbies */}
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-6 lg:gap-8">
          <PictureSlider />
          <div>
            <h4 className="semiBold-24 lg:text-3xl">Hobbies</h4>
            <p className="mt-2">
              <p className="medium-20 text-[#116D99]">Gym</p>
              {ABOUT.hobbies.first}
            </p>
            <p className="mt-4">
              <p className="medium-20 text-[#116D99]">Hiking</p>
              {ABOUT.hobbies.second}
            </p>
            <p className="mt-2">
              <p className="medium-20 text-[#116D99]">Spikeball</p>
              {ABOUT.hobbies.third}
            </p>
          </div>
        </div>
      </div>

      {/* Movies & TV Shows */}
      <div>
        <div className="flex flex-col lg:flex-row justify-between mt-16 gap-6 lg:gap-8">
          <Image
            src="/interstellar.svg"
            alt="working out"
            width={500}
            height={280}
            className="rounded-lg border-2 border-[#89CFF0] w-[365px] md:w-[600px] lg:max-w-[500px] xl:max-w-[600px]"
          />
          <div className="flex flex-col">
            <h4 className="semiBold-24 lg:text-3xl">Movies & TV Shows</h4>
            <p className="mt-2">{ABOUT.moviesShows.first}</p>
            <p className="mt-2">{ABOUT.moviesShows.second}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
