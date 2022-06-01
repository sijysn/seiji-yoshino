import React from "react"
import styled from "styled-components"
import { Icon } from "./Icon"

export const Header = () => {
  return (
    <Wrapper>
      <nav>
        <NavList>
          <NavItem>
            <Link href="/#about">ABOUT</Link>
          </NavItem>
          <NavItem>
            <Link href="/#work">WORK</Link>
          </NavItem>
          <NavItem>
            <Link href="/#blog">BLOG</Link>
          </NavItem>
          <NavItem>
            <Link
              href="https://twitter.com/yoshino_seiji"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fa-brands fa-twitter" />
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href="https://www.facebook.com/seiji.yoshino.25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fa-brands fa-facebook" />
            </Link>
          </NavItem>
        </NavList>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 100;
`

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 50px 4px 4px;
`

const NavItem = styled.li`
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  line-height: 18px;
  :not(:last-child) {
    margin-right: 16px;
  }
`

const Link = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 2px 2px;
`
