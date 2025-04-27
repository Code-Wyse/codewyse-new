"use client";
import SectionHeader from '@/components/Common/SectionHeader'
import ImageGrid from '@/components/project-details/ImageGrid';
import Image from 'next/image'
import { title } from 'process';
import React, { useState } from 'react'

type ProjectTab = {
    id: string;
    title: string;
    content: string;
};

const ProjectTabs: ProjectTab[] = [
    {
        id: 'tabOne',
        title: 'Web design',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus viverra quam eget vitae fermentum.',
    },
    {
        id: 'tabTwo',
        title: 'Web development',
        content: 'Mi, porta arcu quam turpis mauris aliquam ut. Auctor egestas mi tellus, sollicitudin maecenas.',
    },
    {
        id: 'tabThree',
        title: 'Branding',
        content: 'Id porta facilisi at adipiscing. Tellus et etiam urna in consectetur. Sem ante tristique etiam aliquam accumsan.',
    },
];

function page() {
    const [currentTab, setCurrentTab] = useState<string>('tabOne');

    return (
        <section className="pt-[100px] pb-10">
            <div className=" mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
                <div className="flex flex-col justify-center items-center">
                    <Image src={"/images/project-details/banner-pic.jpg"}
                        width={900}
                        height={370}
                        alt='banner-image'
                        className='object-cover object-center !h-[370px] w-full  rounded-[8px]'
                    />
                    <div className="mt-10">
                        <SectionHeader
                            headerInfo={{
                                title: "Our Recent Work",
                                subtitle: "",
                                description: ``,
                            }}
                        />
                        <div className="">
                            <h4 className='mx-auto text-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3'>Custom Wordpress Website designs</h4>
                            <p className='mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint necessitatibus blanditiis autem quia quasi voluptate? Est, numquam vero! Provident quaerat mollitia illo incidunt! Eum tempora, quis hic eius ducimus dolor?</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-20 gap-10">
                    <div className="flex w-[50%] flex-col items-start">
                        <h4 className='mb-5 pr-16 text-4xl font-bold text-black dark:text-white '>The process</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus viverra quam eget vitae fermentum. Mi, porta arcu quam turpis mauris aliquam ut. Auctor egestas mi tellus, sollicitudin maecenas. Id porta facilisi at adipiscing. Tellus et etiam urna in consectetur. Sem ante tristique etiam aliquam accumsan. Diam amet, sit feugiat dui viverra. Consectetur non nibh morbi mi quis egestas massa id. A ut pellentesque faucibus sapien morbi in vitae.</p>

                    </div>
                    <div className="flex flex-col w-[50%] items-start">
                        <div className="flex gap-4">
                            {ProjectTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setCurrentTab(tab.id)}
                                    aria-label={`Go to ${tab.title} tab`}
                                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        <div className="block mt-5 pl-3">
                            {ProjectTabs.map((feature) => (
                                <div
                                    className={feature.id === currentTab ? "block" : "hidden"}
                                    key={feature.id}
                                >
                                    <div className="inner-content">
                                        <h2 className='mb-5 pr-16 text-4xl font-bold text-black dark:text-white '>{feature.title}</h2>
                                        <p>{feature.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="mt-10">
                    <ImageGrid />
                </div>
                <div className="mt-10 flex justify-between gap-10">
                    <div className="flex  h-[45%]flex-col h-auto w-[50%]">
                        <Image
                            src={'/images/project-details/last-portfolio_img.jpg'}
                            height={200}
                            width={633}
                            alt='lst-img'
                            className='h-[45%] object-cover  rounded-[20px] '
                        />
                    </div>
                    <div className="flex flex-col  w-[50%] h-auto">
                        {/* <h4 className='mb-5 pr-16 text-4xl font-bold text-black dark:text-white '>The process</h4> */}
                        <p>Donec non magna tincidunt ante tempor blandit. Vestibulum ut massa ut nunc vulputate vulputate eu nec lorem. Sed et neque ut tortor commodo vulputate at et justo. Praesent est neque, suscipit vel diam ut, dictum cursus risus. Pellentesque ultrices diam ut magna efficitur commodo. Nulla non metus est. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <br />
                        <br />
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non erat in lorem luctus lacinia ac ac nisl. Sed blandit ligula a lectus rhoncus, in malesuada justo ultrices. Integer eu ante commodo risus molestie sodales dapibus sit amet est. Ut luctus non purus vel dictum. Phasellus maximus fringilla diam vitae tempus. Suspendisse lacinia porttitor nulla pellentesque maximus. Proin pretium tortor a ante lobortis condimentum. Nullam pretium arcu vel facilisis semper. Maecenas at velit venenatis, auctor est nec, dictum orci. Nam dolor nibh, iaculis in diam in, lobortis scelerisque lorem. Phasellus ut lorem non elit egestas blandit.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default page