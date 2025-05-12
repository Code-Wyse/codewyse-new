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
        month: 'NOV',
        year: '2008',
        // date: 'NOV 2008',
        background: '/images/about-us/2009-bg.svg',
        content: (
            <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>
                <a href="/teams/vicki-iverson">Vicki Iverson</a> starts a freelance hustle in iPhone app development.
            </p>
        ),
    },
    {
        month: 'SEP',
        year: '2009',
        // date: 'SEP 2009',
        background: '/images/about-us/2009-2bg.svg',
        content: (
            <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>
                <a href="/teams/vicki-iverson">Vicki Iverson</a> and{' '}
                <a href="/teams/matt-strentse">Matt Strentse</a> partner to officially found Iversoft, a mobile
                development agency, in their Toronto dining room.
            </p>
        ),
    },
    {
        month: 'NOV',
        year: '2009',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-3bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>The first <strong>Iversoft Solitaire game</strong> launches in the App Store.</p>
                <Image
                    src="https://assets.iversoft.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                    className='text-start items-start'
                />
            </>
        ),
    },
    {
        month: 'NOV',
        year: '2009',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-4bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>The first <strong>Iversoft Solitaire game</strong> launches in the App Store.</p>
                <Image
                    src="https://assets.iversoft.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                />
            </>
        ),
    },
    {
        month: 'NOV',
        year: '2009',
        // date: 'NOV 2009',
        background: '/images/about-us/2009-4bg.svg',
        content: (
            <>
                <p style={{
                fontSize: '1.375rem',
                fontWeight: '400'
            }}>The first <strong>Iversoft Solitaire game</strong> launches in the App Store.</p>
                <Image
                    src="https://assets.iversoft.ca/editor/images/shared_folder/appicon-nov09.png"
                    alt="Solitaire App Icon"
                    width={105}
                    height={105}
                />
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
                <h2 className='text-center text-4xl font-bold'>Historical Highlights</h2>
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
