import Image from "next/image";
import { BIO } from "./constants";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-container padding-container pt-20 flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
      <div className="flex flex-col gap-0 items-center">
        <Image
          src="headshot.svg"
          alt="headshot"
          width={250}
          height={100}
          className="w-48 lg:w-60"
        />
        <h4 className="bold-22 mt-2">Sunny Bhandal</h4>
        <p className="mt-2 whitespace-nowrap">
          UX Designer & Software Developer
        </p>
        <div className="flex gap-8 mt-3">
          <Link
            href="https://www.linkedin.com/in/sunnybhandal/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button type="button" title="LinkedIn" variant="btn_primary" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="">{BIO.p1}</p>
        <p className="">{BIO.p2}</p>
        <p className="">{BIO.p3}</p>
        <p className="medium-16 mb-6">{BIO.quote}</p>
      </div>
    </div>
  );
}
