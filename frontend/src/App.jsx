import React from 'react'
import { ToastContainer } from 'react-toastify'
import { About, Cart, Collection, Contact, NotFound, Home, Login, Order, PlaceOrder, Product, Navbar, Footer, SearchBar } from './components/exportComp'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <header className='trans'>
        <Navbar />
        <SearchBar />
      </header>
      <main>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default App
