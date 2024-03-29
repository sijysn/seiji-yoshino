import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import TranstionLink from "gatsby-plugin-transition-link"
import MediaQuery from "react-responsive"

import { Icon } from "./Icon"

export const Header = ({ sectionTitles, social, location, open }) => {
  return (
    <Wrapper>
      <div>
        <Title>
          {location.pathname === "/" ? (
            <Link to="/">
              <StaticImage
                formats={["auto", "webp", "avif"]}
                src="../../images/gatsby-icon-transparent.png"
                alt="Profile picture"
                imgStyle={{
                  width: "48px",
                  height: "48px",
                }}
              />
            </Link>
          ) : (
            <TranstionLink
              to="/"
              entry={{
                appearAfter: 1,
                length: 1,
              }}
            >
              <StaticImage
                formats={["auto", "webp", "avif"]}
                src="../../images/gatsby-icon-transparent.png"
                alt="Profile picture"
                imgStyle={{
                  width: "48px",
                  height: "48px",
                }}
              />
            </TranstionLink>
          )}
        </Title>
        <MediaQuery query="(min-width: 768px)">
          <nav>
            <NavList>
              {sectionTitles.map(({ title, link }) => {
                return (
                  <NavItem key={title}>
                    {location.pathname === "/" ? (
                      <ButtonLink onClick={() => scrollTo(link)}>
                        {title}
                      </ButtonLink>
                    ) : (
                      <TranstionLink
                        to={`/${link}`}
                        entry={{
                          appearAfter: 1,
                          length: 1,
                        }}
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
                >
                  <Icon icon="fa-brands fa-twitter" />
                </OuterLink>
              </NavItem>
              <NavItem>
                <OuterLink
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="fa-brands fa-facebook" />
                </OuterLink>
              </NavItem>
            </NavList>
          </nav>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <IconButton onClick={open}>
            <Icon icon="fa-solid fa-bars" />
          </IconButton>
        </MediaQuery>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

const Title = styled.h1`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`

const NavList = styled.ul`
  position: fixed;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 50px 4px 4px;

  @media (max-width: 767px) {
    padding: 8px;
  }
`

const NavItem = styled.li`
  font-size: 1.5rem;
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

const OuterLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 2px 2px;
`

const ButtonLink = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 2px 2px;
`

const IconButton = styled.button`
  position: fixed;
  right: 0;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 2rem;
`
