export interface SponsorLogoProps {
  imageSrc: string;
  caption: string;
}

export interface Logo {
  id: number;
  imageSrc: string;
  caption: string;
}

// ImageCard.tsx
import React from "react";

const ImageCard: React.FC<SponsorLogoProps> = ({ imageSrc, caption }) => (
  <div className="p-4 flex flex-col items-center">
    <img
      src={imageSrc}
      alt={caption}
      className="rounded-lg shadow-md w-1/2 h-auto"
    />
    <p className="mt-2 text-center text-sm">{caption}</p>
  </div>
);

const Logos: React.FC = () => {
  const goldLogos: Logo[] = [
    {
      id: 1,
      imageSrc: "./src/assets/Clearpath:Rockwell.jpeg",
      caption: "Clearpath Robotics",
    },
  ];

  const silverLogos: Logo[] = [
    {
      id: 1,
      imageSrc: "./src/assets/qqlf.jpeg",
      caption: "QQLF Consultants",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-700 p-8">
      <section>
        <h1 className="text-center">Gold Sponsors</h1>
        <div className="flex justify-around items-center">
          {goldLogos.map(({ id, imageSrc, caption }) => (
            <ImageCard key={id} imageSrc={imageSrc} caption={caption} />
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-center">Silver Sponsors</h1>
        <div className="flex justify-around items-center">
          {silverLogos.map(({ id, imageSrc, caption }) => (
            <ImageCard key={id} imageSrc={imageSrc} caption={caption} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Logos;
