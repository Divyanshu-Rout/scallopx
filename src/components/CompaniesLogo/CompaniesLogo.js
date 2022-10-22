import React from "react";
import { images } from "../../config/images";
import { CompaniesLogoStyle, ComapnyLogoList, SingleLogo } from "./CompaniesLogo.styles";

const LogoList = [
  images.Visa, images.Scpa, images.Faster, images.Pci
]

const CompaniesLogo = () => {
  return (
    <CompaniesLogoStyle>
      <div className="container">
        <ComapnyLogoList>
          {LogoList.map((logos, i) => {
            return (
              <SingleLogo key={i}>
                <img src={logos} alt="" />
              </SingleLogo>
            )
          })}
        </ComapnyLogoList>
      </div>
    </CompaniesLogoStyle>
  );
};

export default CompaniesLogo;
