import Image from "next/image";
import React, { useState } from "react";

type ImageCarouselProps = {
  slides: any;
};

const ImageCarousel = ({ slides }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: slides[currentIndex].file,
  };
  return (
    <div className="height-[100%] relative ">
      <div
        className="absolute top-[50%] left-[32px] text-lg cursor-pointer text-white"
        onClick={goToPrevious}
      >
        left
      </div>
      <div
        className="absolute top-[50%] right-[32px] text-lg cursor-pointer text-white"
        onClick={goToNext}
      >
        right
      </div>
      <Image src={slides[currentIndex].file} width={500} alt="" height={280} />
      <div className="flex gap-2 justify-center">
        {slides.map((slide: any, slideIndex: any) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            {" "}
            dot
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
