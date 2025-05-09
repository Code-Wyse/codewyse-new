import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const TestimonialsSection = () => {
  return (
    <section className="bg-base-200" id="testimonials">
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-black">
              7019 makers built AI tools, SaaS, and more
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
            They made their first $ online, and some even quit their 9-5!
          </p>
        </div>
        <ul role="list" className="max-w-7xl mx-auto md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6">


          <li className="break-inside-avoid max-md:flex justify-center">
            <div className="max-w-[550px] border border-base-content/20 rounded-xl">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <video
                  className="w-full"
                  poster="https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source
                    src="https://d1wkquwg5s1b04.cloudfront.net/landing/jack2.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity" />
                <div className="absolute w-full bottom-0 z-50">
                  <div className="flex justify-between items-end p-4">
                    <button className="group" type="button" title="Play video">
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="text-gray-50 w-[50px] h-[50px] group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                      />
                    </button>
                    <div className="animate-opacity text-right">
                      <p className="text-gray-50 font-medium drop-shadow">Jack F.</p>
                      <div className="rating flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className="w-5 h-5 text-primary drop-shadow"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                <div>
                  "I shipped in 6 days as a noob coder... This is awesome"
                </div>
              </div>
            </div>
          </li>
          {/* 2nd */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-[#2d1e1a]">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <img
                    alt="Sergiu Chiriac's testimonial for ShipFast"
                    loading="lazy"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-cover"
                    src="/_next/static/media/sergiu.9d908463.jpeg"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">Sergiu Chiriac</div>
                    <div className="mt-0.5 text-sm text-base-content/60">@sergiu</div>
                  </div>
                  <a
                    href="https://www.producthunt.com/posts/shipfast-2?comment=2707228"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="See user review on Product Hunt"
                    className="shrink-0"
                  >
                    <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-[#da552f]" />
                  </a>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 3rd */}
          <li
            className="break-inside-avoid bg-transparent justify-center h-full max-md:flex"
            data-theme="dark"
            data-conversation="none"
            data-cards="hidden"
            data-align="center"
          >
            <article className="p-4 border border-base-content/20 rounded-xl bg-[#1a1a1a] max-w-xl w-full text-base-content">
              {/* Header */}
              <div className="flex items-start gap-3">
                <a
                  href="https://twitter.com/VicPivots/status/1697352442986250413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/1697968749951787008/cPn7RJlN_normal.jpg"
                    alt="⚡️ Victor Abeledo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </a>
                <div className="flex flex-col">
                  <a
                    href="https://twitter.com/VicPivots/status/1697352442986250413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm hover:underline"
                  >
                    ⚡️ Victor Abeledo
                  </a>
                  <a
                    href="https://twitter.com/VicPivots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-base-content/60 hover:underline"
                  >
                    @VicPivots
                  </a>
                </div>
                <div className="ml-auto">
                  <a
                    href="https://twitter.com/VicPivots/status/1697352442986250413"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on Twitter"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-base-content/50 hover:fill-base-content" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Tweet Body */}
              <p className="mt-4 text-sm leading-relaxed">
                Marc, I got your boilerplate and having the payments setup with Stripe + user auth is a blessing. This will save me like a week of work for each new side project I spin up.
                <br />
                <br />
                I appreciate that it's well documented, as well.
                <br />
                <br />
                100% worth it 🚀🚀🚀
              </p>

              {/* Footer */}
              <div className="mt-4 text-xs text-base-content/60 flex items-center justify-between">
                <a
                  href="https://twitter.com/VicPivots/status/1697352442986250413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  1:55 AM · Sep 1, 2023
                </a>
                <a
                  href="https://twitter.com/VicPivots/status/1697352442986250413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Read 1 reply
                </a>
              </div>
            </article>
          </li>
          {/* 4rth */}

          <li className="break-inside-avoid max-md:flex justify-center">
            <div className="max-w-[550px] border border-base-content/20 rounded-xl">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <video
                  className="w-full"
                  poster="https://d1wkquwg5s1b04.cloudfront.net/landing/alex.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source
                    src="https://d1wkquwg5s1b04.cloudfront.net/landing/alex.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
                <div className="absolute w-full bottom-0 z-50">
                  <div className="flex justify-between items-end p-4">
                    <button
                      className="group"
                      type="button"
                      title="Play video"
                    >
                      <FontAwesomeIcon
                        icon={faPlay}
                        size="2x"
                        className="text-gray-50 group-hover:scale-[1.05] transition-transform duration-100 ease-in drop-shadow-lg animate-opacity"
                      />
                    </button>
                    <div className="animate-opacity text-right">
                      <p className="text-gray-50 font-medium drop-shadow">
                        Álex Martinez
                      </p>
                      <div className="rating flex gap-1 justify-end">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className="text-primary w-5 h-5 drop-shadow"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                <div>"Everything you need to ship your SaaS ASAP"</div>
              </div>
            </div>
          </li>
          {/* 5th */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  Even though it's Christmas, I'm shipping anyway! shipfa.st was{" "}
                  <span className="">
                    my best purchase in 2023! 🚀
                  </span>
                </div>
              </blockquote>

              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <Image
                    alt="Silvestro's testimonial for ShipFast"
                    src="/images/sass/user_avatart.jpeg"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">
                      Silvestro
                    </div>
                    {/* Optional Rating */}
                    <div className="flex gap-1 pt-1">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="text-primary w-4 h-4"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 6th */}

          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  <span className="">
                    I launched a week and a half ago and I'm at $450 MRR
                  </span>{" "}
                  which is a new, awesome experience for me. I'd still be pre-launch
                  if it wasn't for you and ShipFast!
                </div>
              </blockquote>

              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <Image
                    alt="Christian Hatch's testimonial for ShipFast"
                    src="/images/sass/user_avatart.jpeg"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">
                      Christian Hatch
                    </div>
                    {/* Optional: Add star rating here if desired */}
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 7th */}

          <li className="break-inside-avoid max-md:flex justify-center">
            <div className="max-w-[550px] border border-base-content/20 rounded-xl">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <video
                  className="w-full"
                  poster="https://d1wkquwg5s1b04.cloudfront.net/landing/mateuszPoster.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source
                    src="https://d1wkquwg5s1b04.cloudfront.net/landing/mateuszTestimonial.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Video gradient blur overlay */}
                <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>

                {/* Play button & user info */}
                <div className="absolute w-full bottom-0 z-50">
                  <div className="flex justify-between items-end p-4">
                    <button
                      className="group"
                      type="button"
                      title="Play video"
                    >
                      {/* <FaPlay
                  className="w-[50px] h-[50px] text-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                /> */}
                    </button>

                    <div className="animate-opacity text-right">
                      <p className="text-gray-50 font-medium drop-shadow">
                        Mateusz Siatrak
                      </p>
                      <div className="rating flex gap-1 justify-end mt-1">
                        {/* {Array.from({ length: 5 }).map((_, i) => (
                    // <faStar
                    //   key={i}
                    //   className="w-5 h-5 text-primary drop-shadow"
                    // />
                  ))} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial quote text */}
              <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                <div>"Yesterday I've made a first sale !! 🎉🎊🍾"</div>
              </div>
            </div>
          </li>
          {/* 8th */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  <div className="space-y-2">
                    {/* Top image */}
                    <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                      <Image
                        alt="Juanjo's testimonial for ShipFast"
                        src="/images/sass/user_avatart.jpeg"
                        width={250}
                        height={500}
                        className="w-full object-cover mb-6"
                      />
                    </div>

                    {/* Testimonial text */}
                    <p>
                      <span className="">
                        I made more in 6 days than the minimum wage here in Spain.
                      </span>{" "}
                      I wanna cry 🥲 It would have taken me months to do the website without the boilerplate.
                    </p>
                  </div>
                </div>
              </blockquote>

              {/* Author details */}
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <Image
                    alt="Juanjo Valiño's testimonial for ShipFast"
                    src="/images/sass/user_avatart.jpeg"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">Juanjo Valiño</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 9th */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  I transitioned{" "}
                  <span className="">
                    from using no-code tools to launching a fully-coded saas
                  </span>{" "}
                  — Explorify — in two weeks, all while having a full-time job
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <Image
                    alt="Gabriel's testimonial for ShipFast"
                    src="/images/sass/user_avatart.jpeg"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">Gabriel</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 10th */}
          <li
            className="break-inside-avoid bg-transparent justify-center h-full max-md:flex"
            data-theme="dark"
          >
            <article className="bg-base-100 border border-base-content/20 rounded-xl p-4 max-w-[550px] w-full">
              {/* Header */}
              <div className="flex items-start gap-4 mb-3">
                <Link
                  href="https://twitter.com/imgyf/status/1697549891080532236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Image
                    src="/images/sass/user_avatart.jpeg"
                    alt="Yifan Goh"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </Link>
                <div>
                  <Link
                    href="https://twitter.com/imgyf/status/1697549891080532236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base-content"
                  >
                    Yifan Goh
                  </Link>
                  <div className="text-sm text-base-content/70">@imgyf · Sep 1, 2023</div>
                </div>
              </div>

              {/* Tweet Body */}
              <p className="text-base text-base-content mb-4">
                I wanted to build a new startup with Next.js, and saw{" "}
                <a
                  href="https://twitter.com/marc_louvion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @marc_louvion
                </a>{" "}
                launched{" "}
                <a
                  href="https://shipfa.st"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  shipfa.st
                </a>{" "}
                as a boilerplate for it 🔥
                <br />
                <br />
                Tried it for myself, and I have to say it's a game changer 🚀
                <br />
                <br />
                Comes with easy to follow tutorial, and saves you a ton of time. What’s not to love?
              </p>

              {/* Actions */}
              <div className="text-sm text-base-content/60 flex gap-4 border-t pt-3 border-base-content/10">
                <a
                  href="https://twitter.com/intent/like?tweet_id=1697549891080532236"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ❤️ 46
                </a>
                <a
                  href="https://twitter.com/imgyf/status/1697549891080532236"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 7 replies
                </a>
              </div>
            </article>
          </li>
          {/* 11 */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative text-base xl:text-sm text-base-content">
                <div className="space-y-2">
                  <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                    <Image
                      src="/images/sass/user_avatart.jpeg"
                      alt="Stripe chart"
                      width={550}
                      height={300}
                      className="w-full object-cover mb-6"
                    />
                  </div>
                  <p>
                    Getting <span className="underline">shipfa.st</span> from{" "}
                    <span>@marc_louvion</span> is one of{" "}
                    <span className="">
                      the best decision I've made
                    </span>{" "}
                    since I started indie hacking.
                  </p>
                  <p>
                    It helped me actually getting started instead of procrastinating
                    and it made me release{" "}
                    <span className="underline">snowball.club</span> so much faster
                    than if I tried without it.
                  </p>
                  <p>
                    Oh and the included access to the community of builders is so
                    underrated 🔥
                  </p>
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <Image
                    src="/images/sass/user_avatart.jpeg"
                    alt="PL Bombard's profile photo"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="text-sm font-medium text-base-content">
                  PL Bombard
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 12 */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  That was the best decision I could&apos;ve ever made, delivered the product within days and{" "}
                  <span className="">
                    made 8x the boilerplate cost 🤑
                  </span>
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  <Image
                    src="/images/sass/user_avatart.jpeg"
                    alt="Deepak's testimonial for ShipFast"
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">Deepak</div>
                    <div className="mt-0.5 text-sm text-base-content/60">@peepakkhatri_01</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 13 */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <div className="max-w-[550px] border border-base-content/20 rounded-xl">
              <div className="relative w-full overflow-hidden rounded-t-xl">
                <video
                  className="w-full"
                  poster="https://d1wkquwg5s1b04.cloudfront.net/landing/larry.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source
                    src="https://d1wkquwg5s1b04.cloudfront.net/landing/larry.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
                <div className="absolute w-full bottom-0 z-50">
                  <div className="flex justify-between items-end p-4">
                    <button
                      className="group"
                      type="button"
                      title="Play video"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                    <div className="animate-opacity text-right">
                      <p className="text-gray-50 font-medium drop-shadow">Larry</p>
                      <div className="rating">
                        {/* Render stars with FontAwesome */}
                        {[...Array(5)].map((_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className="w-5 h-5 text-primary drop-shadow"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl">
                <div>"I've already made back the money I spent"</div>
              </div>
            </div>
          </li>
          {/* 14th */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  I managed to{' '}
                  <span className="">
                    exit & sell for 5 figures in a few weeks.
                  </span>{' '}
                  Best investment I've made in so long.
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  {/* <img
                    alt="Jaya B.'s testimonial for ShipFast"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                    src="/_next/static/media/jaya.378a189f.jpg"
                  /> */}
                  <Image 
                  src={'/images/sass/user_avatart.jpeg'}
                  alt="img"
                  width={48}
                  height={48}
                  className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">Jaya B.</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 15th */}
          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  <div className="space-y-2">
                    <div className="-mx-6 -mt-6 rounded-t-xl overflow-hidden">
                      {/* <img
                        alt="Jack's $800 MRR"
                        loading="lazy"
                        width="250"
                        height="200"
                        decoding="async"
                        className="w-full object-cover mb-6"
                        srcSet="/_next/static/media/jackrrr.413f6831.png 1x, /_next/static/media/jackrrr.413f6831.png 2x"
                        src="/_next/static/media/jackrrr.413f6831.png"
                      /> */}
                      <Image 
                  src={'/images/sass/user_avatart.jpeg'}
                  alt="img"
                  width={48}
                  height={48}
                  className="w-10 h-10 rounded-full object-cover"
                  />
                    </div>
                    <p>No ShipFast (left) VS. ShipFast (right)</p>
                    <p>
                      I wouldn't have done it without the boilerplate. Thanks Marc ♥️🫂
                    </p>
                  </div>
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  {/* <img
                    alt="Jack Friks's testimonial for ShipFast"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                    srcSet="/_next/static/media/jackpfp.38e84582.jpg 1x, /_next/static/media/jackpfp.38e84582.jpg 2x"
                    src="/_next/static/media/jackpfp.38e84582.jpg"
                  /> */}
                  <Image 
                  src={'/images/sass/user_avatart.jpeg'}
                  alt="img"
                  width={48}
                  height={48}
                  className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">
                      Jack Friks
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>

          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  It's an amazing minimalist, lightweight boilerplate with
                  well-organized code. It has almost all the core features you would
                  want in a SaaS boilerplate. As a new team last year it actually took
                  us months to build a similar set of features at a stable level.
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  {/* <img
                    alt="Zawwad Ul Sami's testimonial for ShipFast"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                    srcSet="/_next/static/media/zawwad.c710afb5.jpg 1x, /_next/static/media/zawwad.c710afb5.jpg 2x"
                    src="/_next/static/media/zawwad.c710afb5.jpg"
                  /> */}
                  <Image 
                  src={'/images/sass/user_avatart.jpeg'}
                  alt="img"
                  width={48}
                  height={48}
                  className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">
                      Zawwad Ul Sami
                    </div>
                    <div className="mt-0.5 text-sm text-base-content/60">@zawwadx</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>

          <li className="break-inside-avoid max-md:flex justify-center">
            <figure className="relative h-full w-full max-w-[550px] p-6 rounded-xl border border-base-content/20 bg-base-100">
              <blockquote className="relative">
                <div className="text-base xl:text-sm text-base-content">
                  Setting up everything from the ground up is a really hard, and time
                  consuming process. What you pay for will{' '}
                  <span className="">
                    save you a lot of time
                  </span>
                  .
                </div>
              </blockquote>
              <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/10">
                <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                  {/* <img
                    alt="Naveen's testimonial for ShipFast"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                    srcSet="/_next/static/media/naveen.311d3eb1.jpeg 1x, /_next/static/media/naveen.311d3eb1.jpeg 2x"
                    src="/_next/static/media/naveen.311d3eb1.jpeg"
                  /> */}
                  <Image 
                  src={'/images/sass/user_avatart.jpeg'}
                  alt="img"
                  width={48}
                  height={48}
                  className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="w-full flex items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-medium text-base-content">Naveen</div>
                    <div className="mt-0.5 text-sm text-base-content/60">@the_mcnaveen</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          {/* 16 */}




        </ul>
      </div>
    </section>
  )
}

export default TestimonialsSection