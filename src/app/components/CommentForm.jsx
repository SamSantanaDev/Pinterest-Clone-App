"use client";
import React, { useState } from 'react';
import UserTag from './UserTag';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { doc, setDoc, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import app from '../Shared/firebaseConfig';
import { useRouter } from 'next/navigation'


function CommentForm({ postId }) {
    const db = getFirestore(app);
    const session = useSession();
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
 


    const onSave = async () => {
        setLoading(true);
    
        // Check if the user is logged in and if the comment is not empty
        if (!session?.data || !comment.trim()) {
            console.error("Comment or user session is undefined");
            setLoading(false);
            return; // Exit the function if there's no session or comment
        }
    
        try {
            // Create a new comment document in the 'comments' subcollection of the post
            const commentsRef = collection(db, 'posts', postId, 'comments');
            const newCommentRef = doc(commentsRef);
    
            const commentData = {
                userName: session.data.user.name, // Make sure to use session.data.user instead of session.user
                userEmail: session.data.user.email,
                userImage: session.data.user.image,
                text: comment, // The actual comment text
                createdAt: new Date() // Timestamp for when the comment was created
            };
    
            await setDoc(newCommentRef, commentData);
    
            console.log("Comment saved successfully.");
            setComment(''); // Reset the comment state to empty
            setLoading(false);
            
            window.location.reload();

        } catch (error) {
            console.error("Error adding comment: ", error);
            setLoading(false);
        }
    };
    

    
    return (
        <div className='flex flex-col'>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="comment"
                className=" font-serif text-black outline-none w-full mt-8 pb-4 text-[14px] border-b-[2px] border-gray-400 placeholder-gray-400"
            />

            <div className='justify-start w-50 h-50 p-4'>
                <button className="bg-[#DC43FD] font-serif p-2 mb-2 w text-white font-semibold px-3 rounded-full"
                    onClick={onSave}
                    disabled={!comment.trim()}>
                    {loading ? <Image src="/loading-indicator.png" width={30} height={30} alt='loading' className='animate-spin' /> :
                        <span>Post</span>}
                </button>
            </div>
        </div>
    );
}

export default CommentForm;
