"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import Link from "next/link";

const Navbar = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [direction, setDirection] = useState("up");
  let oldScrollY = 0;

  const controlDirection = () => {
    if (window.scrollY !== 0) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <div
      className={`padding-navbar bg-main fixed py-2 w-screen z-20 ${
        direction == "down"
          ? `transition-all transform border-b-2 border-[#116D99]`
          : `border-none`
      }`}
    >
      <div className="flex justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={35} height={30} />
        </Link>

        <div className="hidden lg:flex gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="medium-18 cursor-pointer border-b-2 border-transparent hover:border-b-2  hover:border-[#89CFF0]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center lg:hidden">
          {openMenuModal ? (
            <Image
              src="/closeIcon.svg"
              alt=""
              width={33}
              height={30}
              className="cursor-pointer z-20"
              onClick={() => setOpenMenuModal(false)}
            />
          ) : (
            <Image
              src="/hamburger.svg"
              alt=""
              width={35}
              height={30}
              className="cursor-pointer z-20"
              onClick={() => setOpenMenuModal(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {openMenuModal && (
          <div className="absolute pt-4 z-0 bg-[#efefef] top-[52px] left-0 flex flex-row justify-between w-full ">
            <ul className="padding-navbar">
              {NAV_LINKS.map((link) => (
                <li className="flex gap-8">
                  <Link
                    href={link.href}
                    key={link.key}
                    onClick={() => setOpenMenuModal(false)}
                    className="medium-20 mb-2 cursor-pointer hover:text-[#89CFF0]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
