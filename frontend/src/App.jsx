import React from 'react'
import { About, Cart, Collection, Contact, NotFound, Home, Login, Order, PlaceOrder, Product, Navbar } from './components/exportComp'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>

    </div>
  )
}

export default App
