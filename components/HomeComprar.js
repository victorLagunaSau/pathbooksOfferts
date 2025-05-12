import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";



const HomeComprar = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const [currentSlide, setCurrentSlide] = useState(0);


    return (
        <div className="bg-blue-50 w-full py-20" id="comprar">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <ScrollAnimationWrapper>
                    <motion.div
                        variants={scrollAnimation}
                        className="max-w-4xl mx-auto mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
                            Comprar
                        </h2>

                    </motion.div>
                </ScrollAnimationWrapper>

            </div>
        </div>
    );
};

export default HomeComprar;
