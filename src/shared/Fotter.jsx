import React from 'react';
import logo from "../assets/logo.png";
import fbImg from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import LinkedIn from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className='bg-[#5E98D6] md:px-14 p-4 max-w-screen-2x1 mx-auto text-white'>
      <div className='my-12 flex flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 space-y-8'>
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
            <img src={logo} alt="Logo" className="w-10 inline-block" />
            <span>XYZ</span>
            </a>
                        <p className='md:w-1/2'>ALL Things® is more than an app, it's an all-in-one wellness experience. Taking care of your physical and mental health is essential for a fulfilling life,
                        and we are here to support you every step of the way. </p>
                <div>
            <input type="email" name='email' id='email' placeholder='Your email' 
            className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
            <input type="sumbit" value="Subscribe" className='px-1 py-2 bg-secondary rounded-md -ml-2 
            cursor-pointer hover:bg-white hover:text-primary duration transition-all' />
        </div>
        </div>

        <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Platform</h4>
            <ul className='space-y-3'>
              <li><a href='/' className='block hover:text-gray-300'>Home</a></li>
              <li><a href='/' className='block hover:text-gray-300'>Our Menu</a></li>
              <li><a href='/' className='block hover:text-gray-300'>About</a></li>
              <li><a href='/' className='block hover:text-gray-300'>Our Plans</a></li>
            </ul>
          </div>

          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Help</h4>
            <ul className='space-y-3'>
              <li><a href='/' className='block hover:text-gray-300'>How does it work?</a></li>
              <li><a href='/' className='block hover:text-gray-300'>Where to ask question?</a></li>
              <li><a href='/' className='block hover:text-gray-300'>How to cook?</a></li>
              <li><a href='/' className='block hover:text-gray-300'>What is the needed for this?</a></li>
            </ul>
          </div>

          <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Contacts</h4>
            <ul className='space-y-3'>
              <li><p href='/' className='hover:text-gray-300'>(+234)9065162535</p></li>
              <li><p href='/' className='hover:text-gray-300'>123 xyz xyz</p></li>
              <li><p href='/' className='hover:text-gray-300'>Lorem ipsum dolor </p></li>
              <li><p href='/' className='hover:text-gray-300'>086755</p></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
        <p>@ All Things 2024 --- 2024 All rights reserved</p>
        <div className='flex items-center space-x-5'>
          <img src={fbImg} alt="Facebook" className='w-8 cursor-pointer hover:-translate-y-4 transition-all
          duration-300'   />
          <img src={Instagram} alt="Instagram" className='w-8 cursor-pointer hover:-translate-y-4 transition-all
          duration-300'  />
          <img src={Twitter} alt="Twitter" className='w-8 cursor-pointer hover:-translate-y-4 transition-all
          duration-300'  />
          <img src={LinkedIn} alt="LinkedIn"  className='w-8 cursor-pointer hover:-translate-y-4 transition-all
          duration-300' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
