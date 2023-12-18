import React from 'react'
import UserTag from '../UserTag'

function PinInfo({pinDetail}) {
  const user={
    name:pinDetail.userName,
    email:pinDetail.email,
    image:pinDetail.userImage
  }
  return (
    <div>
      <h2 className='text-[30px] font-serif text-black font-bold mb-10'>{pinDetail.title}</h2>
      <UserTag user={user} />
      <h2 className='mt-20 font-serif text-black text-[20px] '>{pinDetail.desc}</h2>
    
    </div>
  )
}

export default PinInfo