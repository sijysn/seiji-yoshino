import * as React from "react"
import { Header } from "./common/Header"
import styled from "styled-components"

export const Layout = ({ location, sectionTitles, social, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Header sectionTitles={sectionTitles} social={social} />
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
