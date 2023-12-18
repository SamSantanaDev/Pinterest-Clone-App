"use client"
import Image from 'next/image'
import { useRouter } from "next/navigation";
import React from 'react';

export default function LandingPage() {
  const router = useRouter();  
  return (
    <div className='bg-gradient-to-br w-screen h-screen to-[#F8EF74] from-[#DC43FD] flex flex-col justify-center items-center px-4'>
      <div className='flex flex-col md:flex-row justify-center items-center text-center md:text-left'>
        <div className='p-4 rounded-lg bg-white w-full max-w-[300px] h-auto flex justify-center items-center mb-6 md:mb-0 md:mr-10'>
          <Image src='/logo_web.png' width={300} height={300} layout="responsive"/>
        </div>
        <div>
          <h1 className='text-white font-serif text-[60px] md:text-[90px]'>InspoNet</h1> 
          <h2 className='text-white font-serif text-[25px] md:text-[40px]'>Where Ideas Connect</h2>
          <button onClick={() => router.push('/home')}
            className='text-white  font-serif text-[20px] md:text-[30px] mt-6 md:mt-10 hover:border-b cursor-pointer border-white'>Get Started</button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-20 md:mt-40'>
        <button onClick={() => router.push('/about')} 
          className='text-white text-[15px] hover:border-b cursor-pointer border-white'
        ><span>About</span></button>
        
        <button onClick={() => router.push('/community')} 
          className='text-white text-[15px] hover:border-b cursor-pointer border-white'
        ><span>Community</span></button>
        
        <button onClick={() => router.push('/careers')} 
          className='text-white text-[15px] hover:border-b cursor-pointer border-white'
        ><span>Careers</span></button>
      </div>
    </div>
  );
}
