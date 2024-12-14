import Image from "next/image";
import { BIO } from "./constants";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-container padding-container pt-20 lg:pt-0 flex flex-col lg:flex-row gap-8 lg:gap-4 lg:h-screen items-center justify-center">
      <div className="flex flex-col items-center w-[450px]">
        <Image
          src="headshot.svg"
          alt="headshot"
          width={250}
          height={100}
          className="w-48 md:w-56 lg:w-64"
        />
        <h4 className="semiBold-24 mt-2 whitespace-nowrap">Sunny Bhandal</h4>
        <p className="regular-18 whitespace-nowrap mt-2">
          Solutions Engineer & Product Designer
        </p>
        <Link
          href="https://www.linkedin.com/in/sunnybhandal/"
          rel="noopener noreferrer"
          target="_blank"
          className="flex gap-8 mt-4"
        >
          <Button title="LinkedIn" variant="btn_primary" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 lg:w-[600px] pb-2 lg:pb-0">
        <p>{BIO.p1}</p>
        <p>{BIO.p2}</p>
        <p className="medium-16">{BIO.quote}</p>
      </div>
    </div>
  );
}
