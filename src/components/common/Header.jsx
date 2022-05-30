import React from "react"
import styled from "styled-components"
import { Icon } from "./Icon"

export const Header = () => {
  return (
    <Wrapper>
      <NavBar>
        <NavItem>ABOUT</NavItem>
        <NavItem>WORK</NavItem>
        <NavItem>BLOG</NavItem>
        <NavItem>
          <Icon icon="fa-brands fa-twitter" />
        </NavItem>
        <NavItem>
          <Icon icon="fa-brands fa-facebook" />
        </NavItem>
      </NavBar>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 100;
`

const NavBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 50px 4px 4px;
`

const NavItem = styled.li`
  font-size: 10px;
  list-style: none;
  :not(:last-child) {
    margin-right: 16px;
  }
`
