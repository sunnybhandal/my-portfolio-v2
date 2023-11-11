import Image from "next/image";
import { BIO, LINKS } from "./constants";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-container px-6 lg:px-32 pt-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        <div className="flex flex-col gap-0 items-center">
          <Image
            src="headshot.svg"
            alt="headshot"
            width={250}
            height={100}
            className="w-40 lg:w-60"
          />
          <h4 className="bold-22 mt-2">Sunny Bhandal</h4>
          <p className="mt-2">UX Designer & Software Developer</p>
          <div className="flex gap-8 mt-3">
            {LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button
                  type="button"
                  title={link.label}
                  variant={link.variant}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">{BIO.p1}</p>
          <p className="">{BIO.p2}</p>
          <p className="">{BIO.p3}</p>
          <p className="medium-16">{BIO.quote}</p>
        </div>
      </div>
    </div>
  );
}
