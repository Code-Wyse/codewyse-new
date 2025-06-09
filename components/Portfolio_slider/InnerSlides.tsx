import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
}

const InnerSlides: React.FC<Props> = ({ image }) => {
  return (
    <div className="w-full  h-[530px]">
      <Image
        src={image}
          height={500}
          width={480}
        className="w-full h-full object-cover rounded-lg"
        alt="portfolio"
      />
    </div>
  );
};

export default InnerSlides;
