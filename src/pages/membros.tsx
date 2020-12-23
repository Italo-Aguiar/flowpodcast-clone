import React from 'react';
import Layout from '../components/Layout';

const Membros: React.FC = () => {
  return (
    <Layout title="Membros | Flow Podcast">
      <div className="flex flex-col text-center px-88">
        <h1 className="text-3xl font-semibold mb-4">SEJA UM FLOWER DIFERENCIADO, TORNE-SE MEMBRO!</h1>
        <p className="text-xl font-medium mb-4">Ser um MEMBRO é a melhor maneira de você, fã do Flow Podcast, nos ajudar a manter nossa liberdade.</p>
        <p className="text-xl font-medium mb-4">Ao nos desvincularmos de plataformas de apoio de terceiros conseguimos ter controle sobre tudo e pensarmos cada vez mais em coisas exclusivas pra você, Flower que além da sua visualização quer nos dar um suporte financeiro para que possamos seguir assim, falando muita merda, do jeitinho que você gosta.</p>
        <p className="text-xl font-medium mb-4">Para se tornar um MEMBRO você precisará escolher entre duas opções de plano que possuem diferenças de preços e vantagens. Clique na opção escolhida para visualizar a descrição de cada plano e dar continuidade ao seu processo de assinatura.</p>
      
        
      </div>
    </Layout>
  );
};

export default Membros