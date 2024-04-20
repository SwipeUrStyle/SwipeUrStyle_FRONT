import React from "react";
import { RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-start p-8 xl:p-16 pr-4">
        <div className="flex flex-col gap-8 max-w-[600px]">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] text-gray-800">
            Swipe Ur <span className="text-primary">Style</span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Tu estilo, tu armario, tu elección. Explora infinitas combinaciones, crea looks únicos y muestra tu estilo con confianza. Con Swipe Your Style, tu armario virtual siempre te inspira para brillar en cada ocasión.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-start relative -ml-20">
        <div className="max-w-[1200px]"> {/* Ajusté el ancho máximo */}
          {/* Content image */}
          <div>
            <img
              src="hero.png"
              className="w-full h-full object-cover xl:-mt-15"
              style={{ marginLeft: '-25%', maxWidth: '200%' }}
            />
          </div>
          {/* Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2 w-[580px] h-[580px] md:w-[880px] md:h-[780px] bg-white border-[10px] border-primary rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;