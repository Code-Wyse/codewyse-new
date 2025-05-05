// components/WorkWithUs.tsx
import Image from "next/image";

const hiringSteps = [
  { number: 1, title: "Apply", imgSrc: "/images/process-1.svg" },
  { number: 2, title: "HR Interview", imgSrc: "/images/process-2.svg", reverse: true },
  { number: 3, title: "Skills Challenge", imgSrc: "/images/process-3.svg" },
  { number: 4, title: "Hiring Manager Interviews", imgSrc: "/images/process-4.svg", reverse: true },
  { number: 5, title: "Acceptance", imgSrc: "/images/process-5.svg" },
];

const WorkWithUs = () => {
  return (
    <section className="section-process section-service-process">
      <div className="container">
        <div className="process">
          <div className="process__curve">
            <Image src="/images/service-bg-grey-phone.png" alt="" width={600} height={300} />
          </div>

          <div className="process__header">
            <h2 className="process__title exclamation text-center" id="work-with-us" style={{ paddingTop: "15px" }}>
              Work With Us
            </h2>
            <p className="process__text text-center">We’re always looking for kind, talented people to join the team!</p>
          </div>

          <div className="no-jobs-row">
            <h4 className="no__jobs__title">
              We may not have open roles right now,<br /> but we're always on the lookout for great talent
            </h4>
            <p>
              <a href="mailto:hiring@Codewyse.ca" className="link-color">
                Send us your resume
              </a>{" "}
              and be the first to know about future opportunities.
            </p>
            <Image
              src="/images/no-positions-open.png"
              alt="No jobs"
              className="no__jobs__image"
              width={400}
              height={300}
            />
          </div>

          <div className="process__subtitle__header">
            <h3 className="process__subtitle">Our Hiring Process</h3>
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

export default WorkWithUs;
