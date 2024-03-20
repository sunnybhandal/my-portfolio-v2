"use client";
import Image from "next/image";
import React, { useState } from "react";
import PictureSlider from "../components/PictureSlider";
import Button from "../components/Button";
import { ABOUT, MODALS } from "../constants";
import Modal from "../components/Modal";

const About = () => {
  const [hikingModalOpen, setHikingModalOpen] = useState(false);
  const [healthModalOpen, setHealthModalOpen] = useState(false);
  const [moviesModalOpen, setMoviesModalOpen] = useState(false);
  const [showsModalOpen, setShowsModalOpen] = useState(false);

  return (
    <section className="max-container padding-container pt-16 lg:pt-20 mb-10">
      <div className="flex flex-col items-center">
        <h2 className="bold-32">About</h2>
        <div className="pt-6">
          <div className="bg-[#666464] w-[280px] md:w-[420px] lg:w-[500px] h-[70px] md:h-[90px] rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="flex gap-10 md:gap-16 lg:gap-24">
              <Image
                src="/icon_mountain.svg"
                alt="weight"
                width={60}
                height={30}
                className="w-12 md:w-16"
              />
              <Image
                src="/icon_weight.svg"
                alt="weight"
                width={70}
                height={30}
                className="w-14 md:w-20"
              />
              <Image
                src="/icon_camera.svg"
                alt="weight"
                width={50}
                height={30}
                className="w-10 md:w-12"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hiking */}
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-6 lg:gap-8">
          <PictureSlider />
          <div className="flex flex-col">
            <h4 className="semiBold-24">Hiking</h4>
            <p className="mt-2">{ABOUT.hiking.first}</p>
            <p className="mt-2">{ABOUT.hiking.second}</p>
            <div className="flex mt-4">
              <Button
                title="My Top Hikes"
                variant="btn_primary"
                onClick={() => setHikingModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="My Top Hikes"
        content={MODALS.hiking}
        isOpen={hikingModalOpen}
        onClose={() => setHikingModalOpen(false)}
        href={true}
      />
      {/* Health & Fitness */}
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-6 lg:gap-8">
          <Image
            src="/gym.svg"
            alt="working out"
            width={500}
            height={280}
            className="rounded-lg border-2 border-[#89CFF0] w-[365px] md:w-[600px] lg:max-w-[500px] xl:max-w-[600px]"
          />
          <div className="flex flex-col">
            <h4 className="semiBold-24">Health & Wellness</h4>
            <p className="mt-2">{ABOUT.healthWellness.first}</p>
            <p className="mt-2">{ABOUT.healthWellness.second}</p>
            <p className="mt-2">{ABOUT.healthWellness.third}</p>
            <div className="flex mt-4 gap-4">
              <Button
                title="Interesting People"
                variant="btn_primary"
                onClick={() => setHealthModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Interesting People"
        content={MODALS.health_resources}
        isOpen={healthModalOpen}
        onClose={() => setHealthModalOpen(false)}
        href={true}
      />
      {/* Movies & TV Shows */}
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-6 lg:gap-8">
          <Image
            src="/interstellar.svg"
            alt="working out"
            width={500}
            height={280}
            className="rounded-lg border-2 border-[#89CFF0] w-[365px] md:w-[600px] lg:max-w-[500px] xl:max-w-[600px]"
          />
          <div className="flex flex-col">
            <h4 className="items-center semiBold-24">Movies & TV Shows</h4>
            <p className="mt-2">{ABOUT.moviesShows.first}</p>
            <p className="mt-2">{ABOUT.moviesShows.second}</p>
            <p className="mt-2">{ABOUT.moviesShows.third}</p>
            <div className="flex mt-4 gap-4">
              <Button
                title="My Top Movies"
                variant="btn_primary"
                onClick={() => setMoviesModalOpen(true)}
              />
              <Button
                title="My Top TV Shows"
                variant="btn_secondary"
                onClick={() => setShowsModalOpen(true)}
              />
            </div>
          </div>
        </div>

        <Modal
          title="My Top Movies"
          content={MODALS.movies}
          isOpen={moviesModalOpen}
          onClose={() => setMoviesModalOpen(false)}
        />
        <Modal
          title="My Top TV Shows"
          content={MODALS.tv_shows}
          isOpen={showsModalOpen}
          onClose={() => setShowsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default About;
