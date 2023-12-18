"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

function UserTag({user}) {
    //const {data:session}=useSession();
  return (
    <div className=''>
       {user?
       <div className='flex gap-3 border border-[#e9e9e9] rounded-full p-2
       items-center'>
       <Image src={user.image} 
       alt='userImage'
       width={45}
       height={45}
       className='rounded-full'/>
       <div>
        <h2 className='text-[14px] text-black font-medium'>{user.name}</h2>
        <h2 className='text-[12px] text-black'>{user.email}</h2>

        </div>
       </div>
       :null}
    </div>
  )
}

export default UserTag