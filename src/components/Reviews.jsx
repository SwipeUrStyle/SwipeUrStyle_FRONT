import React from "react";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  // Array de nombres aleatorios
  const names = [
    "Cristian Naranjo",
    "Juliana Briceño",
    "Natalia Rojas",
    "Cristian Alvarez"
  ];

  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Nuestro Equipo de Trabajo
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-allign text-gray-500">
          En <span className="text-primary"><strong>DevOpsElite</strong></span>, somos un equipo apasionado y diverso de desarrolladores, diseñadores y entusiastas de la moda unidos por una visión común: simplificar y mejorar tu experiencia diaria de vestirte. Con una combinación única de habilidades técnicas y un profundo conocimiento de las tendencias de la moda, hemos unido fuerzas para crear una aplicación revolucionaria que transformará la forma en que te relacionas con tu armario.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-10 md:gap-20">
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt="Persona 1"
              className="w-40 h-40 md:w-30 md:h-30 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
            />
            <h3 className="text-center text-[18px] font-bold mt-6">
              {names[0]}
            </h3>
          </div>
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcduSH5jg-CaWwWXmtkFrVqBIGqwsT4VE3XfUO4K4yHeB8jPaVUo5GVapWJ4ZsTNHCx0&usqp=CAU"
              alt="Persona 2"
              className="w-40 h-40 md:w-30 md:h-30 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
            />
            <h3 className="text-center text-[18px] font-bold mt-6">
              {names[1]}
            </h3>
          </div>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt="Persona 3"
              className="w-40 h-40 md:w-30 md:h-30 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
            />
            <h3 className="text-center text-[18px] font-bold mt-6">
              {names[2]}
            </h3>
          </div>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
              alt="Persona 4"
              className="w-40 h-40 md:w-30 md:h-30 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
            />
            <h3 className="text-center text-[18px] font-bold mt-6">
              {names[3]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
