import { RecentWork } from "@/types/RecentsWorks";
import Image from "next/image";

const RecentsWorkSlides = ({ work }: { work: RecentWork }) => {
  const { featured, image, buttonUrl } = work;

  return (
    <div
      className="relative bg-[#80808033]  rounded-[42px] p-0 w-[350px] h-[300px] overflow-hidden shadow-xl"
    >
      {/* Tags */}
      <div className="absolute top-4 right-3 flex gap-1 z-10">
        <span className="bg-[#2b4a45] text-white text-sm px-3 py-1 rounded-full">
          {featured?.name1}
        </span>
        <span className="bg-[#2b4a45] text-white text-sm px-3 py-1 rounded-full">
          {featured?.name2}
        </span>
      </div>

      {/* Image */}
      <div className="m-0">
        <Image
          src={image}
          alt="Laptop"
          width={350}
          height={300}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Arrow Button */}
      <div className="absolute bottom-3 right-3 bg-[#2b4a45] w-10 h-10 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default RecentsWorkSlides;
