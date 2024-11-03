import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';

export const Header = () => {
    const { favorites } = useSelector(state => state)
  return (
    <header className='flex justify-end items-center p-10 relative' >
     <FaHeart fontSize={100}/>
     <span className={`absolute bottom-[60px] text-center h-[40px] w-[40px] text-3xl rounded-full bg-green-300 ${favorites.length === 0 ? "hidden" : "block"}`}>{favorites.length}</span>
    </header>
  )
}