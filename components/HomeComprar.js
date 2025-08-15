import React, { useState } from "react";

const PlanesPrecios = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="bg-white-100 py-20 px-6 md:px-12 lg:px-24"
      id="planes"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-azulpathbooks mb-6">
          Conoce nuestras ofertas actuales
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Consulta todos los planes y promociones directamente en nuestra página.
        </p>

        {/* Botón principal */}
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary bg-yellow-500 hover:bg-yellow-700 text-black-100  px-10 py-3 rounded-full transition-all border-yellow-700 border-4 shadow-sm shadow-black-500"
        >
          Ver Ofertas
        </button>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3 h-[80vh] flex flex-col relative">

              {/* Botón de cerrar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
              >
                ✕
              </button>

              {/* Contenido del iframe */}
              <iframe
                src="https://pathbooks.app/plans"
                title="Planes Pathbooks"
                className="w-full h-full rounded-b-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanesPrecios;
