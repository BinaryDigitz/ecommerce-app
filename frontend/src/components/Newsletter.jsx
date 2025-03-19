import React from 'react'

function Newsletter() {
    function handleFormSubmit(event){
        event.preventDefault()
    }
    return (
        <section className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aperiam vitae laboriosam dolorum placeat provident le qui.
            </p>
            <form onSubmit={handleFormSubmit} action="#" className='w-full sm:w-1/2 mx-auto my-6 border pl-3 flex items-center gap-3'>
                <input type="email" required className='w-full sm:flex-1 outline-none' placeholder='Enter your email' autoComplete='email' />
                <button type='submit' className='cursor-pointer hover:opacity-75 trans bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>

        </section>
    )
}

export default Newsletter
