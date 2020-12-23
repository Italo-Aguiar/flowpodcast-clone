import React from 'react';
import { EpisodeProps } from '../../interfaces';
// import { FaYoutube, FaHeadphones, FaSpotify, FaAmazon, FaGoogle, FaApple } from 'react-icons/fa';
// import { SiDeezer } from 'react-icons/si';

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
      <div className="text-center w-full py-5 px-5">
        {/* <div className="flex justify-center"><button className="w-full"><FaYoutube className="m-auto" /> YouTube</button></div> */}
      </div>
    </div>
  );
};

export default Episode