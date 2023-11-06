import React from 'react'
import Image from 'next/image'
import illustrationWorking from '@/public/images/illustration-working.svg';

type Props = {}

export default function HeroSection({ }: Props) {
    return (
        <div className='flex sm:flex-row-reverse flex-col items-center justify-between gap-10 overflow-hidden pb-16 pt-5  sm:pl-16'>
            <div className="flex w-[120%] sm:w-[80%] h-full">
                <Image src={illustrationWorking} alt={''} width={600} height={600} className=' ml-20 w-full' />
            </div>
            <div className="flex flex-col items-center gap-5 sm:pl-6 sm:items-start">

                <h3 className="text-4xl font-bold text-center sm:text-start sm:pr-20">More than just shorter links</h3>
                <p className="text-center px-14 sm:text-start sm:px-0 sm:pr-16 text-GrayishViolet">Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <button className='rounded-3xl bg-Cyan p-2 w-40 text-white'>Get Started</button>
            </div>

        </div>
    )
}