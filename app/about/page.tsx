"use client";
import Image from "next/image";
import React, { useState } from "react";
import PictureSlider from "../components/PictureSlider";
import ImageCarousel from "../components/ImageCarousel";
import Button from "../components/Button";
import { ABOUTME } from "../constants";

const HikingImages = [
  {
    id: 1,
    label: "Mount St. Piran",
    file: "/stPiran.png",
  },
  {
    id: 2,
    label: "Mount Temple",
    file: "/temple.png",
  },
  {
    id: 3,
    label: "EEOR",
    file: "/eeor.png",
  },
  {
    id: 4,
    label: "Mount Sulphur",
    file: "/sulphur.png",
  },
];

const About = () => {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <section className="max-container padding-container pt-24 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-40 items-center">About Me</h2>
        <p className="mt-2">{ABOUTME.intro}</p>
      </div>

      {/* Hiking */}
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between mt-16 gap-10">
          <div className="flex flex-col items-center">
            <h4 className="semiBold-24">Hiking</h4>
            <p className="mt-2">{ABOUTME.hiking}</p>
          </div>
          <PictureSlider />
        </div>
        <div className="flex justify-center mt-8">
          <Button title="My Top Hikes" variant="btn_primary" />
        </div>
      </div>
      {/* Health & Fitness */}
      <div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-16 gap-10">
          <PictureSlider />
          <div className="flex flex-col items-center">
            <h4 className="semiBold-24">Health & Fitness</h4>
            <p className="mt-2">{ABOUTME.healthFitness}</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <Button title="My Top Books" variant="btn_primary" />
          <Button title="My Top Podcasts" variant="btn_secondary" />
        </div>
      </div>

      {/* Movies & TV Shows */}
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between mt-16 gap-10">
          <div className="flex flex-col items-center">
            <h4 className="semiBold-24">Movies & TV Shows</h4>
            <p className="mt-2">{ABOUTME.moviesShows}</p>
          </div>
          <PictureSlider />
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <Button title="My Top Books" variant="btn_primary" />
          <Button title="My Top Podcasts" variant="btn_secondary" />
        </div>
      </div>
    </section>
  );
};

export default About;
