import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Product'
import Cart from './components/Cart'
import Create from './components/Create'
import Header from './components/Header'
import { useState } from 'react'
const App = () => {

  const [Products, setProducts] = useState([
        {
            id: 1,
            title: "Wireless Headphones",
            description: "Bluetooth over-ear headphones with noise cancellation and 30-hour battery life.",
            price: 2999,
            image: "https://i.pinimg.com/736x/a8/33/7f/a8337f50ffaf22a9f4c350ed63362ec8.jpg"
        },
        {
            id: 2,
            title: "Smart Watch",
            description: "Fitness tracking smartwatch with heart rate monitor, sleep tracking, and water resistance.",
            price: 4999,
            image: "https://i.pinimg.com/736x/88/1d/a9/881da96edc5a8eea60f037842949f2b5.jpg"
        },
        {
            id: 3,
            title: "Wireless Earbuds",
            description: "Compact TWS earbuds with touch controls, noise isolation, and charging case.",
            price: 1999,
            image: "https://i.pinimg.com/736x/07/d3/fe/07d3fee8d75f8f150433426164abccce.jpg"
        },
        {
            id: 4,
            title: "Smartphone",
            description: "Latest 5G smartphone with AMOLED display, 128GB storage, and triple camera setup.",
            price: 28999,
            image: "https://i.pinimg.com/736x/d9/82/12/d982123a83fe7a0f6c5ca92e5ea2d814.jpg"
        },
        {
            id: 5,
            title: "Bluetooth Speaker",
            description: "Portable Bluetooth speaker with deep bass, waterproof design, and 12-hour battery life.",
            price: 1499,
            image: "https://i.pinimg.com/736x/74/f1/3b/74f13b8705ddf22f9dee9848004491d4.jpg"
        },
        {
            id: 6,
            title: "DSLR Camera",
            description: "Professional DSLR with 24.1MP sensor, full HD video recording, and Wi-Fi connectivity.",
            price: 56999,
            image: "https://i.pinimg.com/1200x/33/1c/5a/331c5aefd9760173596926e1b96ffc1c.jpg"
        },
        {
            id: 7,
            title: "Gaming Laptop",
            description: "High-performance laptop with RTX graphics, Intel i7 processor, and 16GB RAM.",
            price: 85999,
            image: "https://i.pinimg.com/1200x/35/9d/56/359d56aa296b101094588c7076d87275.jpg"
        },
        {
            id: 8,
            title: "Wireless Mouse",
            description: "Ergonomic wireless mouse with dual-mode Bluetooth and USB receiver.",
            price: 999,
            image: "https://i.pinimg.com/736x/d0/15/5e/d0155e1ad361723857b4b73a3c8fea64.jpg"
        }
    ]);

  return (
    <BrowserRouter>
      <div className=' mt-2 w-100% '>
        <Header />
        <Routes>
          <Route path='/product' element={<Product Product={Products} setProduct={setProducts} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/create-product' element={<Create Product={Products} setProduct={setProducts} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
