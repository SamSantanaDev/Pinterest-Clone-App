"use client";
import React, { useEffect, useState } from "react";
import PinImage from "./../../components/PinDetail/PinImage";
import PinInfo from "./../../components/PinDetail/PinInfo";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "@/app/Shared/firebaseConfig";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { collection, getDocs, query } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import CommentForm from "@/app/components/CommentForm";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Footer from './../../components/Footer';


function PinDetail({ params }) {
  const router = useRouter();
  const db = getFirestore(app);
  const [pinDetail, setPinDetail] = useState([]);
  const session = useSession();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPinDetail();
    getComments();
  }, []);

  const getPinDetail = async () => {
    const docRef = doc(db, "posts", params.pinId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPinDetail(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  const getComments = async () => {
    const commentsRef = collection(db, "posts", params.pinId, "comments");
    const q = query(commentsRef); // If you need to apply filters, you can add them here
    const querySnapshot = await getDocs(q);
    const commentsList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setComments(commentsList);
  };

  return (
    <>
      <Header />
      {pinDetail ? (
        <div className="bg-white p-3 md:p-12 rounded-2xl md:px-24 lg:px-36">
          <HiArrowSmallLeft
            className="text-[60px] text-[#dc43fd] font-bold ml-[-50px] 
          cursor-pointer hover:bg-gray-200 rounded-full p-2"
            onClick={() => router.back()}
          />
          <div
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 shadow-lg
          rounded-2xl p-3 md:p-7 lg:p-12 xl:pd-16"
          >
            <PinImage pinDetail={pinDetail} />
            <div className="">
              <PinInfo pinDetail={pinDetail} />
            </div>
          </div>
          <h2 className="font-semibold text-[30px] font-serif mt-10">Leave a Comment</h2>
          {session?.data && <CommentForm postId={params.pinId} />}
          <div>
            <h2 className="font-semibold text-[30px] mb-10 mt-10">Comments</h2>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className=" p-3 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    {comment.userImage && (
                      <Image
                        src={comment.userImage}
                        alt="Commenter's image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <strong className="font-serif">{comment.userName}</strong>
                  </div>
                  <p className="ml-10 ">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <Footer/>
    </>
  );
}

export default PinDetail;
