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
} from "./Header.styles";
import Button from "../Button/Button";
import SclpChainButton from "../Button/SclpChainButton";
import DownArrow from "../../assets/Icons/DownArrow";

const NavData = [
  {
    link: "/",
    name: "Products",
    isActive: "false",
    submenu: [
      // {
      //   // title: "DEFI",
      //   // icon: images.defi,
      //   menuList: [
      //     {

      //       link: "https://stake.scallopx.com/welcome",
      //       Item: "Scallop Stake",
      //       target: "blank",
      //       icon: images.arrow,
      //       // target: "blank",
      //       ItemDescription: "Stake your $SCLP tokens and earn",
      //       SubDescription: "up to 48% APY"
      //     },
      //     {
      //       link: "https://scallopchain.com/landing",
      //       Item: "Scallop Chain",
      //       target: "blank",
      //       icon: images.arrow,
      //       // target: "blank",
      //       ItemDescription: 'The world’s first regulated blockchain',
      //       SubDescription: 'featuring cross-chain financial apps'
      //     },
      //     {
      //       link: "https://www.scallop.exchange/en_US/",
      //       Item: "Scallop Exchange  ",
      //       target: "blank",
      //       icon: images.newbtn,
      //       // target: "blank",
      //       ItemDescription: 'Easily trade cryptocurrencies with',
      //       SubDescription: '125x leverage',
      //     },
      //     // {
      //     //   link: "https://scallopchain.com/",
      //     //   Item: "Scallop Chain",
      //     //   target: "blank",
      //     // },
      //     // {
      //     //   link: "https://app.scallopchain.com/",
      //     //   Item: "Scallop Stake",
      //     //   target: "blank",
      //     // },
      //     // {
      //     //   link: "/app-landing",
      //     //   Item: "Scallop App",
      //     //   target: "blank",
      //     // }
      //   ],
      // },
      // {
      //   // title: "BANKING",
      //   // icon: images.banking,
      //   menuList: [
      //     {
      //       link: "https://scallopx.com/app-landing",
      //       Item: "Scallop App",
      //       target: "blank",
      //       ItemDescription: 'Start using your crypto like never',
      //       SubDescription: 'before right from your phone'
      //     },
      //     {
      //       link: "https://www.scallopscan.com/",
      //       Item: "Scallop Scan",
      //       target: "blank",
      //       ItemDescription: 'Scallop Scan is a Block Explorer and',
      //       SubDescription: 'Analytics Platform for Scallop Chain'

      //     },
      //     // {
      //     //   link: "Exchange",
      //     //   Item: "Exchange",
      //     // },
      //     // {
      //     //   link: "Hardware",
      //     //   Item: "Hardware wallet",
      //     // },
      //     // {
      //     //   link: "Payment",
      //     //   Item: "Payments",
      //     // },
      //   ],
      // },
      {
        // title: "BANKING",
        // icon: images.banking,
        menuList: [
          {
            heroTitle: "Chain",
          },
          {
            link: "Chain",
            Item: "Scallop Chain",
          },
          {
            link: "https://stake.scallopx.com/welcome",
            Item: "Stake",
            target: "blank"
          },
          {
            link: "Token",
            Item: "SCLP Token",
          },
        ],
      },
      {
        // title: "BANKING",
        // icon: images.banking,
        menuList: [
          {
            heroTitle: "Banking",
          },
         
          {
            link: "Account",
            Item: "Acounts",
          },
          {
            link: "Card",
            Item: "Cards",
          },
          {
            link: "Payment",
            Item: "Pay",
          },
          {
            link: "Payment",
            Item: "Money Transfer",
          },
          {
            link: "Payment",
            Item: "Remittance",
          },
         
         
          
          // {
          //   link: "Exchange",
          //   Item: "Exchange",
          // },
          // {
          //   link: "Hardware",
          //   Item: "Hardware wallet",
          // },
          // {
          //   link: "Payment",
          //   Item: "Payments",
          // },
        ],
      },
      {
        // title: "BANKING",
        // icon: images.banking,
        menuList: [
          {
            heroTitle: "Exchange",
          },
        
          {
            link: "https://www.scallop.exchange/en_US/",
            Item: "Scallop Centralised Exchange",
            target: "blank"
          },
       
        ],
      },
    ],
  },
  {
    link: "/",
    name: "About",
    className: "about-menu",
    isActive: "false",
    submenu: [
      {
        menuList: [
          {
            link: "Team",
            Item: "Team",
          },
          {
            link: "Team",
            Item: "Advisors",
          },
          
          // {
          //   link: "Team",
          //   Item: "Team",
          // },
          // {
          //   link: "Backed",
          //   Item: "Backed by",
          // },
          // {
          //   link: "https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Scallop+Whitepaper.pdf",
          //   // link: "/whitepaper/index.html",
          //   Item: "Whitepaper",
          //   target: "blank",
          // },
          // {
          //   link: "https://mahadao.com/",
          //   Item: "MahaDAO",
          //   target: "blank",
          // },
        ],
      },
    ],
  },
  {
    link: "/",
    name: "Resources",
    className: "about-menu",
    isActive: "false",
    submenu: [
      {
        menuList: [
          {
            link: "https://www.scallopx.com/learn/",
            Item: "Learn",
            target: "blank",
          },
          {
            link: "https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Scallop+Whitepaper.pdf",
            Item: "Light paper",
            target: "blank",
          },
          // {
          //   link: "https://scallop-docs.s3.eu-west-1.amazonaws.com/Scallop_TnC.pdf",
          //   Item: "Terms & Conditions",
          //   target: "blank",
          // }
        ],
      },
    ],
  },
  // {
  //   link: "/",
  //   name: "Careers",
  //   className: "careers",
  //   isActive: "false",
  //   link: "https://careers.scallopx.com/",
  //   Item: "Scallop Learn",
  //   target: "blank",
  // },
  {
    link: "/",
    name: "Contact Us",
    className: "about-menu",
    isActive: "false",
    submenu: [
      {
        menuList: [
          {
            link: "https://help.scallopx.com/support/home",
            Item: "Support",
            target: "blank",
          },
          {
            link: "https://careers.scallopx.com/",
            Item: "Careers",
            target: "blank",
          }
        ],
      },
    ],
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
       <p style={{color:"#ffffff",fontSize:16,fontWeight:500}}>SCLP BEP contract address: <u>0xF2c96E402c9199682d5dED26D3771c6B192c01af</u></p>
      </SCLPChain>  */}


        <Wrapper>
          <Logo>
            <Link to={"/"} onClick={logoClick}>
              <img src={images.logo} alt="logo" />
            </Link>
          </Logo>
          <Nav>
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
                      <ItemLink href={item.link}>
                        {item.name}
                        {/* {item.submenu && (
                          <span className="menu-icon">
                            <DownArrow />
                          </span>
                        )} */}
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
                                      {menulist.target ? (
                                        <SubMenuItem
                                          target="_blank"
                                          rel="noreferrer"
                                          href={menulist.link}>
                                          {menulist.Item}
                                          <img src={menulist.icon} alt="" />
                                        </SubMenuItem>
                                      ) : (
                                        <SubMenuItem
                                          onClick={(e) =>
                                            scrollClick(e, menulist.link)
                                          }
                                          href={menulist.link}>
                                          {menulist.Item}

                                        </SubMenuItem>
                                      )}
                                      <SubMenuItem style={{ 'font-weight': '400', 'font-size': '14px' }}
                                        onClick={(e) =>
                                          scrollClick(e, menulist.link)
                                        }
                                        href={menulist.link}>
                                        {menulist.ItemDescription}
                                      </SubMenuItem>
                                      <SubMenuItem style={{ 'font-weight': '400', 'font-size': '14px' }}
                                        onClick={(e) =>
                                          scrollClick(e, menulist.link)
                                        }
                                        href={menulist.link}>
                                        {menulist.SubDescription}
                                      </SubMenuItem>
                                      <SubMenuItem style={{ 'font-weight': '600', 'font-size': '16px', 'color': 'black' }}
                                        onClick={(e) =>
                                          scrollClick(e, menulist.link)
                                        }
                                        href={menulist.link}>
                                        {menulist.heroTitle}
                                      </SubMenuItem>
                                      <SubMenuItem style={{ 'color': 'grey', 'fontWeight': '300' }}
                                        onClick={(e) =>
                                          scrollClick(e, menulist.link)
                                        }
                                        href={menulist.link}>
                                        {menulist.ItemText}
                                      </SubMenuItem>
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
            {/* <img src={images.qrCode} width="100" alt="logo" /> */}
            <Button onClick={(e) => window.open("https://waitlist.scallopx.com/")} target="_blank" to="#">
              Join Waitlist
            </Button>
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
                            {/* {item.submenu && (
                              <span className="menu-icon">
                                <DownArrow />
                              </span>
                            )} */}
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
                                                scrollClick(e, menulist.link)}
                                              href={menulist.link}>
                                              {menulist.Item}
                                            </SubMenuItem>
                                          )}
                                          <SubMenuItem style={{ 'color': 'black', 'font-size': '12px' }}
                                            onClick={(e) =>
                                              scrollClick(e, menulist.link)
                                            }
                                            href={menulist.link}>
                                            {menulist.heroTitle}
                                          </SubMenuItem>
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
                <Button onClick={(e) => window.open("https://waitlist.scallopx.com/")} target="_blank" to="#">
                  join Waitlist
                </Button>

              </EarlyWrap>
            </MobileMenuWrap>
          </MobileMenu>
        </Wrapper>
      </div>
    </HeaderStyle>
  );
};

export default Header;
