import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import Questions from './Questions';
import mh3 from '../assets/mh3.png'
import mh1 from '../assets/mh1.png'
import mh2 from '../assets/mh2.png'
import mh4 from '../assets/mh4.png'
import mh8 from '../assets/mh8.png'
import mh7 from '../assets/mh7.png'
import arrowDown from '../assets/arrow-down.svg'


export function Landing() {

  return (
    <>
      {/* main section */}
      <div className="bg-[#F0F8FF] flex flex-col items-center text-[#44423F]">
          <div className='bg-[#CCDBEE] flex gap-5  justify-center items-center px-20 py-40'>
              <div className='flex gap-6 flex-col w-1/2'>
                <h1 className='text-7xl font-semibold leading-[5rem] text-[#44423F]'>Helping You Navigate Social Anxiety.</h1>
                <p className='text-3xl leading-[2.6rem] text-[#44423F]'>Social Soothe will help with your social anxiety
                    when no one else will.
                </p>

                <Link to={`/login`}>
                    <button className='bg-[#4470AD] text-white  p-5 rounded-full text-[18px] font-bold shadow-md hover:bg-[#5F8CC6] transition-all duration-300 ease-in-out' >Try it now</button>
                </Link>

              </div>
              <div className='w-1/2'>
                  <img src={mh1} className=""  alt="Description" />
              </div>
          </div>

        {/* Social Soothe horizontal description section */}
        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className='bg-[#F0F8FF] flex flex-wrap justify-center items-center px-20 py-28 gap-16 w-full'>
            <div className='flex flex-col gap-5 max-w-sm'>
              <div className='flex items-center gap-1'>
                <img src={'../src/assets/mh2.png'} className="h-40"/>
                <h2 className='font-bold text-2xl'>Write your emotions</h2>
              </div>
              <p className='text-lg'>Write down and keep a journal of how your feeling each day, choose an emotion that shows how you are currently feeling
              and explain why it made you feel that way
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm' >
              <div className='flex items-center gap-1'>

                <img src={mh3} className="h-40"/>
                <h2 className='font-bold text-2xl'>Take some breathing exercises</h2>
              </div>
              <p className='text-lg'>Learn to take deep breathes when dealing with social anxiety with different breathing techniques for different situations that can help a person feel a sense of calm
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm'>
              <div className='flex items-center gap-1'>
                <img src={mh4} className="h-40"/>
                <h2 className='font-bold text-2xl'>Recieve daily affirmations</h2>
              </div>
              <p className='text-lg'>Check in everyday to recieve as many daily positive affirmations as you want to help boost your social confidence and overall
                mood throughout the day </p>
            </div>
        </motion.div>

        <Questions />


        {/* Social Soothe description section*/}
        <div className="bg-[#CCDBEE] flex flex-col justify-center items-center px-10 py-20 gap-10 w-full">
          <h2 className='text-5xl text-center py-10 font-medium'>Grow your social tree</h2>
          <div className='flex flex-col gap-20 items-center justify-center'>

            <div className='flex gap-20 items-center justify-center' data-aos="fade-up">
                <img src={mh8} className='h-60' />
                <div className='flex flex-col gap-3 w-1/3'>
                  <h2 className='text-3xl'>Document your social interactions</h2>
                  <p className='text-2xl'>Before any social event that you are anxious about write down about the event and answer questions to challenge any negative thoughts you have about it </p>
                </div>
            </div>

            <img src={arrowDown} className='h-20'/>


            <div className='flex gap-20 items-center justify-center'  data-aos="fade-up">

              <div className='flex flex-col gap-3 w-1/3'>
                <h2 className='text-3xl'>Grow gradually</h2>
                <p className='text-2xl'>Each completed social interaction will gradually grow your social tree with flowers that respresent each completed social interaction</p>
              </div>
              <img src={mh1} className='h-60' />

            </div>

            <img src={arrowDown} className='h-20'/>

            <div className='flex gap-20 items-center justify-center' data-aos="fade-up">
              <img src={mh7} className='h-60' />
              <div className='flex flex-col gap-3 w-1/3'>
                <h2 className='text-3xl'>Reward yourself</h2>
                <p className='text-2xl'>Completing each social interaction rewards you with leafs, which you can use to earn different rewards</p>
              </div>
            </div>

          </div>
        </div>


        <footer className='bg-[#99AFD7] flex flex-col justify-center items-center px-10 py-20 gap-10 w-full'>
          <div className='flex justify-around'>
            <div className='flex flex-col gap-2 w-1/2'>
              <p className='font-bold text-2xl'>Your Mental Health matters</p>
              <p className='text-[#44423F]'>If you are in a crisis or any other person life maybe in danger please don't use this site. Their are available resources that can give
                you immediate help.
              </p>
            </div>

          </div>

        </footer>



        {/* Footer  bottom links and copyright*/}
        <footer className='bg-[#44423F] flex justify-center items-center text-white w-full px-10 py-10'>

          <div className='flex items-center gap-7'>
            <p>&#169; Social Soothe</p>
            <Link to={`/about`}><p className='hover:underline underline-offset-2'>About</p></Link>
            <Link to={'/privacyPolicy'}><p className='hover:underline underline-offset-2'>Privacy policy</p></Link>

          </div>


        </footer>

     </div>



    </>

  )
}
