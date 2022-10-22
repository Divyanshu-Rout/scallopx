import styled from "styled-components";
import {
    rem,
    white,
    lg,
    md,
    xl,
    xxl,
    sm,
    xxs,
    SiteTransition,
} from "../../../../config/variables";


export const MenuStyle = styled.div`
display:flex;
.submenu {
    width:${rem(220)};
    margin:${rem(10)} ${rem(10)};
}
.submenu-exchange {
    width:${rem(200)};
    padding:${rem(20)} ${rem(10)};
    background:#E5F1FF;
    border-radius: ${rem(16)};
}
.submenu-mini {
    width:${rem(150)};
    margin:${rem(10)} ${rem(5)};
}
`

export const ItemListStyle = styled.div`

`

export const HeaderTextStyle = styled.div`
font-weight: 600;
font-size:${rem(16)};
padding:${rem(4)} ${rem(15)};
`
// background:rgba(42,	133,	255,0.1);
export const MenuItemStyle = styled.div`
color: #8F92A1;
cursor:pointer;
padding:${rem(4)} ${rem(15)};
margin:${rem(5)} 0;
font-size:${rem(16)};
transition: ${SiteTransition};
&:hover {
    color: #1A1D1F;
    background:#E5F1FF;
    border-radius: ${rem(8)};
}
`
export const ItemHeaderStyle = styled.div`
display:flex;
    `

export const HeaderIconStyle = styled.div`
    `