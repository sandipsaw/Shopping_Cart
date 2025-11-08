import React from 'react'
import { useState } from 'react';
import Create from './Create';
const Product = ({ Product }) => {

    const product = Product.map((product) => {
        return (
            <div className='  lg:w-1/5 md:w-1/3 sm:w-1/1'>
                <div className='p-2'>
                    <div className='border rounded-tr-xl rounded-tl-xl p-3 relative'>
                        <img className='w-1/1 h-90 object-contain' src={product.image} />
                        <p className='absolute bottom-5 right-4 text-xl font-semibold'>Rs {product.price}</p>
                    </div>

                    <div className='p-2'>
                        <h1 className='font-semibold text-2xl mt-2'>{product.title}</h1>
                    <p className='text-lg tracking-tight'>{product.description.slice(0,50)}<span className='text-blue-900'>...more</span></p>
                    <button className='w-full rounded p-1 font-semibold bg-blue-400 mt-4 mb-2 text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='flex flex-wrap gap-10 mt-5 justify-center'>
            {product}
        </div>
    )
}

export default Product