import Image from "next/image";
import { BIO } from "./constants";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="border-2 border-red-500">
      <div className="max-container px-6 lg:px-32 py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          <div className="flex flex-col gap-0 items-center">
            <Image
              src="headshot.svg"
              alt="headshot"
              width={250}
              height={100}
              className="w-40 lg:w-60"
            />
            <h4 className="bold-18 mt-2">Sunny Bhandal</h4>
            <p>UX Designer & Software Developer</p>
            <div className="flex gap-8 mt-2">
              <Button type="button" title="LinkedIn" variant="btn_primary" />
              <Button type="button" title="Figma" variant="btn_secondary" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="">{BIO.p1}</p>
            <p className="">{BIO.p2}</p>
            <p className="medium-16">{BIO.quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
