import React from 'react'
import aboutImg1 from "../assets/About.jpg"
import aboutImg2 from "../assets/About2.jpg"

const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2'>
            <img src={aboutImg1} alt="" />
        </div>

        <div className='md:w-2/5'>
          <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have 
          been improving our product <span className='text-secondary'>for many years</span></h2>
          <p className='text-tartiary text-lg mb-7'>Over the years, advancements in agriculture, technology, culinary arts, and nutrition
           science have contributed to significant improvements in the quality and variety of food available to us</p>
            <button className='btnPrimary'>Get started</button>
        </div>
      </div>
<br/>
<br/>
        
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        <div className='md:w-1/2'>
            <img src={aboutImg2} alt="" />
        </div>

        <div className='md:w-2/5'>
          <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Delicious food provider <span className='text-secondary'>since 1990</span></h2>
          <p className='text-tartiary text-lg mb-7'>Welcome to our culinary haven, where flavor meets tradition. Since 1990, we've been crafting delectable dishes 
          that tantalize taste buds and leave lasting memories.</p>
            <button className='btnPrimary'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About
