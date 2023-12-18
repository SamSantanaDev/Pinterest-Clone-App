"use client";
import React from "react";
import UploadImage from "./UploadImage";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from '../Shared/firebaseConfig'
//import UserTag from "./UserTag";



function Form() {
    const {data:session}=useSession();
    const [title,setTitle]=useState();
    const [desc,setDesc]=useState();
    //const [link,setLink]=useState();
    const [file,setFile]=useState();
    const [loading,setLoading]=useState(false);

    const router=useRouter();
    const storage = getStorage(app);
    const db = getFirestore(app);
    const postId=Date.now().toString();

  const onSave=()=>{
    setLoading(true)
    uploadFile();
  }
  //change pinterest -> New name
  const uploadFile=()=>{
    const storageRef=ref(storage,'post-Images/'+file.name);
    uploadBytes(storageRef,file).then((snapshot)=>{
        console.log("File Uploaded")
    }).then(resp=> {
        getDownloadURL(storageRef).then(async(url) =>{
            console.log("Downloaded URL", url);
            const postData={
                title:title,
                desc:desc,
                //link:link,
                image:url,
                userName:session.user.name,
                email:session.user.email,
                userImage:session.user.image,
                id:postId
            }
            await setDoc(doc(db,'posts',postId),
            postData).then(resp=>{
                console.log("Saved")
                setLoading(true);
                router.push("/"+session.user.email)
            })
            
        })
    })
}

  return (
   
    <div className="bg-white border border-[#DC43FD] p-16 max-w-[1500px] rounded-2xl">
      <div className="flex justify-end md-6">
        <button className="bg-[#DC43FD] p-2 mb-2 text-white font-semibold px-3 rounded-full"
        onClick={()=> onSave()}>
          {loading?<Image src="/loading-indicator.png"
           width={30} 
           height={30} 
           alt='loading'
           className='animate-spin'  /> :
           <span>Post</span>}
          
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <UploadImage setFile={(file)=>setFile(file)} />

        <div className="col-span-2">
          <div className="w-[100%]">
            <input
              type="text"
              placeholder="Add your title"
              onChange={(e)=>setTitle(e.target.value)}
              className=" text-[35px] outline-none font-bold w-full border-b-[2px] border-gray-400"
            />
            <h2 className=" text-[12px] w-full text-gray-400">
              40 characters max
            </h2>
            {/* <UserTag user={session?.user} /> */}

            <textarea
              type="text"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
              className="outline-none w-full mt-8 pb-4 text-[14px] border-b-[2px] border-gray-400 placeholder-gray-400"
            />
            {/* <input
              type="text"
              placeholder="Add a destination link"
              onChange={(e) => setLink(e.target.value)}
              className="outline-none w-full pd-4 mt-[90px] border-b-[2px] border-gray-400 placeholder-gray-400"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form
