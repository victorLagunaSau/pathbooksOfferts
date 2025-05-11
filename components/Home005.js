import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const slides = [
    {
        title: "+50% de comprensión lectora",
        text: "Eleva el rendimiento escolar general, según estudios de la OCDE.",
    },
    {
        title: "Lectores constantes",
        text: "Desarrollan mejor toma de decisiones y habilidades críticas.",
    },
    {
        title: "La lectura y los ODS",
        text: "La ONU destaca la lectura como pilar clave para el desarrollo sostenible (ODS 4).",
    },
];

const Home005 = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="bg-blue-50 w-full py-20" id="lectura-impacto">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="max-w-4xl mx-auto mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
                            Los estudiantes que leen más, logran más
                        </h2>
                        <p className="text-lg text-gray-700">
                            Según la <strong>UNESCO</strong> y la <strong>OCDE</strong>, el desarrollo lector está directamente ligado al éxito académico, emocional y profesional.
                        </p>
                    </motion.div>
                </ScrollAnimationWrapper>

                {/* Carrusel controlado */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="card bg-white shadow-xl p-8 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">
                            {slides[currentSlide].title}
                        </h3>
                        <p className="text-gray-600">{slides[currentSlide].text}</p>
                    </div>

                    {/* Botones redondos y visibles */}
                    <div className="flex justify-center mt-6 gap-4">
                        <button
                            onClick={handlePrev}
                            className="btn btn-circle bg-blue-300 hover:bg-blue-500 text-white"
                        >
                            ❮
                        </button>
                        <button
                            onClick={handleNext}
                            className="btn btn-circle bg-blue-300 hover:bg-blue-500 text-white"
                        >
                            ❯
                        </button>
                    </div>
                </div>

                {/* Cierre motivador */}
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="mt-12 max-w-3xl mx-auto"
                    >
                        <p className="text-md md:text-lg text-gray-700">
                            En Pathbooks, promovemos un hábito lector activo, con contenido digital que motiva, guía y transforma la manera en que los estudiantes se relacionan con el conocimiento.
                        </p>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Home005;
