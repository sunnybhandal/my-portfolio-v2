"use client";
import Image from "next/image";
import React, { useState } from "react";

const HikingImages = [
  {
    id: 1,
    file: "/stPiran.png",
  },
  {
    id: 2,
    file: "/temple.png",
  },
];

const About = () => {
  const [pictureState, setPictureState] = useState(1);

  return (
    <div className="max-container padding-container pt-24">
      <div className="flex flex-col items-center">
        <h2 className="bold-40 items-center">About Me</h2>
        <p>Description</p>
      </div>

      {/* Hiking */}
      <div className="border-2 border-red-500 flex flex-col-reverse lg:flex-row items-center justify-between mt-10 gap-10">
        <div className="flex flex-col items-start lg:items-center">
          <h4 className="semiBold-24">Hiking</h4>
          <p className="mt-2">
            Proin auctor pellentesque dui morbi accumsan amet vitae nisi
            ultrices. Ullamcorper diam commodo commodo nec quam iaculis nunc
            est. Etiam rhoncus elementum est sem. Condimentum tempor at ac
            commodo urna blandit tortor. Blandit arcu urna tincidunt egestas
            dapibus ornare nunc elementum ut. Nunc sagittis habitasse at risus
            commodo nisl phasellus. Id hac id a metus penatibus id varius. Massa
            a sit suscipit in dolor. Ultricies risus a in ac. Lorem dignissim
            fames tincidunt nec ut aliquet consequat tortor habitasse. Orci quis
            viverra dolor fames egestas habitasse diam lobortis volutpat. Turpis
            arcu sed consequat eget ipsum.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* {pictureState==} */}
          <Image
            src="/stPiran.png"
            alt=""
            width={500}
            height={300}
            className="rounded-lg max-w-[800px]"
          />

          <div className="flex gap-2 mt-2">
            <button onClick={() => setPictureState(1)}>/</button>
            <button onClick={() => setPictureState(2)}>/</button>
            <button onClick={() => setPictureState(1)}>/</button>
            <button onClick={() => setPictureState(2)}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
