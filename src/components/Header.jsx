import React from 'react'
import { NavLink } from 'react-router-dom'
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsBag } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from 'react';
const Header = ({ cart }) => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='fixed top-0 left-0 lg:flex shadow-md h-16 lg:justify-around flex justify-between  items-center px-3 p-2  z-50 w-full bg-[#AED7DF]'>
            <div className="text-3xl font-extrabold  tracking-tight">
                <span className='text-orange-500'>Shop</span>
                <span className='text-gray-900'>Flow</span>
            </div>
            <div className='lg:flex p-2 gap-x-5 hidden text-xl font-semibold'>
                <NavLink to='/create-product' >Create</NavLink>
                <NavLink to='/product' >Product</NavLink>
                <NavLink to='/cart' className="flex">
                    <PiShoppingCartSimple className='text-3xl' /><span className=' text-lg'>{cart.length} item</span></NavLink>
            </div>

            <div className='flex  items-center lg:hidden gap-5'>
                <div className='flex text-blue-700 gap-1 items-center'>
                    <div className='lg:hidden'><BsBag/></div>
                    <div> {cart.length} Item</div>
                </div>
            <div onClick={() => setMenuOpen(!menuOpen)} className='lg:hidden'><VscThreeBars /></div>
            </div>
            {menuOpen && (
                <div className='flex flex-col border  absolute top-9 right-3 z-50 bg-white text-center '>
                    <NavLink onClick={() => setMenuOpen(!menuOpen)} className="px-3 py-2 hover:bg-gray-200" to='/create-product' >Create</NavLink>
                    <hr></hr>
                    <NavLink onClick={() => setMenuOpen(!menuOpen)} className="px-3 py-2 hover:bg-gray-200" to='/product' >Product</NavLink>
                    <hr></hr>
                    <NavLink onClick={() => setMenuOpen(!menuOpen)} className="px-3 py-2 hover:bg-gray-200" to='/cart' >Cart</NavLink>
                </div>
            )}
        </div>
    )
}

export default Header