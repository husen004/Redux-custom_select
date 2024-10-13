import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';

export const Header = () => {
    const { favorites } = useSelector(state => state)
  return (
    <header className='cursor-pointer flex justify-end p-14 relative' >
     <FaHeart fontSize={50}/>
     <span className={`absolute bottom-[60px] text-center h-[24px] w-[20px] rounded-full bg-green-300 ${favorites.length === 0 ? "hidden" : "block"}`}>{favorites.length}</span>
    </header>
  )
}