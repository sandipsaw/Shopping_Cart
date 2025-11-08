import React from 'react'


const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/create-product' element={<Create />} />
    </Routes>
  )
}

export default Mainroutes