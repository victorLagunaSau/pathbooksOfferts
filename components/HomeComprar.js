import React, { useState } from "react";

const Comprar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="comprar"
      className="bg-white py-20 px-6 md:px-12 lg:px-24 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-azulpathbooks mb-6">
          Pathbooks es una <span className="text-yellow-500">compra segura</span>
        </h2>
        <p className="text-gray-700 text-2xl mb-12">
          Disfruta del acceso ilimitado a todas nuestras historias interactivas con una sola compra. Sin suscripciones, sin cargos ocultos.
        </p>
        {/* Botón */}
        <div className="mt-6 mb-8">
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black-500 font-bold text-xl px-10 py-4 rounded-lg shadow-lg transition duration-300"
          >
            Ir a registrarme y comprar
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Paso 1 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 border border-yellow-100 hover:shadow-xl transition">
            <div className="text-2xl font-semibold mb-4 text-yellow-500">1. Crea tu usuario</div>
            <p className="text-gray-600">
              Solo necesitas elegir un nombre de usuario único. Este te permitirá volver a ingresar fácilmente y guardar tu progreso. ¡Relájate, no pedimos nada más!
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 border border-yellow-100 hover:shadow-xl transition">
            <div className="text-2xl font-semibold mb-4 text-yellow-500">2. Elige tu contraseña</div>
            <p className="text-gray-600">
              Por seguridad, solo te pedimos una contraseña. No compartimos tus datos, y no recibirás correos molestos. Tu cuenta es solo tuya.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 border border-yellow-100 hover:shadow-xl transition">
            <div className="text-2xl font-semibold mb-4 text-yellow-500">3. Realiza un único pago</div>
            <p className="text-gray-600">
              Puedes pagar con <strong>PayPal</strong> o tarjeta. Es un pago único, sin suscripción. Tendrás acceso a todo el contenido actual y nuevo por un año completo.
            </p>
          </div>
        </div>


      </div>

      {/* Modal con iframe */}
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2 sm:px-4">
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative overflow-hidden animate-fade-in-up h-[95vh] flex flex-col">

      {/* Botón cerrar */}
      <div className="flex justify-end p-2 sm:p-4 z-20 bg-white-500">
        <button
          onClick={() => setShowModal(false)}
          aria-label="Cerrar"
          className="text-3xl text-gray-600 hover:text-black transition-all focus:outline-none focus:ring"
        >
          &times;
        </button>
      </div>

      {/* Iframe */}
      <div className="flex-1 w-full">
        <iframe
          src="https://www.pathbooks.app/pay/pNHZavvBwzwDyjeNOUij"
          title="Registro y compra"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Comprar;
