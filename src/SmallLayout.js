import React from "react";
import SmallHeader from "./components/SmallHeader/SmallHeader";
import Footer from "./components/SmallFooter/Footer";

const SmallLayout = ({ children, mainClass }) => {
  return (
    <div className={`content-area ${mainClass || ""}`}>
      <div className="main-page">
        <SmallHeader />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default SmallLayout;
