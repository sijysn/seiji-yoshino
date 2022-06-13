import React from "react"
import styled from "styled-components"

import { Header } from "./common/Header"
// import { ToggledMenu } from "./common/ToggledMenu"

export const Layout = ({ location, sectionTitles, social, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  // const [isOpen, toggleOpen] = useState(true)

  return (
    <>
      {/* {isOpen && (
        <ToggledMenu
          sectionTitles={sectionTitles}
          social={social}
          location={location}
        />
      )} */}
      <Header
        sectionTitles={sectionTitles}
        social={social}
        location={location}
      />
      <Content data-is-root-path={isRootPath}>
        <main>{children}</main>
        <Footer>© allrights reserved seiji yoshino</Footer>
      </Content>
    </>
  )
}

const Content = styled.div`
  padding-top: 100px;
`

const Footer = styled.footer`
  text-align: center;
  padding: 200px 0 50px;
`
