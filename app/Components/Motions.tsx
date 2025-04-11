"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Motions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <div
        className="relative flex items-center justify-center rounded-full shadow-2xl shadow-blue-500 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        data-aos="zoom-in"
      >
        <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] rounded-full border-4 border-dashed border-black animate-spin-slow z-0" />
        <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden flex items-center justify-center group z-10">
          <Image
            src="/img.jpg"
            alt="Profile Image"
            width={250}
            height={250}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            priority
          />
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="relative w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] flex justify-center items-center rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()}
          >
            <IoClose
              className="absolute -top-6 -right-6 text-white bg-black/60 rounded-full p-1 text-4xl cursor-pointer z-50"
              onClick={closeModal}
            />
            <Image
              src="/img.jpg"
              alt="Profile"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
