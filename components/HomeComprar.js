import React, {useState} from "react";

const Comprar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        if (typeof window !== "undefined" && typeof fbq === "function") {
            fbq("trackCustom", "irAPagar");
        }
        setShowModal(true);
    };

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
                    Disfruta del acceso ilimitado a todas nuestras historias interactivas con una sola compra. Sin
                    suscripciones, sin cargos ocultos.
                </p>

                {/* Tarjeta de precio con descuento */}
                <div
                    className="bg-yellow-50 border border-yellow-200 rounded-2xl p-10 mb-12 shadow-xl max-w-3xl mx-auto text-center">
                    <p className="text-3xl md:text-4xl font-bold text-black-100 mb-4">
                        Oferta especial: <span className="text-yellow-600">"Promueve el amor por la lectura"</span>
                    </p>

                    <p className="text-gray-700 text-lg">Precio original:</p>
                    <p className="text-3xl text-gray-500 line-through mb-2">$1,480 MXN</p>

                    <p className="text-green-600 text-lg font-semibold">
                        ¡Aprovecha un <span className="text-green-700 font-bold">47% de descuento!</span>
                    </p>

                    <p className="text-5xl font-bold text-yellow-600 mt-2 mb-4">$789 MXN</p>
                    <p className="text-gray-600 text-base">Pago único, sin suscripciones. Acceso total por 1 año.</p>

                    <div className="mt-8">
                        <button
                            onClick={handleClick}
                            className="w-full sm:w-auto px-12 py-4 text-xl sm:text-2xl font-semibold rounded-full bg-yellow-500 hover:bg-yellow-700 text-black-100 hover:text-white-100 transition-all"
                        >
                            Ir a registrarme y comprar
                        </button>
                    </div>
                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-azulpathbooks mb-6">
                    Registrarte y leer es muy <span className="text-yellow-500">fácil</span>
                </h2>
                {/* Pasos */}
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div
                        className="bg-gray-50 shadow-md rounded-xl p-6 border border-yellow-100 hover:shadow-xl transition">
                        <div className="text-2xl font-semibold mb-4 text-yellow-500">1. Crea tu usuario</div>
                        <p className="text-gray-600">Solo necesitas elegir un nombre de usuario único. Este te permitirá
                            volver a ingresar fácilmente y guardar tu progreso. ¡Relájate, no pedimos nada más!</p>
                    </div>

                    <div
                        className="bg-gray-50 shadow-md rounded-xl p-6 border border-yellow-100 hover:shadow-xl transition">
                        <div className="text-2xl font-semibold mb-4 text-yellow-500">2. Elige tu contraseña</div>
                        <p className="text-gray-600">Por seguridad, solo te pedimos una contraseña. No compartimos tus
                            datos, y no recibirás correos molestos. Tu cuenta es solo tuya.</p>
                    </div>

                    <div
                        className="bg-gray-50 shadow-md rounded-xl p-6 border border-yellow-100 hover:shadow-xl transition">
                        <div className="text-2xl font-semibold mb-4 text-yellow-500">3. Realiza un único pago</div>
                        <p className="text-gray-600">Puedes pagar con <strong>PayPal</strong> o tarjeta. Es un pago
                            único, sin suscripción. Tendrás acceso a todo el contenido actual y nuevo por un año
                            completo.</p>
                    </div>
                </div>
            </div>

            {/* Modal con iframe */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2 sm:px-4">
                    <div
                        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative overflow-hidden animate-fade-in-up h-[95vh] flex flex-col">
                        <div className="flex justify-end p-2 sm:p-4 z-20 bg-white-500">
                            <button
                                onClick={() => setShowModal(false)}
                                aria-label="Cerrar"
                                className="text-3xl text-gray-600 hover:text-black transition-all focus:outline-none focus:ring"
                            >
                                &times;
                            </button>
                        </div>
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
