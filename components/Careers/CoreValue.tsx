// components/CoreValues.tsx
import Image from "next/image";

type CoreValue = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string | any;
};

const coreValues: CoreValue[] = [
  {
    title: "Empower People",
    imageSrc: "/images/core-value-1.png",
    imageAlt: "Empower People",
    description:
      "We empower our team by trusting them to do what they do best. We let them decide how to approach their tasks, and we support our team by offering training and development opportunities.",
  },
  {
    title: "Do The Right Thing",
    imageSrc: "/images/core-value-2.png",
    imageAlt: "Do The Right Thing",
    description:
      "Actions speak louder than words. We demonstrate our character through transparent and honest discourse, even when it’s the hardest choice.",
  },
  {
    title: "It’s All About Balance",
    imageSrc: "/images/core-value-3.png",
    imageAlt: "Balance",
    description: (
      <>
        Tech is known for its churn and burn culture, but Codewyse is not. It’s important to us that our people lead
        complete, active, and fulfilling lives. We choose the health and wellbeing of our team first. Read more about
        that{" "}.
      </>
    ),
  },
  {
    title: "The Client Isn’t Always Right",
    imageSrc: "/images/core-value-4.png",
    imageAlt: "Client",
    description:
      "Our clients choose to work with us because they trust our expertise. It’s our job to find the best solutions, communicate them clearly, and deliver a level of quality that only we can.",
  },
  {
    title: "A Good Idea Can Come From Anywhere",
    imageSrc: "/images/core-value-5.png",
    imageAlt: "Ideas",
    description:
      "Part of fostering fantastic teams means ensuring they feel comfortable enough to bring their ideas to the table. At Codewyse, everyone gets a voice.",
  },
  {
    title: "Ego Gets Left At The Door",
    imageSrc: "/images/core-value-6.png",
    imageAlt: "Ego",
    description:
      "Collaboration brings the best possible solutions. We listen with humility, approach problems with curiosity, and strive to continuously improve.",
  },
  {
    title: "Think 10 Steps Ahead",
    imageSrc: "/images/core-value-7.png",
    imageAlt: "Think Ahead",
    description:
      "As a software development company, it’s our job to envision the future and then build it. This future-focused mindset informs everything we do.",
  },
];

const CoreValues = () => {
  return (
    <section className="section--core-values">
      <div className="container">
        <h2 className="text-center">Our Core Values</h2>
        <div className="development__row">
          {coreValues.map((value, index) => (
            <div key={index} className="development__card--wrapper">
              <div className="development__card">
                <h4 className="card-title">
                {value.title}
                </h4>
                <div className="card-img val-crd-img">
                  <Image
                    src={value.imageSrc}
                    alt={value.imageAlt}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div className="development-card__content">
                  <h4 className="card-title">{value.title}</h4>
                  <p className="development-card__text">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
