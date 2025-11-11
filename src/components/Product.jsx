import React from 'react'
import { useState } from 'react';
const Product = ({ Product , CartHandler}) => {

    const products = Product.map((product) => {
        return (
            <div className='lg:w-1/5 md:w-85 pt-2 sm:w-full sm:pl-2 sm:pr-2 rounded-2xl bg-blue-100'>
                <div className='p-2 lg:w-1/1 md:w-80 '>
                    <div className='border rounded-tr-xl rounded-tl-xl p-3 relative bg-white '>
                        <img className=' lg:h-85 md:h-90 object-contain' src={product.image} />
                        <p className='absolute bottom-5 right-4 text-xl font-semibold'>Rs {product.price}</p>
                    </div>

                    <div className='p-2'>
                        <h1 className='font-semibold text-2xl mt-2'>{product.title}</h1>
                    <p className='text-lg lg:block hidden tracking-tight'>{product.description.slice(0,48)}<span className='text-blue-900'>...more</span></p>

                    <p className='text-lg tracking-tight lg:hidden block'>{product.description}</p>
                    <button 
                    onClick={()=>CartHandler(product.id)} 
                    // ()=>CartHandler(product.id)
                    // onClick={() => window.location.href = '/product'}
                    className='w-full rounded p-1 font-semibold bg-blue-400 hover:bg-blue-500 shadow mt-4 mb-2 text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1 className='text-center mt-5 lg:text-4xl md:text-4xl text-3xl font-semibold'>Elctronics Product</h1>
            <div className='flex flex-wrap lg:gap-10 md:gap-5 gap-5 px-1 mt-5 lg:justify-center md:justify-around'>
            {products}
        </div>
        </div>
    )
}
//
export default Product