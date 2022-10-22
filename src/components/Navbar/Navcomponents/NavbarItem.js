import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  rem,
  lg,
  md,
  xl,
  xxl,
  sm,
} from "../../../config/variables.js";

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
color: #8F92A1;
  font-family: inherit;
  ${lg(`
  padding:0.6rem 1rem 0.6rem 1rem};
  `)}
  ${xl(`
  padding:0.6rem 1rem 0.6rem 1rem};
  `)}
  ${xxl(`
  padding:0.6rem 1.5rem 0.6rem 1.5rem};
  `)}
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover, &:focus {
    outline:none;
    color: #1A1D1F;
  }
`

const NavbarItemEl = styled.li`
  position: relative;
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`

export default class NavbarItem extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node
  }
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }

  render() {
    const { title, children } = this.props
    return (
      <NavbarItemEl onMouseEnter={this.onMouseEnter} onFocus={this.onMouseEnter}>
        <NavbarItemTitle>{title}</NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}
