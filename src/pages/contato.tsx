import React, { useState } from 'react';
import Layout from '../components/Layout';
import LoginModal from '../components/LoginModal';

const Contato: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  const showModal = () => {
    setShowLogin(true);
  }

  const hideModal = () => {
    setShowLogin(false);
  }

  return (
    <Layout title="Contato | Flow Podcast">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-3xl">CONTATO</h1>
        <div className="border-dashed border-1 border-secondary mx-10 py-20 mt-10 cursor-pointer" onClick={showModal}>
          PARA ENTRAR EM CONTATO, FAÇA SEU LOGIN/CADASTRO.
        </div>
      </div>
      <LoginModal show={showLogin} closeModal={hideModal} />
    </Layout>
  );
};

export default Contato