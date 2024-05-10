import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { persona1, persona2, persona3, persona4 } from "../assets";

const Reviews = () => {
  const names = [
    "Cristian Naranjo",
    "Juliana Briceño",
    "Natalia Rojas",
    "Cristian Alvarez"
  ];
  const personas = [persona1, persona2, persona3, persona4];
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto">
        <div className="p-8 flex flex-col gap-8 bg-gray-100">
          <h1 className="md:leading-[80px] py-2 md:text-6xl text-5xl font-extrabold 800 text-center" >
            Our Development Team
          </h1>
          <div className="flex justify-center gap-4">
            <span className="text-6xl text-primary">
              <RiDoubleQuotesL />
            </span>
            <p className="max-w-2xl text-allign text-lg lg:text-xl text-gray-500">
              En <span className="py-2 text-lg text-2xl text-gray-600 font-medium"><strong>At DevOpsElite</strong></span>, we are a passionate and diverse team of developers, designers, and fashion enthusiasts united by a common vision: to simplify and improve your daily getting dressed experience. With a unique combination of technical skills and a deep understanding of fashion trends, we have joined forces to create a revolutionary app that will transform the way you interact with your wardrobe.
            </p>
            <span className="text-6xl text-primary">
              <RiDoubleQuotesR />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-10 md:gap-20">
              {names.map((name, index) => (
                <div key={index} className="relative">
                  <img
                    src={personas[index]}
                    alt={`persona ${index + 1}`}
                    className="w-40 h-40 md:w-30 md:h-30 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
                  />
                  <h3 className="text-center text-lg lg:text-xl font-bold mt-6">
                    {name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
