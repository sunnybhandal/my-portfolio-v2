import Image from "next/image";
import React, { useState } from "react";
import { HIKING_PICS } from "../constants";

const PictureSlider = () => {
  const [pictureState, setPictureState] = useState(1);

  return (
    <div className="flex flex-col items-center gap-2">
      {pictureState === 1 && (
        <>
          <div className="relative">
            <Image
              src={HIKING_PICS[0].file}
              alt=""
              width={500}
              height={280}
              className="rounded-lg border-2 border-[#89CFF0] w-[365px] md:w-[600px] lg:max-w-[500px] xl:max-w-[600px]"
            />
            <h4 className="absolute top-2 left-4 medium-16 md:medium-18">
              {HIKING_PICS[0].label}
            </h4>
          </div>

          <div className="flex gap-3 lg:gap-4">
            <span
              className="bg-[#89CFF0] p-2 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(1)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-2 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(2)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-2 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(3)}
            ></span>
          </div>
        </>
      )}
      {pictureState === 2 && (
        <>
          <div className="relative">
            <Image
              src={HIKING_PICS[1].file}
              alt=""
              width={500}
              height={280}
              className="rounded-lg border-2 border-[#89CFF0] w-[365px] md:w-[600px] lg:max-w-[500px] xl:max-w-[600px]"
            />
            <h4 className="absolute top-2 left-4 medium-16 md:medium-18">
              {HIKING_PICS[1].label}
            </h4>
          </div>
          <div className="flex gap-3 lg:gap-4">
            <span
              className="bg-[#A8A8A8] p-3 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(1)}
            ></span>
            <span
              className="bg-[#89CFF0] p-3 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(2)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-3 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(3)}
            ></span>
          </div>
        </>
      )}
      {pictureState === 3 && (
        <>
          <div className="relative">
            <Image
              src={HIKING_PICS[2].file}
              alt=""
              width={500}
              height={280}
              className="rounded-lg border-2 border-[#89CFF0] w-[365px] md:w-[600px] lg:max-w-[500px] xl:max-w-[600px]"
            />
            <h4 className="absolute top-2 left-4 medium-16 md:medium-18">
              {HIKING_PICS[2].label}
            </h4>
          </div>
          <div className="flex gap-3 lg:gap-4">
            <span
              className="bg-[#A8A8A8] p-3 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(1)}
            ></span>
            <span
              className="bg-[#A8A8A8] p-3 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(2)}
            ></span>
            <span
              className="bg-[#89CFF0] p-3 rounded-xl md:p-4 md:rounded-2xl cursor-pointer"
              onClick={() => setPictureState(3)}
            ></span>
          </div>
        </>
      )}
    </div>
  );
};

export default PictureSlider;
