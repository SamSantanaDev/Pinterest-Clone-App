"use client"
import React, { useEffect,useState } from 'react'
import app from '../Shared/firebaseConfig';
import UserInfo from './../components/UserInfo'
import { collection, getDocs,getDoc,doc, getFirestore, query, where } from 'firebase/firestore'
import PinList from './../components/Pins/PinList'
import Header from './../components/Header'
import Footer from '../components/Footer';

const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState();
  const [listOfPins,setListOfPins]=useState([]);

  useEffect(() => {
    console.log(params.userId.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userId.replace("%40", "@"));
    }
  }, [params]);

 

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };




  useEffect(() => {
      // Check if userInfo and userInfo.email are available
      if (userInfo) 
      {
          getUserPins();
      }
  }, [userInfo]); 

  const getUserPins =async ()=>{
      const q = query(collection(db,'posts'),where("email",'==',userInfo.email));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          setListOfPins(listOfPins=>[...listOfPins,doc.data()]);
      });
  }



  return( 
    <>
    <Header/>

  <div>{userInfo ? <UserInfo userInfo={userInfo} /> : null}
  <PinList  listOfPins={listOfPins} />
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
