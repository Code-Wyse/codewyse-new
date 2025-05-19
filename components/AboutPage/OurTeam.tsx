import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  hoverImage: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Chad Fernandez",
    position: "CEO & CO-FOUNDER ",
    image: "/images/aboutus/Mike.jpg",
    hoverImage: "/images/aboutus/Mike-hover.jpg",
  },
  {
    name: "Jason Wang",
    position: "CTO",
    image: "/images/aboutus/json-cto.jpg",
    hoverImage: "/images/aboutus/json-cto-hover.jpg",
  },
    {
    name: "Usama Ashraf",
    position: "COO & Co-Founder",
    image: "/images/aboutus/Erika.jpg",
    hoverImage: "/images/aboutus/Erika-hover.jpg",
  },
  {
    name: "Usama Rao",
    position: "Project Manager",
    image: "/images/aboutus/Kevin-Egan_leadership.jpg",
    hoverImage: "/images/aboutus/Kevin-Egan_leadership-hover.jpg",
  },
  {
    name: "Akash Ahmed",
    position: "Team Lead",
    image: "/images/aboutus/Scott.jpg",
    hoverImage: "/images/aboutus/Scott-hover.jpg",
  },
  {
    name: "Ziyam Aslam",
    position: "Backend Developer - Laravel",
    image: "/images/aboutus/Anu.jpg",
    hoverImage: "/images/aboutus/Anu-hover.jpg",
  },
  {
    name: "Abdul Sami",
    position: "Fronted Developer",
    image: "/images/aboutus/sami-bhai.jpg",
    hoverImage: "/images/aboutus/sami-bhai-hover.jpg",
  },
 {
    name: "Amjad Awan",
    position: "Fronted Developer",
    image: "/images/aboutus/frontend-dev.jpg",
    hoverImage: "/images/aboutus/frontend-dev-hover.jpg",
  },
  
  {
    name: "Amanullah Khan",
    position: "Backend Developer",
    image: "/images/aboutus/Amy.jpg",
    hoverImage: "/images/aboutus/Amy-hover.jpg",
  },
  {
    name: "Asad ",
    position: "WP Plugin Developer",
    image: "/images/aboutus/ZeynepOzdemir_leadership.jpg",
    hoverImage: "/images/aboutus/ZeynepOzdemir_leadership-hover.jpg",
  },
  {
    name: "Syed Aun",
    position: "QA Analyst",
    image: "/images/aboutus/RajeevRajan.jpg",
    hoverImage: "/images/aboutus/RajeevRajan_hover.jpg",
  },
    {
    name: "Ali Imran",
    position: "QA Analyst",
    image: "/images/aboutus/ali-qa.jpg",
    hoverImage: "/images/aboutus/ali-qa-hover.jpg",
  },
  {
    name: "Waleed Qureshi",
    position: "Ui/Ux Designer ",
    image: "/images/aboutus/Joe-Binz-color-background.png",
    hoverImage: "/images/aboutus/Joe-Binz-hover-background.png",
  },
  {
    name: "Waleed Ali",
    position: "Backend Developer",
    image: "/images/aboutus/waleed_ali.jpg",
    hoverImage: "/images/aboutus/waleed_ali-hover.jpg",
  },
   {
    name: "Faisal Khan",
    position: "Backend Developer",
    image: "/images/aboutus/faisal-be.jpg",
    hoverImage: "/images/aboutus/faisal-be-hover.jpg",
  },
      
];

const OurTeam = () => {
  return (
    <section className="py-16 mt-[-70px] bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center relative mb-12">
        <SectionHeader
                    headerInfo={{
                        title: "Our people",
                        subtitle: "",
                        description: ``,
                    }}
                />
          {/* <h2 className="text-[50px] text-[#253858] font-bold">Our people</h2> */}
          <p className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
            This is our team, a lot of smiling happy people who work hard to empower your teams.
          </p>
        </div>

        {/* Team List */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div key={index} className="w-full sm:w-[45%] md:w-[30%]">
              <div className="flex flex-col items-start group overflow-hidden">
                <div className="relative w-full h-auto">
                  {/* Normal Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={270}
                    height={300}
                    className="rounded-lg object-cover mx-auto w-[80%]"
                  />

                  {/* Hover Image */}
                  <Image
                    src={member.hoverImage}
                    alt={`${member.name} Hover`}
                    width={270}
                    height={300}
                    className="rounded-lg object-cover w-[80%] block mx-auto  absolute top-0 right-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Details */}
                <div className="pt-5 pl-6 text-start w-[80%] mx-auto">
                  <h4 className="text-xl font-semibold text-[#253858]">{member.name}</h4>
                  <p className="text-[#253858]">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
