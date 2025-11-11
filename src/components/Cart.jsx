import React from 'react'
import RightSideCheckoutRail from './Cart2'
import { RiCloseLargeFill } from "react-icons/ri";
import { LiaAudible } from "react-icons/lia";
import { HiMinus } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import image from '../Images/emptyCart.png'
import { useState } from 'react';
const Cart = ({ cart, removeHandler, cartIncr, cartDecr }) => {

  if (!cart.length) {
    return (
      <div className="flex flex-col  items-center justify-start h-screen text-center">
        <img
          src={image}
          alt="Empty cart"
          className="lg:w-120 md:120 w-60 opacity-90"
        />
        <div className=''>
          <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
          <p className="mb-4 text-lg">
            Looks like you haven’t added anything yet.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  const [qty, setqty] = useState();
  const [show, setshow] = useState(false)
  const added = cart.map((item) => {
    return (
      <div className=' p-2 bg-white rounded-xl'>
        <div className='flex pl-2 pr-2'>
          <div className=''><img className='lg:w-40 w-50 md:w-35 p-2  bg-white ' src={item.image} /></div>
          <div className='  flex flex-col gap-2 pl-2 text-xl'>

            <div className=' mt-1'>{item.title}</div>
            <div className='text-sm block lg:hidden'>{item.description.slice(0,55)}...more</div>
            <div className='text-sm lg:text-lg lg:block hidden'>{item.description}</div>
            <div className="text-green-700 lg:text-xl text-lg">{item.price}/- Rs.</div>

            <div className='flex flex-row lg:hidden gap-3 justify-around items-center'>
              <div className='flex text-lg border rounded items-center'>
                <div onClick={() => cartDecr(item.id)} className=' px-2'><HiMinus /></div>
                <div className='p-1'>{item.qty}</div>
                <div onClick={() => cartIncr(item.id)} className=' px-2'><HiPlus /></div>
              </div>
              <div><button onClick={() => removeHandler(item.id)} className='px-4 py-1 text-md text-white rounded bg-red-500 hover:bg-red-600'>Remove</button></div>
            </div>

          </div>


          <div className='lg:flex lg:flex-col hidden justify-around items-center'>
            <div className='flex text-lg border rounded items-center'>
              <div onClick={() => cartDecr(item.id)} className=' p-2'><HiMinus /></div>
              <div className=' p-2'>{item.qty}</div>
              <div onClick={() => cartIncr(item.id)} className=' p-2'><HiPlus /></div>
            </div>
            <div><button onClick={() => removeHandler(item.id)} className='px-5 py-2 text-md text-white rounded bg-red-500 hover:bg-red-600'>Remove</button></div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className=' flex justify-center lg:gap-20  md:gap-5 mt-5 w-100% h-screen'>
      <div className='flex gap-5 flex-col  lg:w-1/2 md:w-1/2 sm:w-1/1 px-5 md:px-5'>
        <div className='flex justify-between items-center'>
          <div><h1 className='lg:text-5xl md:text-3xl text-2xl lg:font-medium text-white '>Shopping Cart</h1></div>
          <div onClick={() => setshow(!show)} className='lg:hidden md:hidden sm:block text-lg border  rounded-xl font-bold p-1 text-white'>{show ? <RiCloseLargeFill /> : <LiaAudible />}</div>
        </div>
        {added}
      </div>

      <div className={show ? "lg:block md:blockm absolute top-25  w-1/1" : "md:block lg:block hidden"}>
        <RightSideCheckoutRail cart={cart} setshow={setshow} show={show} />
      </div>
    </div>
    // lg:block hidden
  )
}

export default Cart

// <div className='w-100% h-100% relative'>
//  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>