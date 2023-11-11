"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NAV_LINKS } from "../constants";
import Link from "next/link";

const Navbar = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false);
  console.log(openMenuModal);

  return (
    <div className="padding-container py-2 border-b-2 border-[#116D99]">
      <div className="flex justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          width={35}
          height={30}
          onClick={() => setOpenMenuModal(false)}
          className=""
        />

        <div className="hidden lg:flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-18 cursor-pointer border-b-2 border-[#efefef] hover:border-b-2  hover:border-[#89CFF0]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center lg:hidden">
          <Image
            src="/hamburger.svg"
            alt=""
            width={35}
            height={30}
            className="cursor-pointer z-20"
            onClick={() => setOpenMenuModal(true)}
          />
        </div>

        {/* Mobile Menu */}
        {openMenuModal && (
          <div className="absolute z-20 bg-[#efefef] top-0 left-0 border-2 border-red-500 flex flex-row justify-between w-full h-full">
            <div className="pl-6 pt-4">
              {NAV_LINKS.map((link) => (
                <div className="flex gap-8">
                  <Link
                    href={link.href}
                    key={link.key}
                    className="medium-18 mb-2 cursor-pointer border-b-2 border-[#efefef] hover:border-b-2 hover:border-[#89CFF0]"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="pr-6 pt-4">
              <Image
                src="/closeIcon.svg"
                alt=""
                width={35}
                height={30}
                className="cursor-pointer z-20"
                onClick={() => setOpenMenuModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
