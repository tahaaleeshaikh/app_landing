import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
   <div className='w-full pt-[7vh] md:pt-[12vh] min-h-screen bg-[#f7f6fb]'>
        <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-14'>
            {/* Text content */}
            <div>
              {/* Top box */}
              <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white mt-10'>
                <div className='px-3 py-1 md:px-5 rounded-full md:py-1 bg-blue-700 md:text-base sm:text-sm text-xs text-white'>
                  News
                </div>
                <p className='text-xs sm:text-sm'>
                  We have updated our Term & Conditions Policy
                </p>
              </div>

              {/* Heading */}
              <h1 data-aos="fade-up" className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'>
                The premier Workspace Companion for our daily needs.
              </h1>

              {/* Description */}
              <p className='text-gray-700'>
                Lorem ipsum dolor sit amet. consectetur adipiscing elit. Quisque
                id erat at enim facilisis
              </p>

              {/* playstore and appstore image */}
              <div className='flex mt-8 mb-8 items-center space-x-4'>
                <Image
                  src='/images/gp.png'
                  alt='play store'
                  width={150}
                  height={150}
                  className='object-contain'
                />
                <Image
                  src='/images/as.png'
                  alt='App store'
                  width={150}
                  height={150}
                  className='object-contain'
                />
              </div>
            </div>

            {/* Image content */}
            <div data-aos="fade-up" data-aos-delay="200" className='hidden lg:block w-auto h-auto'>
              <Image
                src='/images/hero.png'
                alt='hero'
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero
