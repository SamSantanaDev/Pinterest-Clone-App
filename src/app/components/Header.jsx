"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaBell } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react";
import { doc, getFirestore, setDoc, getDocs,query, where, collection } from "firebase/firestore";
import app from './../Shared/firebaseConfig'
import { async } from "@firebase/util";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";


const Header = () => {
  const { data: session } = useSession();
  

  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() =>{
    saveUserInfo();
  },[session])


  const saveUserInfo = async() => {
    if (session?.user){
        await setDoc(doc(db,"user",session.user.email),{
            userName: session.user.name,
            email: session.user.email,
            userImage: session.user.image
        });
    }
  }
const onCreateClick=()=>{
    if(session)
    {
      router.push('/pin-builder')
    }
    else{
      signIn(); 
    }
  }




  return (
    <div className="p-3 max-w-screen-2xl mx-auto">


    <div className="flex justify-between  items-center gap-3 md:gap-2 p-6 border border-[#F8EF74] rounded-full ">
      <div className="flex gap-3 md:gap-2 items-center">
        <Image
          src="/logo_web.png"
          alt="logo"
          width={75}
          height={75}
          className="hover:bg-gray-300 rounded-lg p-2 cursor-pointer mx-10"
          onClick={() => router.push('/home')}
        />
  
        <button
          onClick={() => onCreateClick()}
          className=" font-serif font-semibold p-2 text-[20px] px-4 rounded-lg text-white bg-[#dc43fd]"
        >
          + New
        </button>

        <h1 className=" md:visible font-serif ml-10 text-[40px] text-black font-semibold">InspoNet</h1>
      </div>
  
      <div>
        {/* Your conditional rendering for session user */}
        {session?.user ? (
          <Image
            onClick={() => router.push('/' + session.user.email)}
            src={session?.user?.image}
            alt="user-image"
            width={100}
            height={100}
            className="hover:bg-gray-400 p-2 rounded-full cursor-pointer"
          />
        ) : (
          <button
            onClick={() => signIn()}
            className="font-semibold p-2 px-4 rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </div>
    </div>
  );
  
};

export default Header;
