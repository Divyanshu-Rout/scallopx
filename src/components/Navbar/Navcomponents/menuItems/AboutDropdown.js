import React from 'react'
import {
    MenuStyle,
    ItemListStyle,
    MenuItemStyle,
    ItemHeaderStyle,
    HeaderTextStyle,
    HeaderIconStyle
} from './MenuItemsStyle'

const AboutDropdown = () => {
    return (
        <MenuStyle>
            <div className='submenu-mini'>
                <MenuItemStyle>
                    Team
                </MenuItemStyle>
                <MenuItemStyle>
                    Advisors
                </MenuItemStyle>
                <MenuItemStyle>
                    Pay
                </MenuItemStyle>
            </div>
        </MenuStyle>
    )
}

export default AboutDropdown