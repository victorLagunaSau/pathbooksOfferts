import React, {useMemo} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Home002 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full overflow-hidden py-8" id="metodologia">
            <div className="container mx-auto px-4">
                {/* Título centrado */}
                <ScrollAnimationWrapper>
                    <motion.div className=" mx-auto text-center" variants={scrollAnimation}>
                        <h1 className="text-4xl md:text-6xl font-bold text-primary">
                            ¿Alguna vez has querido
                            <p>
                                <span className="text-4xl md:text-6xl font-bold text-primary">
                                    cambiar el final de una historia?
                                </span>
                            </p>
                        </h1>

                    </motion.div>
                </ScrollAnimationWrapper>

                <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                    {/* Contenido de texto */}
                    <ScrollAnimationWrapper className="w-full md:w-1/2">
                        <motion.div className="text-center" variants={scrollAnimation}>
                            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-black-100">
                                Con pathbooks puedes lograrlo <p><span className="text-blue-700">toma de decisiones </span>
                            </p>
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-gray-700 mb-4">
                                Somos una plataforma de lectura donde los lectores aprenden y decidir.
                                Cada lectura es diferente, lo que no solo aumenta el tiempo de lectura,
                                sino que mejora significativamente la comprensión del texto.

                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                                <button
                                    className="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:text-white px-6 py-3 rounded-lg transition-all">
                                    Comprar ahora
                                </button>
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>

                    {/* Imagen */}
                    <ScrollAnimationWrapper className="w-full md:w-1/2 mt-4 mb-6 md:mt-0">
                        <motion.div className="flex justify-center" variants={scrollAnimation}>
                            <div className="relative w-full h-[300px] md:h-[500px]">
                                <Image
                                    src="/assets/home002.png"
                                    alt="Maestra Pathbooks"
                                    width={570}    // Ancho en píxeles
                                    height={600}   // Alto en píxeles
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>

    );
};

export default Home002;