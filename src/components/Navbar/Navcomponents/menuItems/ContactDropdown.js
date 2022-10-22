import React from 'react'
import {
    MenuStyle,
    MenuItemStyle,
} from './MenuItemsStyle'

const ContactDropdown = () => {
    return (
        <MenuStyle>
            <div className='submenu-mini'>
                <MenuItemStyle>
                    Support
                </MenuItemStyle>
                <MenuItemStyle>
                    Careers
                </MenuItemStyle>
            </div>
        </MenuStyle>
    )
}

export default ContactDropdown