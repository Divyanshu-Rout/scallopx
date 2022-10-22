import React, { Component } from "react"
import NavContainer from "./Navcomponents/NavContainer"
import NavbarItem from "./Navcomponents/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./Navcomponents/DropdownContainer"
import ProductDropdown from "./Navcomponents/menuItems/ProductDropdown"
import AboutDropdown from "./Navcomponents/menuItems/AboutDropdown"
import ResourseDropdown from "./Navcomponents/menuItems/ResourseDropdown"
import ContactDropdown from "./Navcomponents/menuItems/ContactDropdown"

const navbarConfig = [
    { title: "Products", dropdown: ProductDropdown },
    { title: "About", dropdown: AboutDropdown },
    { title: "Resources", dropdown: ResourseDropdown },
    { title: "Contact Us", dropdown: ContactDropdown }
]

export default class AnimatedNavbar extends Component {
    state = {
        activeIndices: []
    }

    resetDropdownState = i => {
        this.setState({
            activeIndices: typeof i === "number" ? [i] : [],
            animatingOut: false
        })
        delete this.animatingOutTimeout
    }

    onMouseEnter = i => {
        if (this.animatingOutTimeout) {
            clearTimeout(this.animatingOutTimeout)
            this.resetDropdownState(i)
            return
        }
        if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
            return

        this.setState(prevState => ({
            activeIndices: prevState.activeIndices.concat(i),
            animatingOut: false
        }))
    }

    onMouseLeave = () => {
        this.setState({
            animatingOut: true
        })
        this.animatingOutTimeout = setTimeout(
            this.resetDropdownState,
            this.props.duration
        )
    }

    render() {
        const { duration } = this.props
        let CurrentDropdown
        let PrevDropdown
        let direction

        const currentIndex = this.state.activeIndices[
            this.state.activeIndices.length - 1
        ]
        const prevIndex =
            this.state.activeIndices.length > 1 &&
            this.state.activeIndices[this.state.activeIndices.length - 2]

        if (typeof currentIndex === "number")
            CurrentDropdown = navbarConfig[currentIndex].dropdown
        if (typeof prevIndex === "number") {
            PrevDropdown = navbarConfig[prevIndex].dropdown
            direction = currentIndex > prevIndex ? "right" : "left"
        }

        return (
            <Flipper
                flipKey={currentIndex}
                spring={duration === 300 ? "noWobble" : { stiffness: 10, damping: 10 }}
            >
                <NavContainer onMouseLeave={this.onMouseLeave}>
                    {navbarConfig.map((n, index) => {
                        return (
                            <NavbarItem
                                key={n.title}
                                title={n.title}
                                index={index}
                                onMouseEnter={this.onMouseEnter}
                            >
                                {currentIndex === index && (
                                    <DropdownContainer
                                        direction={direction}
                                        animatingOut={this.state.animatingOut}
                                        duration={duration}
                                    >
                                        <CurrentDropdown />
                                        {PrevDropdown && <PrevDropdown />}
                                    </DropdownContainer>
                                )}
                            </NavbarItem>
                        )
                    })}
                </NavContainer>
            </Flipper>
        )
    }
}
