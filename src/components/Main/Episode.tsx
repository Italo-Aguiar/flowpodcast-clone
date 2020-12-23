import React from 'react';
import { EpisodeProps } from '../../interfaces';
import { FaYoutube, FaSpotify, FaAmazon, FaApple, } from 'react-icons/fa';

interface Props {
  data: EpisodeProps
}

const Episode: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center align-center bg-white rounded p-2 w-full text-black">
      <img src={data.cover} alt={data.description} className="mb-1"/>
      <hr/>
      <div className="text-left px-5 py-4">
        <h2 className="font-bold text-sm">{data.title}</h2>
        <p className="text-sm">{data.description}</p>
      </div>
      <div className="w-full py-5">

      </div>
    </div>
  );
};

export default Episode