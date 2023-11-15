import Image from "next/image";
import Link from "next/link";
import React from "react";

type ModalProps = {
  isOpen: any;
  onClose: any;
  title: string;
  content: any;
};

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
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
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-main px-6 py-4 w-[300px] rounded-lg shadow-md z-10 border-2 border-[#89CFF0]">
        <div className="flex justify-between mb-4">
          <h4 className="semiBold-22">{title}</h4>
          <Image
            src="closeIcon.svg"
            alt="close icon"
            width={20}
            height={20}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        {content?.map((item: any, index: any) => (
          <div className="flex gap-2 medium-18">
            <span>{index + 1}.</span>
            <Link
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-[#89CFF0]"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
