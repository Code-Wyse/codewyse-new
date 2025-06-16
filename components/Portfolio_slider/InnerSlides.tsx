import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  mobile?: boolean;
}

const InnerSlides: React.FC<Props> = ({ image,mobile }) => {
  return (
    <div className={`${mobile ? 'w-[380px] h-[640px]' : 'w-[480px] h-[500px]'} relative   rounded-xl overflow-hidden `}>
      <Image
        src={image}
        alt="portfolio"
        fill
        className={`${mobile ? 'object-cover ' : "object-contain"}  rounded-xl`}
      />
    </div>
  );
};

export default InnerSlides;
