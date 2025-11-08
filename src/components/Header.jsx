import React from 'react'
import { NavLink } from 'react-router-dom'
import { TfiShoppingCart } from "react-icons/tfi";
const Header = () => {
    return (
        <div className='flex justify-around'>
            <div className="text-3xl font-extrabold tracking-tight">
                <span className='text-orange-500'>Shop</span>
                <span className='text-gray-900'>Flow</span>
            </div>
            <div className='flex p-2 gap-x-5 text-xl font-semibold'>
                <NavLink to='/create-product' >Create</NavLink>
                <NavLink to='/product' >Product</NavLink>
                {/* <NavLink to='/cart' >Cart</NavLink> */}
                {/* <span className='pt-1 flex'><TfiShoppingCart /><span className='-pt-1 text-lg'>4 item</span></span> */}
            </div>
        </div>
    )
}

export default Header