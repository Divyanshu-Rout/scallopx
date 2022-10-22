import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../config/images";
import {
    NavbarStyle,
    LogoStyle,
    WrapperNavStyle,
    MenuBlockStyle,
    MenuItemStyle,
    ButtonWrapperStyle,
    DownloadCtaStyle,
    JoinCtaStyle,
    HamburgerMenuStyle
} from "./Navbar.styles";
import { headblue } from "../../config/variables";
import Button from "../Button/Button";
import { AiOutlineMenu } from 'react-icons/ai'
import AnimatedNavbar from "./AnimatedNavbar";


const Navbar = () => {

    const NavbarMenuArray = [
        {
            name: "Products",
            link: "/",
            subMenu: false
        },
        {
            name: "About",
            link: '/',
            subMenu: false
        },
        {
            name: "Resources",
            link: '/',
            subMenu: false
        },
        {
            name: "Contact Us",
            link: '/',
            subMenu: false
        },

    ]

    const logoClick = (e, id) => {
        e.preventDefault();

        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });
    };



    return (
        <NavbarStyle>
            <WrapperNavStyle>
                <LogoStyle>
                    <Link to={"/"} onClick={logoClick}>
                        <img src={images.logo} alt="logo" />
                    </Link>
                </LogoStyle>
                <MenuBlockStyle>
                    <AnimatedNavbar duration={300} />
                </MenuBlockStyle>
                <ButtonWrapperStyle>
                    <JoinCtaStyle onClick={(e) => window.open("https://waitlist.scallopx.com/")} target="_blank" to="#">
                        Join Waitlist
                    </JoinCtaStyle>
                    <DownloadCtaStyle>
                        Download
                        <img src={images.downloadNav} style={{ marginLeft: ".6rem" }} alt="" />
                    </DownloadCtaStyle>
                </ButtonWrapperStyle>
                <HamburgerMenuStyle>
                    <AiOutlineMenu color={headblue} />
                </HamburgerMenuStyle>
            </WrapperNavStyle>
        </NavbarStyle>
    )
}

export default Navbar