import React from "react"
import styled from "styled-components"
import { Icon } from "./Icon"

export const Header = ({ sectionTitles, social }) => {
  return (
    <Wrapper>
      <nav>
        <NavList>
          {sectionTitles.map(({ title, link }) => {
            return (
              <NavItem key={title}>
                <Link href={link}>{title}</Link>
              </NavItem>
            )
          })}
          <NavItem>
            <Link
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fa-brands fa-twitter" />
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href={social.facebook}
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
  transition: opacity 0.1s ease-in-out;

  :not(:last-child) {
    margin-right: 16px;
  }

  :hover {
    opacity: 0.5;
  }
`

const Link = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 2px 2px;
`
