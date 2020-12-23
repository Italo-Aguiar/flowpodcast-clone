import React from 'react';
import { EpisodeProps } from '../../interfaces';

interface Props {
  data: EpisodeProps
}

const Episode: React.FC<Props> = ({ data }) => {
  console.log('Data:')
  console.log(data)
  return (
    <div className="flex flex-col justify-center align-center bg-white rounded p-2 w-1/4">
      <img src={data.cover} alt={data.description}/>
    </div>
  );
};

export default Episode