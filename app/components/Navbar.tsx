"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import Link from "next/link";

const Navbar = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [direction, setDirection] = useState("up");
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setOpenMenuModal(!openMenuModal);
  };
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
          ? `transition-all transform border-b-2 border-[#89CFF0] shadow-md`
          : `border-none`
      }`}
    >
      <div className="flex justify-between lg:justify-center lg:space-x-[55%] xl:space-x-[65%] 2xl:space-x-[900px]">
        <Link
          href="/"
          onClick={() => {
            setOpenMenuModal(false);
            setIsOpen(false);
          }}
        >
          <Image src="/logo.svg" alt="logo" width={33} height={30} />
        </Link>

        <div className="hidden lg:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="medium-18 cursor-pointer hover:text-[#89CFF0]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={handleMenuClick}
          className={`flex flex-col justify-center items-center lg:hidden ${
            isOpen ? "gap-0" : "gap-1"
          }`}
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-100 ease-out 
                    h-0.5 w-7 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-7 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {openMenuModal && (
          <div className="absolute pt-6 z-0 bg-[#efefef] border-b-2 border-[#89CFF0] top-[52px] left-0 w-full ">
            <ul className="padding-navbar flex flex-col items-end">
              {NAV_LINKS.map((link) => (
                <li className="flex">
                  <Link
                    href={link.href}
                    key={link.key}
                    onClick={() => {
                      setOpenMenuModal(false);
                      setIsOpen(false);
                    }}
                    className="medium-24 mb-4 cursor-pointer hover:text-[#89CFF0]"
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
