// components/OurProcessSection.tsx
import Image from "next/image";
import '../../app/style.css';


const hiringSteps = [
  { number: 1, title: "Discovery Align Goals", imgSrc: "/images/services-process-1.svg" },
  { number: 2, title: "Pre-Production Research & Blueprint", imgSrc: "/images/services-process-2.svg", reverse: true },
  { number: 3, title: "Production Design / Develop / Test", imgSrc: "/images/services-process-3.svg" },
  { number: 4, title: "Launch Deployment", imgSrc: "/images/services-process-4.svg", reverse: true },
  { number: 5, title: "Support Continued Monitoring", imgSrc: "/images/services-process-5.svg" },
];

const OurProcessSection = () => {
  return (
    <section className="section-process section-service-process">
      <div className="container">
        <div className="process mb-5">

          

          <div className="process__subtitle__header">
            <h3 className="process__subtitle" style={{
                fontSize: '2.3rem',
                fontWeight: 'bold'
            }}>Our  Process</h3>
            <p className="lg:w-1/2 w-full mb-5 mx-auto">Communication is the foundation of our process. You’ll always know what we’re doing, why, and what comes next. We put the needs of our clients and their customers at the centre of everything we do.</p>
          </div>

          <div className="process__row">
            {hiringSteps.map(({ number, title, imgSrc, reverse }) => (
              <div
                key={number}
                className={`process__card ${reverse ? "process__card--reverse" : ""}`}
              >
                <div className="process-card__img">
                  <Image src={imgSrc} alt={title} width={200} height={200} />
                </div>
                <div className="process__content">
                  <h4 className="process-content__heading">
                    {number}
                    <span className="process-dot">.</span> {title.includes(" ") ? (
                      <>
                        {title.split(" ").slice(0, 1).join(" ")} <br />
                        {title.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      title
                    )}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
