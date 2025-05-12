// components/BotonComprar.jsx
import React from "react";

const BotonComprar = () => {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof fbq === "function") {
      fbq("trackCustom", "irAComprarLanding");
    }
  };

  return (
    <a
      href="#comprar"
      onClick={handleClick}
      className="btn btn-primary bg-yellow-500 hover:bg-yellow-700 text-black-100 hover:text-white-100 px-10 py-3 rounded-full transition-all"
    >
      Comprar ahora
    </a>
  );
};

export default BotonComprar;
