import React, {useState, useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
        const {pathname} = router;
        if (pathname.includes("/soportetecnico")) {
            setActiveLink("soportetecnico");
        } else {
            setActiveLink("inicio");
        }
        return () => {
            window.removeEventListener("scroll", () => {
                setScrollActive(window.scrollY > 20);
            });
        };
    }, [router.pathname]);

    return (
        <>
            {/* Desktop Header */}
            <header
                className={`fixed top-0 w-full z-30 transition-all duration-300 ${
                    scrollActive
                        ? "bg-white/90 shadow-lg py-2 backdrop-blur-sm"
                        : "bg-white/80 py-3"
                }`}
                style={{
                    backgroundImage: "url('/assets/bgheader.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img
                            src="/assets/logo.png"
                            className="h-10 w-auto object-contain"
                            alt="Logo Pathbooks"
                        />
                    </div>

                    <ul className="hidden lg:flex items-center space-x-6">
                        <Link href="/">
                            <a
                                onClick={() => setActiveLink("inicio")}
                                className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                                    activeLink === "inicio"
                                        ? "text-yellow-500 border-b-2 botext-yellow-500"
                                        : "text-gray-700 hover:text-blue-500"
                                }`}
                            >
                                Inicio
                            </a>
                        </Link>
                        <Link href="/soportetecnico">
                            <a
                                onClick={() => setActiveLink("soportetecnico")}
                                className={`px-4 py-2 text-lg font-medium transition-colors duration-200 ${
                                    activeLink === "soportetecnico"
                                        ? "text-yellow-500 border-b-2 botext-yellow-500"
                                        : "text-gray-700 hover:text-blue-500"
                                }`}
                            >
                                Soporte Técnico
                            </a>
                        </Link>
                        <button
                            className="btn btn-primary bg-yellow-500 hover:bg-yellow-700 text-black-100 hover:text-white-100 px-6 py-3 rounded-lg transition-all">
                            Comprar ahora
                        </button>
                    </ul>
                </nav>
            </header>

            {/* Mobile Navigation */}
            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 bg-white shadow-t-lg border-t border-gray-200">
                <div className="px-4">
                    <ul className="flex justify-around items-center py-2">
                        <Link href="/">
                            <a
                                onClick={() => setActiveLink("inicio")}
                                className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                                    activeLink === "inicio"
                                        ? "bg-blue-50 text-yellow-500"
                                        : "text-gray-600 hover:text-blue-500"
                                }`}
                            >
                                <img
                                    src="/assets/icon/headerInicio.png"
                                    alt="Inicio"
                                    className="w-7 h-7 mb-1"
                                />
                                <span className="text-xs font-medium">Inicio</span>
                            </a>
                        </Link>
                        <Link href="/soportetecnico">
                            <a
                                onClick={() => setActiveLink("soportetecnico")}
                                className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                                    activeLink === "soportetecnico"
                                        ? "bg-blue-50 text-yellow-500"
                                        : "text-gray-600 hover:text-blue-500"
                                }`}
                            >
                                <img
                                    src="/assets/icon/headerPromo.png"
                                    alt="Soporte"
                                    className="w-7 h-7 mb-1"
                                />
                                <span className="text-xs font-medium">Soporte</span>
                            </a>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;