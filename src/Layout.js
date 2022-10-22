import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const Layout = ({ children, mainClass }) => {
  return (
    <div className={`content-area ${mainClass || ""}`}>
      <div className="main-page">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
