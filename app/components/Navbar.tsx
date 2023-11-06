import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.svg';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai'
// AiOutlineMenu

type Props = {}


const navlinks = [
    { title: 'Feature', hrf: '#' },
    { title: 'Pricing', hrf: '#' },
    { title: 'Resources', hrf: '#' },
]

export default function Navbar({ }: Props) {
    return (
        <div className='flex justify-between items-center p-4 sm:px-20 relative'>
            <div className="flex items-center gap-10">
                <Link href={'/'}>
                    <Image src={logo} alt={'logo'} className='p-2 ' />
                </Link>
                <div className="sm:flex gap-4 hidden text-GrayishViolet">
                    {navlinks.map((item) => (<Link href={item.hrf}>{item.title}</Link>))}

                </div>
            </div>
            <div className="sm:flex gap-4 hidden ">
                <Link href={''} className='p-2 text-GrayishViolet'> Login</Link>
                <Link href={''} className='p-2 text-center bg-Cyan rounded-3xl px-4'>Sign Up</Link>
            </div>
            <button className='sm:hidden '><AiOutlineMenu className=' w-8 h-8' /></button>

            <div className="flex flex-col absolute  left-0 sm:hidden w-full min-h-full text-white bg- z-30 it items-center top-16 p-5 rounded-lg font-bold text-xl hidden">
                <div className="flex flex-col w-full justify-center items-center p-8 py-12  bg-DarkViolet gap-8 rounded-lg">
                    <div className="flex gap-4
DarkViolet z-20 flex-col sm:hidden items-center">
                        {navlinks.map((item) => (<Link href={item.hrf}>{item.title}</Link>))}

                    </div>

                    <hr className='w-full' />
                    <div className="flex flex-col gap-4  w-full items-center ">
                        <Link href={'#'} className='p-2'> Login</Link>
                        <Link href={'#'} className='p-4 text-center bg-Cyan rounded-3xl px-4 w-full '>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}