import React from "react";

type ImageCardProps = {
  imageSrc: string;
  caption: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, caption }) => (
  <div className="w-1/3 p-4">
    <img
      src={imageSrc}
      alt={caption}
      className="w-full h-auto rounded-lg shadow-md"
    />
    <p className="mt-2 text-center text-sm text-gray-300">{caption}</p>
  </div>
);

const RobotSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-8">
      <div className="flex justify-around items-center">
        <ImageCard imageSrc="./src/assets/IMG_1683.JPG" caption="Hermes I" />
        {/* Placeholder for 3D Model or another image */}
        <ImageCard imageSrc="./src/assets/IMG_3337.JPG" caption="Team Photo" />
      </div>
      <div className="text-white text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
          HERMES I
        </h2>
        <p className="text-center my-6">
          Hermes I (H1) was our first competition machine built for the NaBC
          2024 Navigation Challenge. H1 was able to autonomously navigate an
          optimized route using PRM path-planning and adaptive localization
          techniques without GPS
        </p>
      </div>
    </div>
  );
};

export default RobotSection;
