"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

function About() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-bl from-black to-[#F8EF74] via-[#DC43FD] min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col  justify-center items-center max-w-7xl mx-auto w-full">
        <div className="justify-center items-center flex">
        <Image src='/logo_web.png' width={100} height={100}/>
        <h1 className="ml-10 font-serif text-[60px] text-white ">InspoNet</h1>
        </div>
    
        <div className="text-center lg:text-left mt-6 lg:mt-0 lg:ml-10">
          <h2 className="text-[24px] font-serif lg:text-[40px] font-semibold text-[#F8EF74]">
            About
          </h2>
          <p className="text-white text-[20px] lg:text-[16px]">
            Welcome to InspoNet, the canvas of creativity and the nexus of
            inspiration. Our journey began with a simple vision: to create a
            space where imagination knows no bounds, and every idea finds a
            home. Here at InspoNet, we believe that inspiration is the thread
            that weaves our creativity together. It's a digital mosaic where
            artists, dreamers, makers, and doers from across the globe connect,
            share, and grow. Our platform is more than just a collection of
            images and ideas. It's a vibrant community built on the foundation
            of collaboration, encouragement, and shared passion. 
            <br/>
            <br/>
            From the spark
            of an initial concept to the final touches of a masterpiece,
            InspoNet is your partner in the creative process. We're not just a
            social network; we're a support network for all things imaginative.
            Dive into InspoNet and discover a world of endless possibility. Pin
            your passions, curate your collections, and watch as your
            inspirations ripple across our global tapestry. Welcome to your new
            creative home.
          </p>
          <button
            onClick={() => router.push("/home")}
            className="text-[#F8EF74] hover:border-b font-bold font-serif text-[20px] border-white cursor-pointer mt-10"
          >
            <span>Get Started</span>
          </button>
        </div>
        <div className="text-center lg:text-left mt-6 lg:mt-0 lg:ml-10">
          <h2 className="text-[24px] font-serif text-right lg:text-[40px] font-semibold text-[#F8EF74]">
            Community
          </h2>
          <p className="text-white text-[20px] lg:text-[16px]">
            At the heart of InspoNet lies our community, a tapestry of talent,
            a fusion of fervor, and a symphony of supportive voices. It's where
            creators meet collaborators, visionaries join volunteers, and
            friends find fellow enthusiasts. Our community is your space to
            shine, share, and support each other in every creative endeavor.
            Here, every member is both a muse and a maven. Whether you're
            looking to bounce around ideas, seek feedback on your latest
            project, or just soak in the collective creativity, you've found
            your tribe. Our forums buzz with activity, our groups glow with
            shared interests, and our collaborations brim with collective
            genius. Join our community events, participate in challenges, or
            start your own group. 
            <br/>
            <br/>
            InspoNet is your platform to foster
            connections that transcend the digital realm. Together, we're not
            just building a network; we're weaving a world where every
            inspiration is interlinked. Engage, empower, and elevate each other
            because on InspoNet, every connection counts, every share
            inspires, and every individual is an integral thread in the fabric
            of our community. Welcome to where your presence is valued and your
            creativity cherished. Welcome to InspoNet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
