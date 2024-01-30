import React from "react";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  // Array of image paths
  const imagePaths = [
    "/ig-img-1.jpg",
    "/ig-img-5.jpg",
    "/ig-img-3.jpg",
    "/ig-img-2.jpg",
    "/ig-img-7.jpg",
    "/ig-img-8.jpg",
  ];

  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Instagramul meu</p>
      <p className="pb-4">@Momente</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        {imagePaths.map((imgPath, index) => (
          <InstagramImg key={index} socialImg={imgPath} />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
