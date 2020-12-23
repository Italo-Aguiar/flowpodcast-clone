import axios from 'axios';
import { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import Episode from '../components/Main/Episode';
import { EpisodeProps } from '../interfaces';

interface Props {
  episodes: EpisodeProps[]
  paging: {
    previous: any
    next: any
  }
}

const Episodios: NextPage<Props> = (props) => {
  const [propState, setPropState] = useState(props);

  const getNextPage = async () => {
    if (!propState.paging.next) return;

    axios.post(`${process.env.flow_api}/episodes/list`, {
      params: {
        filter: 'episodes',
        paging: {
          next: propState.paging.next,
          previous: null
        }
      }
    })
      .then(response => {
        setPropState({ episodes: [ ...propState.episodes, ...response.data.episodes ], paging: response.data.paging })
      })
  }

  return (
    <Layout title="Episódios | Flow Podcast - A melhor conversa que você vai ouvir.">
      <div className="grid gap-14 grid-cols-3 my-10 mx-12">
        { 
          propState.episodes.map(episode => {
            return <Episode key={episode.id} data={episode}/>
          })
        }
      </div>

      {
        propState.paging.next && (
          <div className="flex justify-center mb-10">
            <button className="py-2 px-3 rounded border-1 border-secondary text-secondary" onClick={() => getNextPage()}>CARREGAR MAIS EPISÓDIOS</button>
          </div>
        )
      }

    </Layout>
  );
};

Episodios.getInitialProps = async (_) => {
  return axios.post(`${process.env.flow_api}/episodes/list`, {
    params: {
      filter: 'landing'
    }
  })
    .then(response => response.data)
    .catch(err => {
      console.log(err.response.data)
      return { episodes: []}
    });
}

export default Episodios