import React from 'react'
import Image from 'next/image'

import logo from '@/public/images/logo.svg';
import bgBoostDesktop from '@/public/images/bg-boost-desktop.svg';
import bgBoostMobile from '@/public/images/bg-boost-mobile.svg';
import iconBrandRecognition from '@/public/images/icon-brand-recognition.svg';
import iconDetailedRecords from '@/public/images/icon-detailed-records.svg';
import iconFacebook from '@/public/images/icon-facebook.svg';
import iconFullyCustomizable from '@/public/images/icon-fully-customizable.svg';
import iconInstagram from '@/public/images/icon-instagram.svg';
import iconPinterest from '@/public/images/icon-pinterest.svg';
import iconTwitter from '@/public/images/icon-twitter.svg';
import Link from 'next/link';
import { features } from 'process';

const socialMediaIcon = [
    { alt: 'Facebook', src: iconFacebook, href: '#' },
    { alt: 'Twitter', src: iconTwitter, href: '#' },
    { alt: 'Pinterest', src: iconPinterest, href: '#' },
    { alt: 'Instagram', src: iconInstagram, href: '#' }
]

const siteMap = [
    {
        title: 'features',
        links: [{ lable: 'Link Shortening', href: '#' },
        { lable: 'Branded Links', href: '#' },
        { lable: 'Analytics ', href: '#' }]
    },

    {
        title: 'Resources',
        links: [{ lable: 'Blog  ', href: '#' },
        { lable: 'Developers ', href: '#' },
        { lable: 'Support', href: '#' }]
    },

    {
        title: 'Company',
        links: [{ lable: 'About ', href: '#' },
        { lable: 'Our Team ', href: '#' },
        { lable: 'Careers ', href: '#' },
        { lable: 'Contact ', href: '#' }

        ]
    },

]



type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='flex flex-col sm:justify-start items-center justify-center w-full relative '>
            <Image src={bgBoostDesktop} alt={''} className='bg-DarkViolet  sm:flex hidden' />
            <Image src={bgBoostMobile} alt={''} className='bg-DarkViolet  sm:hidden flex' />
            <div className="flex flex-col absolute left-0 text-center sm:top-10 top-24 font-bold w-full items-center gap-4 text-white">
                <h3 className="text-3xl">Boost your links today</h3>
                <button className='rounded-3xl bg-Cyan p-2 w-40'>Get Started</button>
            </div>
            <div className="flex p-8 bg-VeryDarkViolet sm:justify-between sm:px-20 items-center flex-col sm:flex-row w-full 
            sm:items-start gap-8">
                <Link href={'/'}>
                    <Image src={logo} alt={'logo'} className='p-2 ' />
                </Link>

                <div className="flex sm:gap-40 items-start flex-col  sm:flex-row gap-10">
                    <div className="flex sm:flex-row flex-col sm:gap-12 gap-8 ">
                        {siteMap.map((item, index) => (
                            <div key={index} className="flex flex-col sm:items-start items-center gap-4">
                                <h2 className='font-bold text-white'>{item.title}</h2>
                                {item.links.map((lable) => (
                                    <Link href={lable.href}><div className="flex flex-col gap-2 text-GrayishViolet">
                                        {lable.lable}
                                    </div></Link>
                                ))}

                            </div>
                        ))}
                    </div>



                    <div className="flex gap-2 items-center">
                        {socialMediaIcon.map((item) => (
                            <Link href={item.href}>
                                <Image src={item.src} alt={item.alt} />
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}