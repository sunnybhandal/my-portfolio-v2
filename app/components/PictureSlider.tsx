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
  {
    id: 3,
    file: "/eeor.png",
  },
  {
    id: 4,
    file: "/sulphur.png",
  },
];

const PictureSlider = () => {
  const [pictureState, setPictureState] = useState(1);

  return (
    <div className="flex flex-col items-center gap-2">
      {pictureState === 1 && (
        <>
          <Image
            src={HikingImages[0].file}
            alt=""
            width={500}
            height={280}
            className="rounded-lg max-w-[365px] md:max-w-[600px] lg:max-w-[800px]"
          />
          <div className="flex gap-2">
            <span
              className="bg-[#89CFF0] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(1)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(2)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(3)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(4)}
            ></span>
          </div>
        </>
      )}
      {pictureState === 2 && (
        <>
          <Image
            src={HikingImages[1].file}
            alt=""
            width={500}
            height={280}
            className="rounded-lg max-w-[365px] md:max-w-[600px] lg:max-w-[800px]"
          />
          <div className="flex gap-2">
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(1)}
            ></span>
            <span
              className="bg-[#89CFF0] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(2)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(3)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(4)}
            ></span>
          </div>
        </>
      )}
      {pictureState === 3 && (
        <>
          <Image
            src={HikingImages[2].file}
            alt=""
            width={500}
            height={280}
            className="rounded-lg max-w-[365px] md:max-w-[600px] lg:max-w-[800px]"
          />
          <div className="flex gap-2">
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(1)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(2)}
            ></span>
            <span
              className="bg-[#89CFF0] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(3)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(4)}
            ></span>
          </div>
        </>
      )}
      {pictureState === 4 && (
        <>
          <Image
            src={HikingImages[3].file}
            alt=""
            width={500}
            height={280}
            className="rounded-lg max-w-[365px] md:max-w-[600px] lg:max-w-[800px]"
          />
          <div className="flex gap-2">
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(1)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(2)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(3)}
            ></span>
            <span
              className="bg-[#89CFF0] p-4 rounded-lg cursor-pointer"
              onClick={() => setPictureState(4)}
            ></span>
          </div>
        </>
      )}
    </div>
  );
};

export default PictureSlider;
