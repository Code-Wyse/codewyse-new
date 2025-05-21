// components/HistorySlider.tsx
'use client';

import { useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../app/style.css';




type Slide = {
    //   date: string;
    month: string;
    year: string;
    background: string;
    content: React.ReactNode;
};

const slides: Slide[] = [
    {
        month: 'JULY',
        year: '2023',
        // date: 'NOV 2008',
        background: '/images/about-us/2009-bg.svg',
        content: (
            <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>
                Codewyse is founded by a group of passionate tech professionals, united by a vision to create transformative digital solutions—ranging from custom software and web platforms to AI-powered systems.

            </p>
        ),
    },
    {
        month: 'OCT',
        year: '2023',
        // date: 'SEP 2009',
        background: '/images/about-us/2009-2bg.svg',
        content: (
            <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>
               Codewyse kicks off operations, expanding its team and infrastructure to support a growing portfolio of international clients and cutting-edge AI ventures.


            </p>
        ),
    },
    {
        month: 'APR',
        year: '2024',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-3bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>Codewyse secures the Vnexia project – an AI-powered Health & Safety Monitoring System aimed at revolutionizing safety protocols in industrial environments.</p>
                {/* <Image
                    src="https://assets.Codewyse.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                    className='text-start items-start'
                /> */}
            </>
        ),
    },
    {
        month: 'MAY',
        year: '2024',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-4bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>Codewyse wins the Yeah Store project, focused on building a Frontend Generator integrated with multiple product sources for instant e-commerce deployment.
</p>
                {/* <Image
                    src="https://assets.Codewyse.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                /> */}
            </>
        ),
    },
    {
        month: 'AUG',
        year: '2024',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-4bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>Yeah Store goes live – an advanced Frontend Generator enabling users to instantly deploy storefronts by integrating products from sources like Alibaba, CJ Dropshipping, and Walmart.
</p>
                {/* <Image
                    src="https://assets.Codewyse.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                /> */}
            </>
        ),
    },

    {
        month: 'SEPT',
        year: '2024',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-4bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>Launch of Vnexia – a breakthrough in AI-powered Health & Safety Monitoring, using machine vision and predictive analytics to improve industrial safety in real time.
</p>
                {/* <Image
                    src="https://assets.Codewyse.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                /> */}
            </>
        ),
    },


    {
        month: 'DEC',
        year: '2024',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-4bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>Codewyse enters Web 3.0 with the launch of <b>Tordao</b> – a decentralized platform that redefines digital ownership, identity, and blockchain interaction.</p>
                {/* <Image
                    src="https://assets.Codewyse.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                /> */}
            </>
        ),
    },

    
    {
        month: 'APR',
        year: '2025',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-4bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>A landmark moment for Codewyse – celebrating a year of innovation in AI, e-commerce, and Web 3.0. New global partnerships and developer tools set the stage for the next era of digital transformation.
</p>
                {/* <Image
                    src="https://assets.Codewyse.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                /> */}
            </>
        ),
    },

    // ...more slides (add as needed)
];

export default function HistorySlider() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 600,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="section--history pt-20 pb-10" id="history">
            <div className="container overflow-hidden">
                <div className="mt-3 pb-15">
                 <h2 className="mb-5 pr-0 process__subtitle__header w-full  text-[18px]  font-bold text-black  dark:text-white lg:text-[28px] ">
                Historical Highlights
              </h2>
                </div>
                <Slider {...settings}>
                    {slides.map((slide, index) => (

                        <div
                            className="slider__slide flex flex-col items-center justify-center"
                            key={index}

                        // style={{
                        //     backgroundImage: `url(${slide.background})`,
                        //     backgroundSize: 'cover',
                        //     backgroundRepeat: 'no-repeat',
                        //     backgroundPosition: 'center',
                        //     height: '400px',
                        //     color: '#ffffff',
                        // }}

                        >

                            <div className="slider__slide-content text-center flex-col flex justify-center items-center new_class">
                                <span className="slider__date for-hr">
                                    {slide.month}
                                    <br />
                                    <strong>{slide.year}</strong>
                                </span>
                                <div className="main_divv z-10 relative w-full h-auto lg:w-[350px] lg:h-[350px] mt-5">
                                    <div className="main_image w-full h-auto lg:w-[350px] lg:h-[350px]">
                                        <Image
                                            alt='bg Image'
                                            src={slide.background}
                                            width={350}
                                            height={350}

                                        />
                                    </div>

                                <div className='absolute top-0 bottom-0 flex-col px-8 flex justify-center items-start text-start  z-30 w-full overflow-hidden text-white  left-0 right-0 '>{slide.content}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
