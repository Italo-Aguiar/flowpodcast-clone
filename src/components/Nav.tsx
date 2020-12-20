import { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import ActiveLink from './ActiveLink';
import Link from 'next/link';
import Image from 'next/image';
import LoginModal from './LoginModal';

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);

  const showModal = () => {
    setShowLogin(true);
  }

  const hideModal = () => {
    console.log('vrau')
    setShowLogin(false);
  }

  return (
    <>
      <nav className="flex justify-between bg-black h-26">
        <div className="flex items-center">
          <Link href="/">
            <div className="mx-4 pt-2">
              <Image src="/logo-flow.png" alt="Flow Podcast" width="140" height="77.6" />
            </div>
          </Link>
          <ActiveLink href="/">HOME</ActiveLink>
          <ActiveLink href="/categoria/camisetas">LOJA</ActiveLink>
          <ActiveLink href="/episodios">EPISÓDIOS</ActiveLink>
          <ActiveLink href="/contato">CONTATO</ActiveLink>
          <ActiveLink href="/membros">MEMBROS</ActiveLink>
          <ActiveLink href="/patch-notes">PATCH NOTES</ActiveLink>
        </div>
        <div className="flex items-center mr-5">
          <HiUserCircle size="20" onClick={showModal} />
        </div>
      </nav>
      <LoginModal show={showLogin} closeModal={hideModal}/>
    </>
  );
};

export default Nav