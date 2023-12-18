'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Footer() {
    const router = useRouter();

    return (
        <div className='bg-black p-4 '>
            <div className='flex justify-center space-x-4 items-center min-h-[100px]'>
                {/* Buttons for About, Community, and Careers */}
                <button onClick={() => router.push('/about')} 
                    className='text-white text-[15px] hover:border-b cursor-pointer border-white'
                ><span>About</span></button>
                
                <button onClick={() => router.push('/about')} 
                    className='text-white text-[15px] hover:border-b cursor-pointer border-white'
                ><span>Community</span></button>
                
                <button onClick={() => router.push('/about')} 
                    className='text-white text-[15px] hover:border-b cursor-pointer border-white'
                ><span>Careers</span></button>
            </div>
            <div className='flex justify-center items-center space-x-4 '>
                <Image src="/logo_webDark.png" width={50} height={50}/>
                <p className='text-white text-[12px]'>InspoNet  2023</p>
            </div>
        </div>
    );
}

export default Footer;
