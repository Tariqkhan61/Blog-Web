import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-3xl text-center font-bold md:test-5xl lg:text-left animate-fade-in-up transition-all duration-500-ease-in-out
        transform hover:translate-y-[-5px] hover:text-black text-red-600 '> M Tariq Mahboob:Avionics Engineer Navigating the Secret of Falcon Fighter Blog</h2>
        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100 '>
        Join M. Tariq Mahboob as he delves into the dynamic world of aviation, sharing insights from foundational concepts to advanced techniques. With decades of experience as a certified Avionics Mechanic specializing in F-16, C-130, T-37, and Mashak aircraft, Tariq brings a wealth of expertise to the table. Explore the intricacies of aircraft systems, maintenance protocols, and cutting-edge technologies that ensure safety and excellence in the skies.
        </p>
        
        <div className='mx-auto max-w-7xl px-5'>

          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring the world of Avionics</h1>

         <div className='grid grid-col-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
           {[
            "Aircraft Technology." ,
            "Artificial Inteligence",
            "HTML & CSS",
            "React & Next.Js",
            "TailwindCSS",
            "Web Development",

           ] .map((category, index) =>(
            <div key={index}
            className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600 '>
              <p className='text-center text-lg font-semibold '>{category}</p>
              <div className='absolute inset-0 border-2 border-transparent group-hover:border-orange-300 rounded-lg transition duration-300 ease-in-out'>

              </div>

            </div>
           ))}
         </div>

        </div>
        <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>Dive into our diverse range of categories, where you'll uncover a wealth of knowledge and insights tailored to your interests. Whether you're passionate about **Aircraft Technology** and eager to explore the latest advancements in aviation, or you're fascinated by the future of **Artificial Intelligence**, our content has something for everyone. Expand your web development skills with comprehensive guides on **HTML & CSS**, **React**, and **Next.js**, or elevate your design capabilities with the power of **TailwindCSS**. Whatever your focus, our categories are designed to equip you with the tools and expertise you need to excel.</p>

      </section>
    </div>
  )
}
