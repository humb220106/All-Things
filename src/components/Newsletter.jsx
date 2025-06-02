    import React from 'react'
    import Banner from '../shared/Banner'
    import BannerImg from '../assets/Newletter.png'

    const Newsletter = () => {
      return (
        <div className='md:px-14 p-4 max-w-screen-2x1 mx-auto my-12'>
          <Banner banner={BannerImg} heading="ORDER & Delivery"
          subheading={"Treat yourself to convenience. Order ahead and breeze in for pickup it's that simple!"} btn1={"Order Now"} />
        </div>
      ) 
    }

    export default Newsletter
