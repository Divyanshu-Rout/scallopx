import React from 'react'
import {
    MenuStyle,
    ItemListStyle,
    MenuItemStyle,
    ItemHeaderStyle,
    HeaderTextStyle,
    HeaderIconStyle
} from './MenuItemsStyle'
import { images } from '../../../../config/images'

const ProductDropdown = () => {
    return (
        <MenuStyle>
            <div className='submenu'>
                <ItemHeaderStyle>
                    <HeaderIconStyle>
                        <img src={images.chainNav} alt="logo" />
                    </HeaderIconStyle>
                    <HeaderTextStyle>
                        Chain
                    </HeaderTextStyle>
                </ItemHeaderStyle>
                <MenuItemStyle>
                    Scallop Chain
                </MenuItemStyle>
                <MenuItemStyle>
                    Stake
                </MenuItemStyle>
                <MenuItemStyle>
                    SCLP Token
                </MenuItemStyle>
            </div>
            <div className='submenu'>
                <ItemHeaderStyle>
                    <HeaderIconStyle>
                        <img src={images.chainNav} alt="logo" />
                    </HeaderIconStyle>
                    <HeaderTextStyle>
                        Banking
                    </HeaderTextStyle>
                </ItemHeaderStyle>
                <MenuItemStyle>
                    Accounts
                </MenuItemStyle>
                <MenuItemStyle>
                    Cards
                </MenuItemStyle>
                <MenuItemStyle>
                    Pay
                </MenuItemStyle>
                <MenuItemStyle>
                    Money Transfer
                </MenuItemStyle>
                <MenuItemStyle>
                    Remmintence
                </MenuItemStyle>
            </div>
            <div className='submenu-exchange'>
                <ItemHeaderStyle>
                    <HeaderIconStyle>
                        <img src={images.transferNav} alt="logo" />
                    </HeaderIconStyle>
                    <HeaderTextStyle>
                        Exchange
                    </HeaderTextStyle>
                </ItemHeaderStyle>
                <MenuItemStyle>
                    Scallop Centralized
                    Exchange
                </MenuItemStyle>
            </div>
        </MenuStyle>
    )
}

export default ProductDropdown