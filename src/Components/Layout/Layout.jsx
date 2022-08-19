import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="layout">{children}</main>
      <Footer />
    </>
  )
}
