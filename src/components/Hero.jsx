import React from 'react';
import { heroImg } from '../assets';
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-15 md:px-0'>

                <div className='flex flex-col justify-start gap-10'>
                    {/* <p className='py-2 text-2xl text-[#706fe5] font-medium'>START TO SUCCESS</p> */}
                    <h1 className='md:leading-[80px] py-2 md:text-6xl text-5xl font-extrabold 800'>Swipe Ur <span className='text-[#706fe5]'>Style</span>
                    </h1>
                    <p className='py-2 text-lg text-2xl text-gray-600 font-medium'>Your style, your wardrobe, your choice. Explore endless combinations, create unique looks and show off your style with confidence. With Swipe Ur Style, your virtual wardrobe that inspires you to shine on every occasion.</p>

                    <button className='px-8 py-3 rounded-md bg-[#706fe5] text-white font-bold'>Start</button>
                </div>

                <img src={heroImg} className="md:order-last  order-first " />



            </div>


        </div>
    )
}

export default Hero