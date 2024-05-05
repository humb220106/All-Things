import React from 'react';
import banner from '../assets/banner.png';
import Banner from '../shared/Banner';

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
     <Banner banner={banner} heading="Enjoy Our Food Experience" 
     subheading="We don’t just make food. We make people’s experience. All Things was built on the belief that food should be special, and we carry that belief into everything we do."  
     btn1="Get Started" btn2="Order Now"/>
    </div>
  );
}

export default Home;