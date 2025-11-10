import React from 'react'
import RightSideCheckoutRail from './Cart2'
import { RiCloseLargeFill } from "react-icons/ri";
import { LiaAudible } from "react-icons/lia";
import image from '../Images/emptyCart.png'
import { useState } from 'react';
const Cart = ({ cart, removeHandler }) => {

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
            onClick={() => window.location.href = '/product'}
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
      <div className=' p-2 bg-white shadow rounded-xl'>
        <div className='flex pl-2 pr-2'>
          <div className=''><img className='lg:w-40 w-60 p-2  bg-white ' src={item.image} /></div>
          <div className='  flex flex-col gap-2 pl-2 text-xl'>
            <div className=' mt-1'>{item.title}</div>
            <div className='text-sm lg:text-lg'>{item.description}</div>
            <div className="text-green-700">{item.price}/- Rs.</div>
            <div className='flex flex-row lg:hidden justify-around items-center'>
            <div><input
              onChange={(e) => setqty(e.target.valueAsNumber)}
              value={qty}
              className='w-20 border-2 text-xl h-8 text-center rounded'
              type='number' placeholder='1' /></div>
            <div><button onClick={() => removeHandler(item.id)} className='px-4 py-2 lg:text-md text-sm text-white rounded bg-red-500 hover:bg-red-600'>Remove</button></div>
          </div>

          </div>
          <div className='lg:flex lg:flex-col hidden justify-around items-center'>
            <div><input
              onChange={(e) => setqty(e.target.valueAsNumber)}
              value={qty}
              className='w-25 border-2 text-2xl h-10 text-center rounded'
              type='number' placeholder='1' /></div>
            <div><button onClick={() => removeHandler(item.id)} className='px-5 py-2 text-md text-white rounded bg-red-500 hover:bg-red-600'>Remove</button></div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className=' lg:flex lg:justify-center lg:gap-20 w-100% h-screen'>
      <div className='flex gap-5 flex-col lg:w-1/2 md:w-1/1 sm:w-1/1 px-5 md:px-5'>
        <div className='flex justify-between items-center'>
          <div><h1 className='lg:text-5xl md:text-3xl text-3xl lg:font-medium text-white '>Shopping Cart</h1></div>
          <div onClick={() => setshow(!show)} className='lg:hidden sm:block text-lg border  rounded-xl font-bold p-2 text-white'>{show?<RiCloseLargeFill/>:<LiaAudible/>}</div>
        </div>
        {/* <h1 className='lg:text-4xl md:text-3xl sm:text-2xl'>Product Cart</h1> */}
        {added}
      </div>
      <div className={show ? "lg:block absolute top-20 w-full" : "lg:block hidden"}>
        <RightSideCheckoutRail cart={cart} setshow={setshow} show={show} />
      </div>
    </div>
    // lg:block hidden
  )
}

export default Cart

// <div className='w-100% h-100% relative'>
//  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>