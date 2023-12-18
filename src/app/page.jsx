"use client"
import Image from 'next/image'
import { useRouter } from "next/navigation";
import React from 'react';

export default function LandingPage() {
  const router = useRouter();  
  return (
    <div className='bg-gradient-radial w-screen h-screen to-[#F8EF74] from-[#DC43FD] flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div className='p-4 rounded-lg bg-white w-[300px] h-[300px] flex justify-center items-center mr-10'>
          <Image src='/logo_web.png' width={300} height={300}/>
        </div>
        <div>
          <h1 className='text-white text-[90px]'>Name</h1> 
          <button onClick={() => router.push('/home')}
          className='text-white text-[40px] hover:border-b cursor-pointer border-white'>Get Started</button>
        </div>
      </div>
      <div className='mt-40 flex justify-center space-x-4'> {/* Use flex and space-x-4 to align items side by side and give them some space */}
       
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
    </div>
  );
}
