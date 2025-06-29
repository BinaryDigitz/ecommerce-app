import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <section>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius consequatur quo volupt ateiditate quaerat iusto incidunt?
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>
                <div >
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1 232-232-4383</li>
                        <li>contact@forever.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copy0right 2024@ forever.com - All Rights Reserved | Developed by: <a className='text-blue-700 underline' href='https://banginic-1.onrender.com ' target='blank'>Banginic</a> </p>
            </div>

        </section>
    )
}

export default Footer
