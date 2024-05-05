import React from 'react';
import dinnerImg from "../assets/dinner.png";
import breakfastImg from "../assets/breakfast.png";
import maincourseImg from '../assets/maincourse.png'

const Features = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
        <div className='lg:w-1/4'>
          <h3 className='text-4xl text-primary font-bold mb-3'>OUR MENU</h3>
          <br/>
          <p className='text-base text-tartiary'></p>Are you craving a classic comfort food or eager to explore new culinary adventures, our menu offers something to tantalize every palate.
          <div className='w-full mx-auto mt-8 flex items-center'>
                            <button className='btnPrimary'>View Our Full Menu</button>
                        </div>
        </div>

        <div className='w-full lg:w-3/4'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
              <img src={breakfastImg} alt="Feature 1" className='mx-auto mb-5' />
              <h5 className='text-2xl font-semibold text-primary px-5 text-center'>Breakfast and Starters</h5>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer 
            md:mt-16'>
              <img src={maincourseImg} alt="Feature 2" className='mx-auto mb-5' />
              <h5 className='text-2xl font-semibold text-primary px-5 text-center'>Main Courses</h5>
            </div>

            <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
              <img src={dinnerImg} alt="Feature 3" className='mx-auto mb-5' />
              <h5 className='text-2xl font-semibold text-primary px-5 text-center'>Dinner</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
