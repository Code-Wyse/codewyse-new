// src/components/ImageGrid.tsx
import Image from "next/image";
import React from "react";

const ImageGrid = () => {
  return (
    <div className="mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20 flex items-center justify-center">
      <div className="relative w-full  h-[600px]">
        <div className="absolute left-[70px] top-1/2 transform -translate-y-1/2 w-72">
          <Image 
            src="/images/project-details/img-grid1.jpg" 
            alt="Laptop browsing" 
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="absolute right-0 left-[63%] top-0 w-72">
          <Image 
            src="/images/project-details/img-grid2.jpg" 
            alt="Creative desk" 
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72">
          <Image 
            src="/images/project-details/img-grid3.jpg" 
            alt="Woman working" 
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
