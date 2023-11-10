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
        />

        <div className="hidden lg:flex gap-6 items-center">
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

        <div className="flex  items-center lg:hidden">
          <Image
            src="/hamburger.svg"
            alt=""
            width={35}
            height={30}
            className="cursor-pointer z-20"
            onClick={() => setOpenMenuModal(true)}
          />
        </div>

        {openMenuModal && (
          <div className="relative flex flex-col justify-between w-full">
            <div>
              {NAV_LINKS.map((link) => (
                <div className="flex gap-8">
                  <Link
                    href={link.href}
                    key={link.key}
                    className="medium-18 mb-2 cursor-pointer hover:border-b-2 border-[#89CFF0]"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <Image
              src="/closeIcon.svg"
              alt=""
              width={35}
              height={30}
              className="cursor-pointer z-20 right-0"
              onClick={() => setOpenMenuModal(false)}
            />
          </div>
        )}
      </div>

      {/* EXTRAS */}
      <div className="absolute w-screen overflow-hidden">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />
        <Image
          src="/hamburger.svg"
          alt=""
          width={35}
          height={30}
          className="cursor-pointer z-10 bg-white "
        />

        <div className="bg-white relative overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen">
          <div className="p-4">
            {NAV_LINKS.map((link) => (
              <div className="flex gap-8">
                <Link
                  href={link.href}
                  key={link.key}
                  className="medium-18 mb-2 cursor-pointer hover:border-b-2 border-[#89CFF0]"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
