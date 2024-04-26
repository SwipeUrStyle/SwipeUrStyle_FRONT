import React from 'react'
import { blogImg1 } from '../assets'

const CardBottom = ({bottom}) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4'>
        <img src={bottom.linkImg} 
                className="h-50 w-full object-cover"
        />
        <div className='p-2 border border-b'>
            <h1 className='py-2 truncate'>{bottom.title}</h1>
        </div>
    </div>
  )
}
export default CardBottom