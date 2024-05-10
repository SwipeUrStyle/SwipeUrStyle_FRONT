import React, { useState } from 'react';
import { logo, lock, close } from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    const redirectToLogin = () => {
        window.location.href = 'https://agreeable-moss-0c168e810.5.azurestaticapps.net';
    };

    const redirectToSignUp = () => {
        window.location.href = 'https://agreeable-moss-0c168e810.5.azurestaticapps.net';
    };

    return (
        <div className='w-full h-[80px] bg-white border-b'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                <img src={logo} className="h-[200px]" />
                <div className='hidden md:flex items-center '>
                    <ul className='flex gap-4'>
                        <li>Home</li>
                        <li>Our services</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                    <button onClick={redirectToLogin} className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                        <img src={lock} />
                        Login
                    </button>
                    <button onClick={redirectToSignUp} className='px-8 py-3 rounded-md bg-[#706fe5] text-white font-bold'>Sign Up For Free</button>
                </div>
            </div>
            <div className={toggle ? 'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul>
                    <li className='p-4 hover:bg-black-100'>Home</li>
                    <li className='p-4 hover:bg-black-100'>Our services</li>
                    <li className='p-4 hover:bg-black-100'>About Ust</li>

                    <div className='flex flex-col my-4 gap-4'>
                        <button onClick={redirectToLogin} className='border border-[#706fe5] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                            <img src={lock} />
                            Login
                        </button>
                        <button onClick={redirectToSignUp} className='px-8 py-5 rounded-md bg-[#706fe5] text-white font-bold'>Sign Up For Free</button>
                    </div>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar