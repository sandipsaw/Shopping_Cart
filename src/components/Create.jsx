import React, { useState } from 'react'
import Product from './Product'
import { nanoid } from 'nanoid';

const Create = ({Product,setProduct}) => {

    const [title, settitle] = useState(""); 
    const [description, setdescription] = useState("");
    const [price, setprice] = useState("");
    const [image, setimage] = useState("")
    const [qty,setqty] = useState("1")

    const submitHandler = (e) =>{
        e.preventDefault();
        const newProduct = {
            id:nanoid(),
            title,
            description,
            price,
            image,
            Add2Cart :false,
            qty
        }
        console.log(newProduct);
        
        const copyProduct = [...Product]
        copyProduct.push(newProduct);
        setProduct(copyProduct)
        console.log(Product);
        
    }
    return (
        <div className='w-100%'>
            <div className='lg:w-1/3 md:w-1/2 w-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  rounded-2xl' >
                <h1 className='text-4xl font-serif text-center'>Create Product</h1>
                <form onSubmit={submitHandler} className='flex justify-center flex-col gap-6 p-5  text-xl' >
                    <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title} 
                    className='border-blue-600 bg-white border-2 rounded p-2 text-black' 
                    type='text' placeholder='title' ></input>

                    <textarea 
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                    className='border-blue-600 bg-white border-2 rounded p-2' rows="2" 
                    placeholder='enter description'></textarea>

                    <input 
                    onChange={(e) => setimage(e.target.value)}
                    value={image}
                    className='border-blue-600 bg-white border-2 rounded p-2' 
                    type='text' placeholder='Image url' ></input>

                    <input 
                    onChange={(e) => setprice(e.target.value)}
                    value={price}
                    className='border-blue-600 bg-white border-2 rounded p-2' 
                    type='number' placeholder='price : ' ></input>

                    <input 
                    onChange={(e) => setqty(e.target.value)}
                    value={qty}
                    className='border-blue-600 bg-white border-2 rounded p-2' 
                    type='number' placeholder='quantity : ' ></input>

                    <button className='w-full rounded p-1 font-semibold bg-blue-400 mt-4 mb-2 text-white'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Create