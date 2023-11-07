'use client'

import React from 'react'
import Image from 'next/image';
import { useState } from 'react'

import bgShortenDesktop from '@/public/images/bg-shorten-desktop.svg';
import bgShortenMobile from '@/public/images/bg-shorten-mobile.svg';

import iconBrandRecognition from '@/public/images/icon-brand-recognition.svg';
import iconDetailedRecords from '@/public/images/icon-detailed-records.svg';
import iconFullyCustomizable from '@/public/images/icon-fully-customizable.svg';


type urls = {
    inputLink: string
    shortLink: string
}

const Urls: urls[] = [
]

const sectionInfo = [
    { src: iconBrandRecognition, title: 'Brand Recognition ', paragraph: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.', rebanClass: 'sm:h-2 sm:w-16 h-16 w-2', className: 'mt-0' },
    { src: iconDetailedRecords, title: 'Detailed Records', paragraph: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.', rebanClass: 'sm:h-2 sm:w-16 h-16 w-2', className: 'sm:mt-12 mt-4' },
    { src: iconFullyCustomizable, title: 'Fully Customizable', paragraph: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.', rebanClass: '', className: 'mt-6 sm:mt-24' },
]


export default function AdvanceStatistics() {

    const [url, setUrl] = useState(Urls)

    // const nubmer = 1
    const [nubmer, setNumber] = useState(1)

    return (
        <>
            {/* <section className='bg-green-400 h-[100px] text-back pl-4'>

                <p>
                    {nubmer}
                </p>
                <button onClick={() => setNumber(nubmer + 1)} className='border-2 px-3 bg-white ml-3'>update number</button>
            </section> */}



            <div className="flex flex-col relative justify-center items-center w-full  sm:gap-4 xl:gap-10 bg-Gray mt-28 bg-opacity-60">
                <section className="flex flex-col  px-8 -mt-28 sm:-mt-16 xl:-mt-14 mb-2  relative h-[220px] sm:h-[150px]  w-full items-center justify-center ">
                    <div className="absolute sm:px-20 px-4 w-full">
                        <Image src={bgShortenDesktop} alt={''} className='bg-DarkViolet  w-full rounded-lg h-full sm:flex hidden' />
                        <Image src={bgShortenMobile} alt={''} className='bg-DarkViolet  w-full rounded-lg h-full   sm:hidden flex' />
                    </div>

                    <div className="flex  z-10 w-full  items-start gap-1 p-4 sm:px-24 justify-center flex-col sm:flex-row">
                        <div className="flex  gap-1 items-start justify-start w-full   flex-col">
                            <input type="text" placeholder='Shorten a link here... ' className=' h-14 rounded-md outline-none px-2 sm:w-[96%] w-full hover:ring-2 hover:ring-Red ' />


                            <h1 className='text-start w-full text-Red text-sm'>Please add a link</h1>
                        </div>
                        <button className='rounded-md bg-Cyan bg-opacity-80 hover:bg-opacity-100 p-4 px-6 text-white sm:w-[20%] w-full'>Shorten it!</button>
                    </div>
                </section>
                <section className='flex gap-3 flex-col w-full sm:px-20 px-4'>


                    <div className=" bg-white   rounded-md flex justify-between sm:items-center items-start p-4 sm:flex-row flex-col w-full sm:gap-10 gap-4">
                        <h2 className='text-VeryDarkViolet  w-full sm:w-[520px] pr-4 overflow-hidden '>Inputs</h2>
                        <hr className='w-full sm:hidden' />
                        <div className="flex items-center gap-4 sm:flex-row flex-col w-full sm:w-80 ">
                            <h2 className='text-Cyan w-full sm:text-end text-start'>Out link</h2>
                            <button className='rounded-md bg-Cyan hover:bg-opacity-80 bg-opacity-100 p-2 px-6 sm:w-28 text-white w-full'>Copied!</button>
                        </div>
                    </div>
                    <div className=" bg-white   rounded-md flex justify-between sm:items-center items-start p-4 sm:flex-row flex-col w-full sm:gap-10 gap-4">
                        <h2 className='text-VeryDarkViolet  w-full sm:w-[520px] pr-4 overflow-hidden '>Inputs</h2>
                        <hr className='w-full sm:hidden' />
                        <div className="flex items-center gap-4 sm:flex-row flex-col w-full sm:w-80 ">
                            <h2 className='text-Cyan w-full sm:text-end text-start'>Out link</h2>
                            <button className='rounded-md bg-Cyan hover:bg-opacity-80 bg-opacity-100 p-2 px-6 sm:w-28 text-white w-full'>Copied!</button>
                        </div>
                    </div>

                </section>

                <div className='flex flex-col items-center gap-10  bg-opacity-20 sm:p-20 p-10 '>

                    <div className="flex flex-col   text-center sm:w-[530px] gap-4  w-full">

                        <h3 className='text-3xl font-bold '>Advance Statistics</h3>
                        <p className="px-8 font-semibold text-GrayishViolet text-sm">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                    </div>

                    <div className="flex sm:flex-row flex-col">
                        {sectionInfo.map((item, index) => (
                            <div className="flex sm:flex-row flex-col  items-center  ">


                                <div className={`flex flex-col bg-white p-6 rounded-md pt-10 gap-4 relative items-center text-center sm:items-start sm:text-start  ${item.className}`}>
                                    <div className={`absolute bg-black rounded-full p-3 h-12 w-12 -top-6  sm:left-4 left-[124px] `}>  <Image src={item.src} alt={item.title} className='' /></div>

                                    <h3 className=" font-bold ">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-GrayishViolet">
                                        {item.paragraph}
                                    </p>
                                </div>
                                <div className={`${item.rebanClass} bg-Cyan items-center `}></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div></>
    )
}