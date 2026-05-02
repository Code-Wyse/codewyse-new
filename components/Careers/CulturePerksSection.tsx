'use client';

import Image from 'next/image';
import Link from 'next/link';

const perks = [
  {
    img: '4-day-schedule.svg',
    alt: '4-day Schedule',
    title: 'Optional compressed 4-day Work Week',
    text: 'Codewyse employees have the option to have Fridays off and choose to work their 37.5 hours in a 4-day or a 5-day schedule. Their choice.',
  },
  {
    img: 'flexible-hours.svg',
    alt: 'Flexible Hours',
    title: 'Flexible Hours',
    text: "Codewyse's virtual office is open 10am - 3pm EST, Monday-Thursday. Outside of those core hours, our team works whenever it works for them.",
  },
  {
    img: 'remote-work.svg',
    alt: 'Remote Work',
    title: 'Fully Remote Work',
    text: 'We’re a fully remote company and we always will be. We don’t have a physical office. You start working when you virtually log on, not when you physically walk in.',
  },
  {
    img: 'modern-tech.svg',
    alt: 'Modern Tech',
    title: 'Modern Tech',
    text: "Codewyse is not BYOT (Bring your own Tech). We give our staff their choice of technical equipment, Mac or PC. And we give you a renewable annual stipend to set up your home office any way you'd like.",
  },
  {
    img: 'award-winning-HR.svg',
    alt: 'Award Winning HR',
    title: 'Award-Winning Human Resources Department',
    text: (
      <>
        Celebrated for having one of Canada&apos;s Most Admired Corporate Cultures, their award-winning Human Resources
        team, recognized by HIO and Employers Choice, is committed to fostering employee well-being and happiness. Read
        all about our all-star success.
      </>
    ),
  },
  {
    img: 'award-winning-team.svg',
    alt: 'Award Winning Team',
    title: 'A Commitment to Diversity, Equity, and Inclusion',
    text: 'At Codewyse, we believe diverse teams build better products. We hire across backgrounds, experiences and geographies, and we work hard to maintain an environment where every engineer, designer and product thinker can do their best work — and grow with us.',
  },
  {
    img: 'sick-leave.svg',
    alt: 'Sick Leave',
    title: 'Generous Sick Leave Policy',
    text:
      'No one is doing their best work when they are feeling unwell. We have generous leave available so our staff can take care of themselves and their families.',
  },
  {
    img: 'holiday.svg',
    alt: 'Holiday',
    title: 'Vacation + Annual Holiday Closures',
    text: 'Outside of regular staff vacation days, Codewyse is closed for two weeks during the holidays.',
  },
  {
    img: 'PDP.svg',
    alt: 'PDP',
    title: 'Education and professional development Budgets',
    text: 'Regular skills training workshops, annual individual training budgets, and access to platforms like LinkedIn Learning.',
  },
  {
    img: 'medical-benefits.svg',
    alt: 'Medical Benefits',
    title: 'Medical & Dental Benefits',
    text: 'Includes medical, dental, LTD, life insurance, and more.',
  },
  {
    img: 'health-spending.svg',
    alt: 'Health Spending',
    title: 'Additional $500 health spending account',
    text: 'Funds for vision, paramedical services, and more!',
  },
  {
    img: 'psychology.svg',
    alt: 'Psychology',
    title: '$1000 Psychology Benefits Coverage',
    text: 'We provide stipends for psychological support like psychotherapy and psychology services.',
  },
  {
    img: 'EAP.svg',
    alt: 'EAP',
    title: 'Full Employee EAPs (Employee Assistance Plans)',
    text: 'Covers counselling for stress, divorce, mental health, and more for you and your family.',
  },
  {
    img: 'mental-support.svg',
    alt: 'Mental Support',
    title: 'On-Going Integrated Mental Health Support',
    text: 'Regular workshops on burnout, work-life balance, stress, and financial planning.',
  },
  {
    img: 'virtual-work.svg',
    alt: 'Virtual Work',
    title: 'A Fully Virtual Work Culture',
    text: 'Bi-weekly socials and interest-based online groups (D&D, video games, crafting, etc).',
  },
  {
    img: 'donut-chart.svg',
    alt: 'Donut Chart',
    title: 'Donut-Chats',
    text: 'We use Donut (a Slack app) to help staff connect and build positive relationships.',
  },
];

const CulturePerksSection = () => {
  return (
    <section className="section--accent section--perks px-auto" id="perks">
      {/* <Image
        className="section__accent section__accent--top"
        src="/images/accent-top.svg"
        alt="Our Culture"
        width={1440}
        height={80}
      /> */}
      <div className="container">
<h2 className="mb-5 pr-0 process__subtitle__header w-full  text-[18px]  font-bold text-black  dark:text-white lg:text-[28px] ">
Our Culture + Perks
              </h2>
                      <ol className="numbered-grid flex flex-wrap">
          {perks.map((perk, idx) => (
            <li key={idx} className='lg:w-[30%] w-[100%] '>
              <div className="numbered-grid__img">
                <Image src={`/images/${perk.img}`} alt={perk.alt} width={64} height={64} />
              </div>
              <div className="numbered-grid__content">
                <h3 className={idx === perks.length - 1 ? 'last exclamation' : ''}>{perk.title}</h3>
                <p>{perk.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      {/* <Image
        className="section__accent section__accent--bottom"
        src="/images/accent-bottom.svg"
        alt="Bottom Curve"
        width={1440}
        height={80}
      /> */}
    </section>
  );
};

export default CulturePerksSection;
