import { NextPage } from 'next'
import { FaTwitter, FaYoutube, FaTwitch } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import Nav from './Nav';

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout: NextPage<Props> = ({ children, title = 'This is the default title' }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="fixed z-10 w-screen">
        <Nav />
      </header>
      <div className="flex flex-col justify-center mt-40">
        {children}
      </div>
      <footer className="flex flex-col h-24 bg-footer">
        <hr />
        <div className="flex justify-center align-center mt-2 font-flow text-sm">
          <Link href="/"><a className="transition-textColor duration-200 ease-in-out hover:text-secondary mx-1">HOME</a></Link>
          <span>|</span>
          <Link href="/politicas/termos-de-uso"><a className="transition-textColor duration-200 ease-in-out hover:text-secondary mx-1">TERMOS DE USO</a></Link>
          <span>|</span>
          <Link href="/politicas/politica-de-privacidade"><a className="transition-textColor duration-200 ease-in-out hover:text-secondary mx-1">POLÍTICA DE PRIVACIDADE</a></Link>
        </div>
        <div className="flex justify-center my-2">
          <a href="https://twitter.com/flowpdc" target="_blank"><FaTwitter color="#ffb705" className="mx-2" size="22px" /></a>
          <a href="https://www.youtube.com/flowpodcast" target="_blank"><FaYoutube color="#ffb705" className="mx-2" size="22px" /></a>
          <a href="https://www.twitch.tv/flowpodcast" target="_blank"><FaTwitch color="#ffb705" className="mx-2" size="22px" /></a>
          <a href="https://www.instagram.com/flowpdc/" target="_blank"><AiFillInstagram color="#ffb705" className="mx-2" size="22px" /></a>
          <a href="https://www.facebook.com/flowpdc" target="_blank"><AiFillFacebook color="#ffb705" className="mx-2" size="22px" /></a>
        </div>
        <div className="flex justify-center">
          <span className="text-sm"><span className="text-secondary">Contato: </span><span className="font-thin">contato@flowpodcast.com.br</span></span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
