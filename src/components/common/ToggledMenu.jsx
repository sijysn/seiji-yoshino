import React, { useEffect } from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import TranstionLink from "gatsby-plugin-transition-link"

import { Icon } from "./Icon"

export const ToggledMenu = ({ sectionTitles, social, location, close }) => {
  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflowY = "hidden"

    return () => (body.style.overflowY = "auto")
  }, [])

  return (
    <Backdrop onClick={close}>
      <nav>
        <NavList>
          {sectionTitles.map(({ title, link }) => {
            return (
              <NavItem key={title}>
                {location.pathname === "/" ? (
                  <ButtonLink
                    onClick={() => {
                      scrollTo(link)
                      close()
                    }}
                  >
                    {title}
                  </ButtonLink>
                ) : (
                  <TranstionLink
                    to={`/${link}`}
                    entry={{
                      appearAfter: 1,
                      length: 1,
                    }}
                    onClick={close}
                  >
                    {title}
                  </TranstionLink>
                )}
              </NavItem>
            )
          })}
          <NavItem>
            <OuterLink
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <StyledIcon icon="fa-brands fa-twitter" />
              TWITTER
            </OuterLink>
          </NavItem>
          <NavItem>
            <OuterLink
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <StyledIcon icon="fa-brands fa-facebook" />
              FACEBOOK
            </OuterLink>
          </NavItem>
        </NavList>
      </nav>
    </Backdrop>
  )
}

const NavList = styled.ul`
  margin-top: 100px;
  width: 100%;
  text-align: center;
  color: #f9f9f9;
`

const NavItem = styled.li`
  font-size: 2rem;
  transition: opacity 0.1s ease-in-out;
  padding: 8px 0;

  :hover {
    opacity: 0.5;
  }
`

const OuterLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`

const ButtonLink = styled.button`
  display: block;
  width: 100%;
  height: 100%;
`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

const StyledIcon = styled(Icon)`
  margin-right: 8px;
`
