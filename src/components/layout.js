import * as React from "react"
import { Header } from "./common/Header"
import styled from "styled-components"

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Header />
      <Content data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>© allrights reserved seiji yoshino</footer>
      </Content>
    </>
  )
}

const Content = styled.div`
  padding-top: 50px;
`
