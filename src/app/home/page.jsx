"use client"
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';
import { useSession, signIn, signOut } from "next-auth/react"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from './../Shared/firebaseConfig';
import { useEffect, useState } from 'react';
import PinList from './../components/Pins/PinList';
import Header from './../components/Header';
import Footer from '../components/Footer';

 function Home() {
  const db=getFirestore(app);
  const [listOfPins,setListOfPins]=useState([]);
  const [searchInput, setSearchInput] = useState('');



  
  useEffect(() => {
    const fetchPins = async () => {
      let q;

      if (searchInput.trim()) {
        // Search for pins with a title matching the search term
        q = query(collection(db, 'posts'), where("title", ">=", searchInput), where("title", "<=", searchInput + '\uf8ff'));
      } else {
        // Fetch all pins
        q = query(collection(db, 'posts'));
      }

      const querySnapshot = await getDocs(q);
      const pins = querySnapshot.docs.map(doc => doc.data());
      setListOfPins(pins);
    };

    fetchPins();
  }, [searchInput]); // Dependency on searchInput


  const getAllPins=async()=>{
    setListOfPins([])
      const q=query(collection(db,
        'posts')
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
       
       
      setListOfPins((listOfPins)=>
      [...listOfPins,doc.data()]);
      });
  }

  return (
    <>
    <Header/>
    <div className='p-3 flex flex-col items-center '>
    
   
    <div className="bg-[#e9e9e9] p-3 w-full gap-3 items-center max-w-4xl rounded-full  md:flex sm:flex ">
       <FaSearch className="text-[25px] text-[#dc43fd]" 
            // onClick={handleSearch} 
            />
      <input
        type="text"
        value={searchInput}
        className="bg-transparent outline-none"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search"
      />
    </div>
    <PinList listOfPins={listOfPins} />

    </div>
    <Footer/>
    </>
  );
}
export default Home;