import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  useEffect(() => {
    const handleMessage = (event) => {
      // Seguridad opcional: puedes verificar origin aquí si es necesario
      if (event.data?.type === "SCROLL_TO_PLANES") {
        const target = document.getElementById("planes");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
