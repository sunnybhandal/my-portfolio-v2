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
        <h2 className="bold-36">About</h2>
        <p className="mt-2 text-center md:px-14 lg:px-28">{ABOUT.intro}</p>
      </div>
      {/* Hiking */}
      <div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 gap-6">
          <div className="flex flex-col">
            <h4 className="semiBold-24">Hiking</h4>
            <p className="mt-2">{ABOUT.hiking.first}</p>
            <p className="mt-2">{ABOUT.hiking.second}</p>
            <p className="mt-2">{ABOUT.hiking.third}</p>
            <div className="flex mt-4">
              <Button
                title="My Top Hikes"
                variant="btn_primary"
                onClick={() => setHikingModalOpen(true)}
              />
            </div>
          </div>
          <PictureSlider />
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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 gap-6">
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
          <Image
            src="/workingOut.jpg"
            alt="working out"
            width={500}
            height={280}
            className="rounded-lg border-2 border-[#89CFF0]"
          />
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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 gap-6">
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
          <div className="grid grid-cols-2 gap-4 lg:w-[2000px]">
            <Image
              src="/interstellar.jpeg"
              alt="interstellar"
              width={150}
              height={150}
              className="rounded-lg border-2 border-[#89CFF0] "
            />
            <Image
              src="/inception.jpeg"
              alt="inception"
              width={150}
              height={150}
              className="rounded-lg border-2 border-[#89CFF0] "
            />
            <Image
              src="/breakingBad.jpg"
              alt="interstellar"
              width={150}
              height={150}
              className="rounded-lg border-2 border-[#89CFF0]"
            />
            <Image
              src="/darkKnightRises.jpg"
              alt="Dark Knight Rises"
              width={150}
              height={150}
              className="rounded-lg border-2 border-[#89CFF0] "
            />
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
