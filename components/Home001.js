import React, {useMemo} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Home001 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="relative min-h-[800px] mt-16 md:mt-0 md:h-[600px] max-h-[600px] w-full overflow-hidden"
            id="home"
            style={{
                backgroundImage: "url('/assets/bgheader.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="container mx-auto h-full px-4">
                <div className="flex flex-col md:flex-row h-full items-center justify-between gap-8">
                    {/* Imagen - Izquierda en desktop, arriba en mobile */}
                    <ScrollAnimationWrapper className="order-1 md:order-1 w-full md:w-1/2">
                        <motion.div
                            className="flex justify-center md:justify-start"
                            variants={scrollAnimation}
                        >
                            <div className="relative w-[280px] h-[280px] sm:w-[570px] sm:h-[500px]">
                                <Image
                                    src="/assets/home001.png"
                                    alt="Maestra Pathbooks"
                                    width={570}    // Ancho en píxeles
                                    height={600}   // Alto en píxeles
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>

                    {/* Texto - Derecha en desktop, abajo en mobile */}
                    <ScrollAnimationWrapper className="order-2 md:order-2 w-full md:w-1/2">
                        <motion.div
                            className="text-center md:text-left"
                            variants={scrollAnimation}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-500">
                               Fomenta el amor por la<span className="text-yellow-500"> lectura</span>
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-white-100">
                                Más de <span className="text-yellow-500"> 900 historias</span> especializadas en el aprendizaje lector y por primera vez abierto al público.
                            </p>
                            <p className="mt-3 text-xl md:text-2xl text-white-100">
                                Por solo <span className="text-yellow-500">$ 800.00 MXN </span> ten acceso por todo un año.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    className="btn btn-outline border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-yellow-700 px-6 py-3 rounded-lg transition-all">
                                    Saber más
                                </button>
                                 <a
                                  href="#comprar"
                                  className="btn btn-primary bg-yellow-500 hover:bg-yellow-700 text-black-100 hover:text-white-100 px-6 py-3 rounded-lg transition-all">
                                  Comprar ahora
                                </a>
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default Home001;