import React from 'react'
import Head from 'next/head'
import Nav from './Nav';

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav />
      </header>
      {children}
      <footer className="flex flex-col h-20 bg-footer">
        <hr />
        <span>Links</span>
      </footer>
    </div>
  )
}

export default Layout
