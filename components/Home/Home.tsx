"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './Whychoose/WhyChoose'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Price from './Price/Price'
import Offer from './Offer/Offer'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useEffect(() => {
    const initAOS=async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  },[]);
  return (
    <div className='overflow-hidden'>
      <Hero />
      {/* whychoose */}
      <div className='pt-16 pb-16'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Why you choose this application</h1>
        <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <WhyChoose image='https://res.cloudinary.com/dpmr3ot0y/image/upload/v1747893227/i1_xeyjmc.webp' title='Create Free Account' linkText='Start Earning' />
          </div>
          <div  data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <WhyChoose image='https://res.cloudinary.com/dpmr3ot0y/image/upload/v1747893231/i2_xjnaau.webp' title='Monitor User Analytics' linkText='Signup Your Store' />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <WhyChoose image='https://res.cloudinary.com/dpmr3ot0y/image/upload/v1747893224/i3_bo8lsv.webp' title='Safe & Trusted' linkText='Get the App' />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <WhyChoose image='https://res.cloudinary.com/dpmr3ot0y/image/upload/v1747893230/i4_c4hred.webp' title='First Customer Support' linkText='Learn More' />
          </div>
        </div>
      </div>
      <AnalyticsFeature />
      <Feature />
      <Review />
      <Price/>
      <Offer />
     
    </div>
  )
}

export default Home