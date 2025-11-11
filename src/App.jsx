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
      image: "https://i.pinimg.com/736x/a8/33/7f/a8337f50ffaf22a9f4c350ed63362ec8.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Fitness tracking smartwatch with heart rate monitor, sleep tracking, and water resistance.",
      price: 4999,
      image: "https://i.pinimg.com/736x/88/1d/a9/881da96edc5a8eea60f037842949f2b5.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 3,
      title: "Wireless Earbuds",
      description: "Compact TWS earbuds with touch controls, noise isolation, and charging case.",
      price: 1999,
      image: "https://i.pinimg.com/736x/07/d3/fe/07d3fee8d75f8f150433426164abccce.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 4,
      title: "Smartphone",
      description: "Latest 5G smartphone with AMOLED display, 128GB storage, and triple camera setup.",
      price: 28999,
      image: "https://i.pinimg.com/736x/d9/82/12/d982123a83fe7a0f6c5ca92e5ea2d814.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with deep bass, waterproof design, and 12-hour battery life.",
      price: 1499,
      image: "https://i.pinimg.com/736x/74/f1/3b/74f13b8705ddf22f9dee9848004491d4.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 6,
      title: "DSLR Camera",
      description: "Professional DSLR with 24.1MP sensor, full HD video recording, and Wi-Fi connectivity.",
      price: 56999,
      image: "https://i.pinimg.com/1200x/33/1c/5a/331c5aefd9760173596926e1b96ffc1c.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 7,
      title: "Gaming Laptop",
      description: "High-performance laptop with RTX graphics, Intel i7 processor, and 16GB RAM.",
      price: 85999,
      image: "https://i.pinimg.com/1200x/35/9d/56/359d56aa296b101094588c7076d87275.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 8,
      title: "Wireless Mouse",
      description: "Ergonomic wireless mouse with dual-mode Bluetooth and USB receiver.",
      price: 999,
      image: "https://i.pinimg.com/736x/d0/15/5e/d0155e1ad361723857b4b73a3c8fea64.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 9,
      title: "Portable Projector",
      description: "Mini HD portable projector with WiFi, HDMI support, and 200-inch display capability.",
      price: 6999,
      image: "https://i.pinimg.com/1200x/17/57/41/175741c21a366248da3cd42f226950c1.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 10,
      title: "Drone Camera",
      description: "Foldable drone with 4K UHD camera, GPS, and real-time video transmission.",
      price: 15999,
      image: "https://i.pinimg.com/1200x/06/3d/b0/063db035e1a6664958028b528511552f.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 11,
      title: "Gaming Headset",
      description: "RGB wired gaming headset with surround sound and noise-cancelling microphone.",
      price: 2599,
      image: "https://i.pinimg.com/736x/ba/7b/5b/ba7b5b6a55ad84ecf9469e6df1a8d20b.jpg",
      Add2Cart: false,
      qty: 1
    },
    {
      id: 12,
      title: "Power Bank",
      description: "20000mAh fast-charging power bank with dual USB output and Type-C input.",
      price: 1799,
      image: "https://i.pinimg.com/736x/b3/5e/10/b35e10e5f00bfab867489949d8383a0b.jpg",
      Add2Cart: false,
      qty: 1
    },
  ]);

  const [cart, setcart] = useState([]);

  const CartHandler = (key) => {
    const selected = Products.find((p) => p.id == key)
    if (!selected.Add2Cart) {
      selected.Add2Cart = true;
      setcart([...cart, selected])
    }
    // console.log(cart);
    setProducts(
      Products.map((p) =>
        p.id === key ? { ...p, Add2Cart: true } : p
      ))

  }

  const removeHandler = (key) => {
    const deleted = cart.filter((p) => p.id !== key);
    // console.log(deleted);
    setcart(deleted)

    setProducts(
      Products.map((p) =>
        p.id === key ? { ...p, Add2Cart: false } : p
      ))
  }

  const cartIncr = (key) => {
    const updated = cart.map((card) => card.id == key ? { ...card, qty: card.qty + 1 } : card)
    setcart(updated)

  }
  const cartDecr = (key) => {
    const updated = cart.map((card) => card.id == key ? { ...card, qty: Math.max(0, card.qty - 1) } : card)
    setcart(updated)

  }

  return (
    <BrowserRouter>
      <div className=' w-100% pt-16 bg-[#AED6CF]'>
        <Header cart={cart} />
        <Routes>
          <Route path='/product' element={<Product Product={Products} setProduct={setProducts} CartHandler={CartHandler} />} />
          <Route path='/cart' element={<Cart cart={cart} removeHandler={removeHandler} cartIncr={cartIncr} cartDecr={cartDecr} />} />
          <Route path='/create-product' element={<Create Product={Products} setProduct={setProducts} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
