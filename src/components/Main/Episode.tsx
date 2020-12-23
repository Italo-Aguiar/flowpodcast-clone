import React, { useState } from 'react';
import { EpisodeProps } from '../../interfaces';
import { FaYoutube, FaHeadphones, FaSpotify, FaAmazon, FaGoogle, FaApple } from 'react-icons/fa';
import { SiDeezer } from 'react-icons/si';

interface Props {
  data: EpisodeProps
}

enum Meses {
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
}

const Episode: React.FC<Props> = ({ data }) => {
  const [showEmbed, setShowEmbed] = useState(false);
  const date = new Date(data.created_at)

  return (
    <div className="flex flex-col justify-center align-center bg-white rounded p-2 w-full text-black">
      {
        showEmbed 
          ? <iframe className="h-full" src={`https://www.youtube.com/embed/${data.feed.youtube}`}/>
          : (
            <>
              <img src={data.cover} alt={data.description} className="mb-1"/>
              <hr/>
            </>
          )
      }
      <div className="text-left px-5 py-4">
        <h2 className="font-bold text-sm">{data.title}</h2>
        <p className="text-sm">{data.description}</p>
      </div>
      <div className="text-center w-full py-5 px-5 mb-2">
        <a className="btn-feed cursor-pointer" onClick={() => setShowEmbed(true)}><FaYoutube className="icon-feed"/>YouTube</a>
        <a className="btn-feed" href={data.mp3} target="_blank"><FaHeadphones className="icon-feed"/>Ouvir e Baixar</a>
        <a className="btn-feed" href={data.feed.spotify} target="_blank"><FaSpotify className="icon-feed"/>Spotify</a>
        <a className="btn-feed" href={data.feed.amazon} target="_blank"><FaAmazon className="icon-feed"/>Amazon Music</a>
        <a className="btn-feed" href={data.feed.google} target="_blank"><FaGoogle className="icon-feed"/>Google</a>
        <a className="btn-feed" href={data.feed.deezer} target="_blank"><SiDeezer className="icon-feed"/>Deezer</a>
        <a className="btn-feed" href={data.feed.apple} target="_blank"><FaApple className="icon-feed"/>Apple Podcasts</a>
      </div>

      <hr className="border-gray-300" />

      <div className="flex justify-between px-5 pt-3">
        <span className="text-xs mt-1">{`${date.getDate()} de ${Meses[date.getMonth()]} de ${date.getFullYear()}`}</span>
        <a href={`/episodio/${data.id}`} className="text-secondary">COMENTAR {'>>'}</a>
      </div>
    </div>
  );
};

export default Episode