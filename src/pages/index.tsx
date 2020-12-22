import { NextPage } from 'next';
import axios from 'axios';
import Layout from '../components/Layout';
import Carousel from '../components/Main/Carousel';
import { Episode } from '../interfaces';
import { FaYoutube, FaTwitch, FaSpotify, FaAmazon, FaApple, FaDiscord, FaRss } from 'react-icons/fa';

interface IndexProps {
  episodes: Episode[]
}


const IndexPage: NextPage<IndexProps> = ({ episodes }) => {
  

  return (
    <Layout title="Flow Podcast - A melhor conversa que você vai ouvir.">
      <Carousel />
      <div className="flex flex-col font-flow justify-center align-center text-center my-10">
        <h3 className="w-3/5 text-center font-medium mx-auto mb-8 text-lg">Flow Podcast é uma conversa descontraída, longa e livre, como um papo de boteco entre amigos. No Flow garantimos um espaço onde o convidado pode desenvolver suas ideias sem qualquer tipo de pauta ou as restrições normais de outras mídias, como agenda política/filosófica.</h3>
        <h1 className="text-5xl font-black">DE SEGUNDA A SEXTA ÀS 20H</h1>
        <h4 className="font-thin text-xl my-2">(às vezes o horário muda, quase sempre atrasa)</h4>
        <h3 className="font-bold text-2xl my-2">Ao vivo no Youtube, Twitch e Facebook!</h3>
        
        <div className="flex justify-between w-9/25 mx-auto my-5">
          <button className="btn-social hover:bg-youtube">YOUTUBE</button>
          <button className="btn-social hover:bg-twitch">TWITCH</button>
          <button className="btn-social hover:bg-facebook">FACEBOOK</button>
        </div>

        <div className="flex justify-between w-1/5 mx-auto mb-10">
          <div className="circle-small"><FaYoutube className="m-auto" size="25px"/></div>
          <div className="circle-small"><FaTwitch className="m-auto" size="25px"/></div>
          <div className="circle-small"><FaSpotify className="m-auto" size="25px"/></div>
          <div className="circle-small"><FaAmazon className="m-auto" size="25px"/></div>
          <div className="circle-small"><FaApple className="m-auto" size="25px"/></div>
          <div className="circle-small"><FaDiscord className="m-auto" size="25px"/></div>
          <div className="circle-small"><FaRss className="m-auto" size="25px"/></div>
        </div>

        <h3 className="font-thin text-lg mb-6">NÃO É UMA ENTREVISTA!</h3>

        <hr/>

        <h1 className="font-bold text-3xl mt-10">Quem já passou por aqui</h1>
        <h2 className="font-light text-lg">OUÇA NOSSOS EPISÓDIOS</h2>
      </div>
    </Layout>
  )
}
  


IndexPage.getInitialProps = async (_) => {
  const response = await axios.post('https://flow3r-api-master-2eqj3fl3la-ue.a.run.app/v2/episodes/list', {
    params: {
      filter: 'landing'
    }
  })

  return response.data;
}

export default IndexPage
