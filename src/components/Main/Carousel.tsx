import React, { useState, useEffect} from 'react';
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi';


const Carousel: React.FC = () => {
  const imageUrls = ['https://carousel-flow.s3-sa-east-1.amazonaws.com/especial_2_anos.jpg', 'https://carousel-flow.s3-sa-east-1.amazonaws.com/dia_dos_pais.jpg', 'https://carousel-flow.s3-sa-east-1.amazonaws.com/caue.jpg']
  const [currentImage, setCurrentImage] = useState(imageUrls[0])
  let timeOut: NodeJS.Timeout;

  const nextImage = () => {
    const index = imageUrls.indexOf(currentImage)

    if (index === imageUrls.length-1) {
      setCurrentImage(imageUrls[0])
    } else {
      setCurrentImage(imageUrls[index+1])
    }
  }
  
  const prevImage = () => {
    const index = imageUrls.indexOf(currentImage)

    if (index === 0) {
      setCurrentImage(imageUrls[imageUrls.length-1])
    } else {
      setCurrentImage(imageUrls[index-1])
    }
  }

  useEffect(() => {
    timeOut = setInterval(() => nextImage(), 3000);
    return () => {
      clearInterval(timeOut);
    }
  }, [])

  useEffect(() => {
    console.log(imageUrls.indexOf(currentImage))
  }, [currentImage])

  return (
    <div className="relative m-auto select-none">
      <img src={currentImage} alt="Imagem Carrossel"/>
      <div className="absolute w-full transform -translate-y-44">
        <div className="flex justify-between mx-16">
          <BiChevronLeftCircle opacity="0.2" size="25px" className="cursor-pointer" onClick={() => {
            clearInterval(timeOut);
            prevImage();
            timeOut = setInterval(() => nextImage(), 3000)
          }}/>
          <BiChevronRightCircle opacity="0.2" size="25px" className="cursor-pointer" onClick={() => {
            clearInterval(timeOut);
            nextImage();
            timeOut = setInterval(() => nextImage(), 3000)
          }}/>
        </div>
      </div>
    </div>
  );
};

export default Carousel