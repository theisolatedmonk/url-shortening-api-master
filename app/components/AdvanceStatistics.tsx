import React from 'react'
import Image from 'next/image';
import iconBrandRecognition from '@/public/images/icon-brand-recognition.svg';
import iconDetailedRecords from '@/public/images/icon-detailed-records.svg';
import iconFullyCustomizable from '@/public/images/icon-fully-customizable.svg';

const sectionInfo = [
    { src: iconBrandRecognition, title: 'Brand Recognition ', paragraph: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.', rebanClass: 'sm:h-2 sm:w-16 h-16 w-2', className: 'mt-0' },
    { src: iconDetailedRecords, title: 'Detailed Records', paragraph: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.', rebanClass: 'sm:h-2 sm:w-16 h-16 w-2', className: 'sm:mt-12 mt-4' },
    { src: iconFullyCustomizable, title: 'Fully Customizable', paragraph: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.', rebanClass: '', className: 'mt-6 sm:mt-24' },
]


export default function AdvanceStatistics() {
    return (
        <div className='flex flex-col items-center gap-10 bg-GrayishViolet sm:p-20 p-10 '>

            <div className="flex flex-col   text-center sm:w-[530px] gap-4  w-full">

                <h3 className='text-3xl font-bold '>Advance Statistics</h3>
                <p className="px-8 font-semibold text-Gray text-sm">Track how your links are performing across the web with our advanced statistics dashboard.</p>
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
    )
}