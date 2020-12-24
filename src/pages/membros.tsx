// import React from 'react';
import axios from 'axios';
import { NextPage } from 'next'; 
import { useState } from 'react';
import Layout from '../components/Layout';
import PlanModal from '../components/PlanModal';
import { PlanProps } from '../interfaces';

interface Props {
  status?: any
  totalPlans?: number
  plans: PlanProps[]
}

const Membros: NextPage<Props> = ({ plans }) => {
  const [currentPlan, setCurrentPlan] = useState(plans[1]);
  const [modal, setModal] = useState({
    show: false,
    text: ''
  });

  const setupModal = (payload: any) => {
    const text = JSON.parse(payload).body;
    setModal({ show: true, text });
  }

  return (
    <Layout title="MEMBROS | Flow Podcast">
      <div className="flex flex-col text-center px-88">
        <h1 className="text-3xl font-semibold mb-4">SEJA UM FLOWER DIFERENCIADO, TORNE-SE MEMBRO!</h1>
        <p className="text-xl font-medium mb-4">Ser um MEMBRO é a melhor maneira de você, fã do Flow Podcast, nos ajudar a manter nossa liberdade.</p>
        <p className="text-xl font-medium mb-4">Ao nos desvincularmos de plataformas de apoio de terceiros conseguimos ter controle sobre tudo e pensarmos cada vez mais em coisas exclusivas pra você, Flower que além da sua visualização quer nos dar um suporte financeiro para que possamos seguir assim, falando muita merda, do jeitinho que você gosta.</p>
        <p className="text-xl font-medium mb-4">Para se tornar um MEMBRO você precisará escolher entre duas opções de plano que possuem diferenças de preços e vantagens. Clique na opção escolhida para visualizar a descrição de cada plano e dar continuidade ao seu processo de assinatura.</p>
      
        <div className="flex justify-around px-80">
          <div className={`plans-container ${currentPlan.name === 'MEMBRO FLOWER HUMILDE' ? 'border-white' : ''} cursor-pointer`} onClick={() => setCurrentPlan(plans[1])}>
            <h1>MEMBRO FLOWER</h1>
            <h1>HUMILDE</h1>
            <img className="w-30 mx-auto my-5" src="/flower_humilde.png" alt="Badge flower humilde"/>
          </div>

          <div className={`plans-container ${currentPlan.name === 'MEMBRO FLOWER BURGUÊS' ? 'border-white' : ''} cursor-pointer`} onClick={() => setCurrentPlan(plans[0])}>
            <h1>MEMBRO FLOWER</h1>
            <h1>BURGUÊS</h1>
            <img className="w-28 mx-auto my-5" src="/flower_burgues.png" alt="Badge flower humilde"/>
          </div>
        </div>

        <span className="text-left font-semibold mt-10 ml-5 text-sm">Inscrição no plano {currentPlan.name}</span>
        <span className="text-left ml-5 text-sm mb-5">Renovação mensal automática por R$ {currentPlan.amount},00</span>

        <hr className="border-white"/>

        <div className="rounded border-1 border-white p-5 mt-5 mb-20 text-left bg-white bg-opacity-5">
          <h1 className="text-2xl font-bold mb-2">Vantagens de {currentPlan.name}</h1>
          <ul className="list-disc">
            {
              currentPlan.rewards[0].items.map((reward, i) => {
                if (reward.type === 'text') {
                  return <li key={i} className="ml-10">{reward.description} {!reward.available && '(EM BREVE)'}</li>
                }

                if (reward.type === 'modal') {
                  return <li key={i} className="ml-10">{reward.description} {<span className="font-bold cursor-pointer" onClick={() => setupModal(reward.modal)}>[saber mais].</span>} {!reward.available && '(EM BREVE)'}</li>
                }
            })
            }
          </ul>
        </div>
      </div>
      <PlanModal show={modal.show} text={modal.text} closeModal={() => setModal({ show: false, text: '' })} />
    </Layout>
  );
};

Membros.getInitialProps = async () => {
  return axios.get(`${process.env.flow_api}/subscribes/plans`)
    .then(response => response.data)
    .catch(err => {
      console.log('| getPlans error')
      console.log(err)
      return { plans: [] }
    })
}

export default Membros