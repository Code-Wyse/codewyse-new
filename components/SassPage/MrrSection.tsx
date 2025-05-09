import Image from 'next/image'
import React from 'react'
import CommaIconScg from '../IconsSvg/CommaIconScg'
import HackerNewSvg from '../IconsSvg/HackerNewSvg'
import ProductHuntSvg from '../IconsSvg/ProductHuntSvg'
import TwitterIconSvg from '../IconsSvg/TwitterIconSvg'
import RadditIconSvg from '../IconsSvg/RadditIconSvg'

function MrrSection() {
  return (
    <section className="p-8 md:p-12 space-y-16">
    <div className="flex-col md:flex-row max-md:items-center flex gap-8 max-w-2xl mx-auto">
        <Image
        alt='mrr image'
        src={'/images/sass/mrr-image.jpg'}
        width={288}
        height={230}
        />
        {/* <img
            alt="PostBridge MRR screenshot" loading="lazy" width="288" height="230" decoding="async" data-nimg="1"
            className="w-80 rounded object-cover shadow md:brightness-90 hover:brightness-100 duration-100"
            style="color:transparent"
            srcset="/_next/static/media/jackMrrScreen.cf989856.jpg 1x, /_next/static/media/jackMrrScreen.cf989856.jpg 2x"
            src="/_next/static/media/jackMrrScreen.cf989856.jpg"> */}
        <div className="space-y-4 max-w-md mx-auto">
            <CommaIconScg />
            <p className="md:text-lg leading-relaxed max-md:text-center text-black" >Without ShipFast I might have never launched my
                SaaS and I would still be at $0 MRR.</p>
            <div className="flex items-center gap-2 max-md:justify-center">
                <Image 
                alt='user image'
                src={'/images/sass/user_avatart.jpeg'}
                width={40}
                height={40}
                />
                {/* <img alt="Jack Friks testimonial for ShipFast"
                    loading="lazy" width="48" height="48" decoding="async" data-nimg="1"
                    className="w-10 h-10 rounded-full object-cover" style="color:transparent"
                    srcset="/_next/static/media/jackpfp.38e84582.jpg 1x, /_next/static/media/jackpfp.38e84582.jpg 2x"
                    src="/_next/static/media/jackpfp.38e84582.jpg"> */}
                <p>Jack Friks</p>
            </div>
            <div className="max-md:flex max-md:justify-center"><span className="text-black badge badge-accent badge-outline gap-1">Built
                    <span className="select-all">post-bridge.com</span></span></div>
        </div>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8"><span
            className="text-xs text-[14px] text-black">Featured on</span>
            <a
            href="#" target="_blank" className='flex group gap-3 item-center' rel="noreferrer"
            title="Featured on Hackers New">
                <HackerNewSvg /><p className='pl-8'>Hacker News</p>
            </a>
            <a href="#" target="_blank" className='flex items-center gap-1' rel="noreferrer"
            title="Featured on Product Hunt">
                <ProductHuntSvg /> <p className='pl-9'>Product Hunt</p>
            </a><a href="#" target="_blank"
            rel="noreferrer" title="Featured on X.com">
               <TwitterIconSvg />
            </a><a
            href="#"
            target="_blank" rel="noreferrer" title="Featured on Reddit">
               <RadditIconSvg />
            </a></div>
</section>
  )
}

export default MrrSection