'use client';
import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'


function PinBuilder() {
  return (
    <>  
   

      <Header/>
      <div className='bg-transparent flex   justify-center mt-[80px]  p-8 px-[60px] md:px-[160px]'>
        <Form/>
      </div>
      <div className='mt-[230px]'>
        <Footer/>
      </div>



    </>
  )
  
}

export default PinBuilder