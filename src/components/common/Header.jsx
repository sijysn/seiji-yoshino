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
      </NavBar>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 50px;
  width: 100%;
`

const NavBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px;
`

const NavItem = styled.li`
  font-size: 10px;
  list-style: none;
  :not(:last-child) {
    margin-right: 16px;
  }
`
