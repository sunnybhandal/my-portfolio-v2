import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-container padding-container pt-20">
      <div className="flex flex-col items-center">
        <h2 className="bold-40 items-center">About Me</h2>
        <p>Description</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h4 className="semiBold-22">Hiking</h4>
          <p>
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
        <Image
          src="/hamburger.svg"
          alt=""
          width={100}
          height={30}
          className="w-[50%]"
        />
      </div>
    </div>
  );
};

export default About;
