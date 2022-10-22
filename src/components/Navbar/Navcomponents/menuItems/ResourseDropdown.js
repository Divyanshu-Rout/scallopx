import React from 'react'
import {
    MenuStyle,
    MenuItemStyle,
} from './MenuItemsStyle'

const ResourseDropdown = () => {
    return (
        <MenuStyle>
            <div className='submenu-mini'>
                <MenuItemStyle>
                    Learn
                </MenuItemStyle>
                <MenuItemStyle>
                    Light Paper
                </MenuItemStyle>
            </div>
        </MenuStyle>
    )
}

export default ResourseDropdown