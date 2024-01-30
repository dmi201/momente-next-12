import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="Instagram Image"
        width={500} // Specify the width
        height={300} // Specify the height
        className="w-full h-full"
        layout="responsive"
      />
      {/* Overlay */}
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <FaInstagram
          size={30}
          className="text-gray-300 hidden group-hover:block z-10"
        />
      </div>
    </div>
  );
};

export default InstagramImg;
