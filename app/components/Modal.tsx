import Image from "next/image";
import Link from "next/link";
import React from "react";

type ModalProps = {
  isOpen: any;
  onClose: any;
  title: string;
  content: any;
  href?: boolean;
};

const Modal = ({ isOpen, onClose, title, content, href }: ModalProps) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "visible" : "hidden"}`}>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          isOpen ? "visible" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-main px-4 md:px-6 py-2 md:py-4 w-[355px] md:w-[500px] rounded-lg shadow-md z-10 border-4 border-[#89CFF0]">
        <div className="flex justify-between mb-4">
          <h4 className="semiBold-20 md:semiBold-22">{title}</h4>
          <Image
            src="closeIcon.svg"
            alt="close icon"
            width={25}
            height={20}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        {content?.map((item: any, index: any) => (
          <div className="flex gap-1 md:gap-2 medium-16 md:medium-18">
            <span>{index + 1}.</span>
            {href ? (
              <Link
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-[#89CFF0] pb-1"
              >
                {item.label}
              </Link>
            ) : (
              <p className="pb-1">{item}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
