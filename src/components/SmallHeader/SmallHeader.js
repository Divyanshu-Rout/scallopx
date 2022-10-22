import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../config/images";
import {
  HeaderStyle,
  Wrapper,
  Logo,
  Nav,
  MenuList,
  MenuItem,
  ItemLink,
  SubMenu,
  SubMenuList,
  SubMenuListTitle,
  SubMenuListMenu,
  SubMenuItem,
  SubMenuListIcon,
  SubMenuListWrap,
  MobileMenu,
  MobileButton,
  MobileMenuWrap,
  MobileHeader,
  CloseButton,
  Mobilecontent,
  EarlyWrap, SCLPChain, SCLPChainText, SCLPChainTextWrapper
} from "./SmallHeader.styles";
import Button from "../Button/Button";
import SclpChainButton from "../Button/SclpChainButton";
import DownArrow from "../../assets/Icons/DownArrow";

const NavData = [
  {
    link: "/",
    name: "Home",
    target: "blank",
    newWindow: false
  },

  {
    // link: "/policy/Scallop_Litepaper.pdf",
    link: "https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Scallop+Whitepaper.pdf",
    Item: "Light paper",
    target: "blank",
    newWindow: true
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mDrop, setMDrop] = useState(false);

  const handleClick = () => {
    setOpen(true);
    document.body.classList.add("over-hidden");
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove("over-hidden");
  };

  const getElementOffset = (el) => {
    let rect = el.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };


  const scrollClick = (e, id) => {
    e.preventDefault();
    // let header = document.querySelector('header')
    let element = document.getElementById(id);
    window.scrollTo({
      behavior: "smooth",
      top: getElementOffset(element).top,
    });
    setOpen(false);
    document.body.classList.remove("over-hidden");
  };


  const logoClick = (e, id) => {
    e.preventDefault();

    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };


  const mobileDropdown = (e, item) => {
    e.preventDefault();
    item.isActive = !item.isActive;
    setMDrop(!mDrop);
  };



  return (
    <HeaderStyle>
      <div className="container">


        {/* <SCLPChain onClick={(e) => window.open("https://bscscan.com/token/0xF2c96E402c9199682d5dED26D3771c6B192c01af")}>
      <SCLPChainText>
        {`SCLP BEP contract address: `}
        <u>0xF2c96E402c9199682d5dED26D3771c6B192c01af</u></SCLPChainText>
      {/* <p style={{color:"#ffffff",fontSize:16,fontWeight:500}}>SCLP BEP contract address: <u>0xF2c96E402c9199682d5dED26D3771c6B192c01af</u></p> */}
        {/* </SCLPChain>  */}


        <Wrapper>
          <Logo >
            <Link to={"/"}   >
              <img src={images.logo} alt="logo" />
            </Link>
          </Logo>
          <Nav>
            <MenuList>
              {NavData.map((item, i) => {
                return (
                  <MenuItem key={i}>
                    {item.newWindow ? (
                      <ItemLink
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.name}
                        {item.submenu && (
                          <span className="menu-icon">
                            <DownArrow />
                          </span>
                        )}
                      </ItemLink>
                    ) : <ItemLink
                      href={item.link}

                      rel="noreferrer"
                    >
                      {item.name}
                      {item.submenu && (
                        <span className="menu-icon">
                          <DownArrow />
                        </span>
                      )}
                    </ItemLink>}
                    {item.submenu && (
                      <SubMenu className={item.className}>
                        {item.submenu.map((submenu, j) => {
                          return (
                            <SubMenuList key={`${i}${j}`}>
                              {submenu.title && (
                                <SubMenuListTitle>
                                  <SubMenuListIcon>
                                    <img src={submenu.icon} alt="" />
                                  </SubMenuListIcon>
                                  {submenu.title}
                                </SubMenuListTitle>
                              )}
                              <SubMenuListWrap>
                                {submenu.menuList.map((menulist, i) => {
                                  return (
                                    <SubMenuListMenu key={i}>
                                      {menulist.target ? (
                                        <SubMenuItem
                                          // target="_blank"
                                          rel="noreferrer"
                                          href={menulist.link}
                                        >
                                          {menulist.Item}
                                        </SubMenuItem>
                                      ) : (
                                        <SubMenuItem
                                          onClick={(e) =>
                                            scrollClick(e, menulist.link)
                                          }
                                          href={menulist.link}
                                        >
                                          {menulist.Item}
                                        </SubMenuItem>
                                      )}
                                    </SubMenuListMenu>
                                  );
                                })}
                              </SubMenuListWrap>
                            </SubMenuList>
                          );
                        })}
                      </SubMenu>
                    )}
                  </MenuItem>
                );
              })}
            </MenuList>
            {/* <Button onClick={(e) => scrollClick(e, "cta")} to="#">
            MAHA-SCLP Early Adopter Sale
            </Button> */}

            {/* <Button onClick={(e) => window.open("https://earlyaccess.scallopx.com/")} to="#">
            P Early Adopter Sale
            </Button> */}
          </Nav>
          <MobileMenu>
            <MobileButton onClick={() => handleClick()}>
              <span />
            </MobileButton>
            <MobileMenuWrap className={`${open ? "open" : ""}`}>
              <MobileHeader>
                <Logo>
                  <Link to={"/"} onClick={logoClick}>
                    <img src={images.logo} alt="logo" />
                  </Link>
                </Logo>
                <CloseButton onClick={() => handleClose()} />
              </MobileHeader>
              <Mobilecontent>
                <MenuList>
                  {NavData.map((item, i) => {
                    return (
                      <MenuItem key={i}>
                        {item.target ? (
                          <ItemLink
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.name}
                            {item.submenu && (
                              <span className="menu-icon">
                                <DownArrow />
                              </span>
                            )}
                          </ItemLink>
                        ) : (
                          <ItemLink
                            href={item.link}
                            onClick={(e) => mobileDropdown(e, item)}
                            className={item.isActive === true ? "active" : ""}
                          >
                            {item.name}
                            {item.submenu && (
                              <span className="menu-icon">
                                <DownArrow />
                              </span>
                            )}
                          </ItemLink>
                        )}
                        {item.submenu && (
                          <SubMenu className={item.className}>
                            {item.submenu.map((submenu, j) => {
                              return (
                                <SubMenuList key={`${i}${j}`}>
                                  {submenu.title && (
                                    <SubMenuListTitle>
                                      <SubMenuListIcon>
                                        <img src={submenu.icon} alt="" />
                                      </SubMenuListIcon>
                                      {submenu.title}
                                    </SubMenuListTitle>
                                  )}
                                  <SubMenuListWrap>
                                    {submenu.menuList.map((menulist, i) => {
                                      return (
                                        <SubMenuListMenu key={i}>
                                          {menulist.target === "blank" ? (
                                            <SubMenuItem
                                              target="_blank"
                                              rel="noreferrer"
                                              href={menulist.link}
                                            >
                                              {menulist.Item}
                                            </SubMenuItem>
                                          ) : (
                                            <SubMenuItem
                                              onClick={(e) =>
                                                scrollClick(e, menulist.link)
                                              }
                                              href={menulist.link}
                                            >
                                              {menulist.Item}
                                            </SubMenuItem>
                                          )}
                                        </SubMenuListMenu>
                                      );
                                    })}
                                  </SubMenuListWrap>
                                </SubMenuList>
                              );
                            })}
                          </SubMenu>
                        )}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Mobilecontent>
              <EarlyWrap>
                {/* <Button onClick={(e) => scrollClick(e, "cta")} to="#">
                MAHA-SCLP Early Adopter Sale
                </Button> */}
                {/* <Button onClick={(e) => window.open("https://earlyaccess.scallopx.com/")} to="#">
                MAHA-SCLP Early Adopter Sale
                </Button> */}

              </EarlyWrap>
            </MobileMenuWrap>
          </MobileMenu>
        </Wrapper>
      </div>
    </HeaderStyle>
  );
};

export default Header;
