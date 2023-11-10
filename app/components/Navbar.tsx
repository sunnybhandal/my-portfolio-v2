import Image from "next/image";
import React from "react";
import { NAV_LINKS } from "../contants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="padding-container py-2 border-b-2 border-[#116D99]">
      <div className="flex justify-between">
        <Image src="/logo.svg" alt="logo" width={35} height={30} />
        <div className="flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-18 cursor-pointer hover:border-b-2  border-[#89CFF0]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
