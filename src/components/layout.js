import * as React from "react"
import { Header } from "./common/Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Header />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>© allrights reserved seiji yoshino</footer>
      </div>
    </>
  )
}

export default Layout
