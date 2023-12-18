"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

function About() {
    const router = useRouter();

    return (
        <div className="bg-black min-h-screen flex justify-center items-center p-4">
            <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto w-full">
                <div className="w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
                    <Image src='/logo_webDark.png' width={2000} height={2000} layout="responsive"/>
                </div>
                <div className="text-center lg:text-left mt-6 lg:mt-0 lg:ml-10">
                    <h2 className="text-[24px] lg:text-[40px] font-semibold text-[#DC43FD]">About</h2>
                    <p className="text-white text-[20px] lg:text-[16px]">
        Welcome to InspoNet, the canvas of creativity and the nexus of
        inspiration. Our journey began with a simple vision: to create a space
        where imagination knows no bounds, and every idea finds a home. Here at
        InspoNet, we believe that inspiration is the thread that weaves our
        creativity together. It's a digital mosaic where artists, dreamers,
        makers, and doers from across the globe connect, share, and grow. Our
        platform is more than just a collection of images and ideas. It's a
        vibrant community built on the foundation of collaboration,
        encouragement, and shared passion. From the spark of an initial concept
        to the final touches of a masterpiece, InspoNet is your partner in the
        creative process. We're not just a social network; we're a support
        network for all things imaginative. Dive into InspoNet and discover a
        world of endless possibility. Pin your passions, curate your
        collections, and watch as your inspirations ripple across our global
        tapestry. Welcome to your new creative home.
      </p>
      <button onClick={() => router.push('/home')}
      className="text-white hover:border-b border-[#DC43FD] cursor-pointer mt-10"><span>Get Started</span></button>
      </div>
      
    </div>
    </div>
  );
}

export default About;
