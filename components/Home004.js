import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Image from "next/image";

const Home004 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-white w-full py-20" id="regalo-lector">
            <div className="container mx-auto px-6 md:px-12">
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        {/* Imagen central */}
                        <div className="w-full max-w-md mb-10">
                            <Image
                                src="/assets/home004.png"
                                alt="Lectura interactiva en tablet"
                                width={570}
                                height={500}
                                className="object-contain mx-auto"
                                priority
                            />
                        </div>

                        {/* Texto principal */}
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                            El mejor regalo para estimular la lectura con propósito
                        </h2>

                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-6">
                            Con el catálogo más completo de lecturas interactivas, los estudiantes se sumergen en historias que los motivan a seguir leyendo, tomar decisiones y desarrollar pensamiento crítico de forma natural.
                        </p>

                        <p className="text-md md:text-lg text-gray-600 max-w-2xl mb-8">
                            Nuestra metodología innovadora ha ayudado a cientos de jóvenes a descubrir el placer por la lectura, mejorando su comprensión y aumentando su tiempo de lectura de manera significativa.
                        </p>

                        {/* Botón */}
                        <div className="flex justify-center">
                            <button className="btn bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:text-white px-6 py-3 rounded-lg transition-all">
                                Comprar ahora
                            </button>
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Home004;
