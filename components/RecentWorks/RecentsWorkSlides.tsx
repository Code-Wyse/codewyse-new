import { RecentWork } from "@/types/RecentsWorks";
import Image from "next/image";
import Link from "next/link";

const RecentsWorkSlides = ({ work, NewClass="", roundedClass="",roundedClass2="" }: { work: RecentWork;
  NewClass?: string;
  roundedClass?: string;
  roundedClass2?: string;
 }) => {
  const { featured, image, buttonUrl } = work;

  return (
    <div
      className="relative   rounded-[42px] p-0 w-[100%] h-auto lg:w-[350px] lg:h-[300px] overflow-hidden shadow-xl"
    >
      {/* Tags */}
      <div className="absolute top-4 right-3 flex gap-1 z-10">
        <span className={`bg-[#2b4a45] text-white text-sm px-4 py-2 rounded-full ${roundedClass}`}>
          {featured?.name1}
        </span>
        <span className={`bg-[#2b4a45] text-white text-sm px-4 py-2 rounded-full ${roundedClass2}`}>
          {featured?.name2}
        </span>
      </div>

      {/* Image */}
      <div className="m-0 hello_img" >
        <Image
          src={image}
          alt="Laptop"
          width={327}
          height={288}
          className="rounded-2xl !w-[100%]  lg:w-[350px] object-contain"
        />
      </div>

      {/* Arrow Button */}
      <Link href={buttonUrl}>
      <div   className={`absolute bottom-2 right-4 bg-[#2b4a45] w-15 h-12 px-3 rounded-[20px] flex items-center justify-center ${NewClass}`}>
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
      </Link>
    </div>
  );
};

export default RecentsWorkSlides;
