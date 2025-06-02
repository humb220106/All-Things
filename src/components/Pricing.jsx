import React, { useState } from 'react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { 
            name: "Start", 
            monthlyPrice: 19, 
            yearlyPrice: 199, 
            green: "/src/assets/dot.png", 
            texts: [
               "2% Off Food When You Come To Dine",
                "Reservation Access for Friends And Family Once a Year",
                "Additional practical Cooking For Customers",
                "20% Expenses Paid trips and adequate Accommodation",
                "Personal advice from Chefs And addition of Free Courses"
            ]
        },
        { 
            name: "Premium", 
            monthlyPrice: 39, 
            yearlyPrice: 399, 
            green: "/src/assets/dot.png", 
            texts: [
                "Seasonal Sneak Peak Tasting Of New Cocktails",
                "5% Off Every Visit to Greywind Spygold and the Bakery",
                " One Complimentary Ticket To Every Shows",
                "One Complimentary Dish Per Visit",
                "Reservation Access for Friends And Family Twice a Year"
            ]
        },
        { 
            name: "VIP", 
            monthlyPrice: 59, 
            yearlyPrice: 599, 
            green: "/src/assets/dot.png", 
            texts: [
                "Exclusive Access To Members Only Events At all locations",
                "Complimentary Bottle Of Wine Every Month",
                "Complimentary Tickets To Every Shows",
                "10% Off Food When You Come To Dine",
                "All Expenses Paid trips and adequate Accommodation"
            ]
        },
    ];

    return (
        <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='pricing'>
            <div className='text-center'>
                <h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2 '>Here are our plans</h2>
                <p className='text-tartiary md:w-1/3 mx-auto px-4'><strong>Embark on a journey of culinary excellence with our exclusive membership cards.
                 Whether you're starting your gourmet adventure or seeking the ultimate VIP experience, we have the perfect card for you.</strong></p>
                <div className='mt-16'>
                    <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                        <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                    </label>
                    <input type="checkbox" id='toggle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)}/>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
                {packages.map((pkg, index) => (
                    <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-none bg-white'>
                        <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                        <p className='text-tartiary text-center my-5'>{pkg.description}</p>
                        <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
                            <span className='text-base text-tartiary font-medium'>
                                /{isYearly ? 'year' : 'month'}
                            </span>
                        </p>
                        <ul className='mt-4 space-y-2 px-4'>
                            {pkg.texts.map((text, idx) => (
                                <li key={idx} className='flex gap-3 items-center'> <img src={pkg.green} alt='' className='img w-4 h-4' />{text}</li>
                            ))}
                        </ul>
                        <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                            <button className='btnPrimary'>Get started</button>
                        </div>      
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
