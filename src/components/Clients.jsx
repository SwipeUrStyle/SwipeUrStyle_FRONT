import React from "react";

const Clients = () => {
  return (
    <div id="clients" className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Próximamente encuentranos en: 
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src="App_Store.png" className="w-60" />
        <img src="google_Play.png" className="w-60" />
        <img src="galaxy_Store.png" className="w-60" />
      </div>
    </div>
  );
};

export default Clients;
