import React, { useState } from 'react';
import {navLinks} from "../constants";
import {close, logo, menu} from "../assets"
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  function handle(){
    if(toggle){
      setToggle(false);
    }else{
      setToggle(true)
    }
  }
  return (
    <nav className='w-full flex py-6 justify-between items-center navber'>
      <img src={logo} className='w-[124px] h-[32px]' alt="bank" />
      <ul className='list-none gap-10 sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((item, index)=>(
          <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
            <a href={item.id}>
            {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img onClick={handle} src={toggle? close : menu} alt="menu" className='w-[20px] h-[20px] onject-contain' />
        <div className={`${toggle ? "flex": "hidden"} p-6 sidebar bg-black-gradient backdrop-blur-sm absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sideber`}>
        <ul className='list-none gap-10 space-y-2 justify-end items-center flex-1'>
        {navLinks.map((item, index)=>(
          <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>
            <a href={item.id}>
            {item.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
