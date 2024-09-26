import React, { useState, useEffect } from 'react'
import Questions from './Questions'
import AOS from "aos";
import "aos/dist/aos.css"
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'

const Home = () => {
  //scroll animations
  useEffect(() => {
    AOS.init({duration:1200})
  })

  //motion



  return (
    <>
      {/* main section */}
      <div className="bg-[#F9F6F4] flex flex-col items-center text-[#44423F]">
        <div className='flex gap-10  justify-center items-center px-20 py-40'>
            <div className='w-2/4 flex gap-6 flex-col'>
              <h1 className='text-7xl font-semibold leading-[5rem] text-[#44423F]'>Helping You Navigate Social Anxiety.</h1>
              <p className='text-3xl leading-[2.6rem] text-[#44423F]'>Social Soothe will help with your social anxiety
                when no one else will.
              </p>
              <div>
                <button className='bg-[#EE7B30] text-white  p-5 rounded-full text-[18px] font-bold shadow-md'>Try it now</button>
              </div>
            </div>
          <div>

            <img src={`/public/walking.svg`} className="h-96"  alt="Description" />
          </div>
        </div>

        {/* Social Soothe horizontal description section */}
        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className='bg-white flex flex-wrap justify-center items-center px-20 py-40 gap-16 w-full'>
            <div className='flex flex-col gap-5 max-w-sm'>
              <div className='flex  items-center gap-5'>
                <img src={'/public/write.svg'} className="h-32"/>
                <h2 className='font-bold text-2xl'>Write down your emotions</h2>
              </div>
              <p className='text-lg'>Write down and keep a journal of how your feeling each to keep track of your mental health
                and progression with social anxiety
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm' >
              <div className='flex items-center gap-5'>
                <img src={'/public/yoga.svg'} className="h-32"/>
                <h2 className='font-bold text-2xl'>Take some breathing exercises</h2>
              </div>
              <p className='text-lg'>Write down and keep a journal of how your feeling each to keep track of your mental health
                and progression with social anxiety
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm'>
              <div className='flex items-center gap-5'>
                <img src={'/public/step.svg'} className="h-32"/>
                <h2 className='font-bold text-2xl'>Keep track of goals</h2>
              </div>
              <p className='text-lg'>Write down and keep a journal of how your feeling each to keep track of your mental health
                and progression with social anxiety
              </p>
            </div>
        </motion.div>
        <Questions />

        {/* Social Soothe description section*/}
        <div className="bg-[#F9F6F4] flex flex-col justify-center items-center px-10 py-20 gap-10 w-full">
          <h2 className='text-5xl text-center py-10 font-medium'>Take our Social Soothe challenge</h2>
          <div className='flex flex-col gap-20 items-center justify-center'>

            <div className='flex gap-20 items-center justify-center max-w-2xl' data-aos="fade-up">
                <img src={"/public/plant.svg"} className='w-1/3' />
                <div className='flex flex-col gap-5'>
                  <h2 className='text-3xl'>Start easy and slow</h2>
                  <p className='text-2xl'>Our challenge will gradually give you social interactions through different levels, start with easy challenges that will slowly get your social juices flowing</p>
                </div>
            </div>

            <img src={'/public/arrow-down.svg'} className='h-20'/>

            <div className='flex gap-20 items-center justify-center max-w-2xl'  data-aos="fade-up">
              <img src={"/public/undraw_fall_thyk.svg"} className='w-1/3' />
              <div className='flex flex-col gap-5'>
                <h2 className='text-3xl'>Grow gradually</h2>
                <p className='text-2xl'>Each step will gradually have you socially interact more, with each level, social interactions will require more talking
              and public exposure.</p>
              </div>
            </div>

            <img src={'/public/arrow-down.svg'} className='h-20'/>

            <div className='flex gap-20 items-center justify-center max-w-2xl' data-aos="fade-up">
              <img src={"/public/undraw_blooming_re_2kc4.svg"} className='w-1/3' />
              <div className='flex flex-col gap-5'>
                <h2 className='text-3xl'>Level Up</h2>
                <p className='text-2xl'>Complete each step to level up to gain water points to help grow your social flower and help it sprout</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Social Soothe article section*/}
      <div className='bg-white flex flex-col justify-center px-20 py-32 gap-10 w-full text-[#44423F'>
        <h2 className='font-medium text-5xl text-start text-[#44423F] font-semibold'>Featured Articles</h2>
        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}


        className='grid grid-rows-2 grid-flow-col gap-3'>

          <div className='p-5 rounded-xl flex justify-between bg-[#EE7B30] shadow-lg col-start-1 col-span-2'>
            <div>
              <div className='bg-white p-5 flex flex-col rounded-xl'>
                <p>Simple ways to cope with social anxiety</p>
                  <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                      &rarr;
                  </div>

              </div>
            </div>
            <img src={"/public/happy.svg"} className='h-40'/>
          </div>


          <div className='p-5 rounded-xl flex flex-col bg-[#F7D046] shadow-md'>
              <div>
                <div className='bg-white p-5 flex flex-col rounded-xl'>
                  <p>Simple ways to cope with social anxiety</p>
                    <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                        &rarr;
                    </div>

                </div>
              </div>

          </div>

          <div className='p-5 rounded-xl flex flex-col bg-[#EA5933] shadow-md'>
              <div>
                <div className='bg-white p-5 flex flex-col rounded-xl'>
                  <p>Simple ways to cope with social anxiety</p>
                    <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                        &rarr;
                    </div>

                </div>
              </div>

          </div>

          <div className='p-5 rounded-xl flex flex-col justify-end bg-pink shadow-md'>
                <div>
                  <div className='bg-white p-5 flex flex-col rounded-xl'>
                    <p>Simple ways to cope with social anxiety</p>
                      <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                          &rarr;
                      </div>

                  </div>
                </div>

          </div>

          <div className='p-5 rounded-xl flex flex-col bg-lightRed shadow-md'>
                <div>
                  <div className='bg-white p-5 flex flex-col rounded-xl'>
                    <p>Simple ways to cope with social anxiety</p>
                      <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                          &rarr;
                      </div>

                  </div>
                </div>


          </div>

          <div className='p-5 rounded-xl flex justify-between bg-lightOrange shadow-md row-start-2 col-start-3 col-end-5'>
              <div>
                <div className='bg-white p-5 flex flex-col rounded-xl'>
                  <p>Simple ways to cope with social anxiety</p>
                    <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                        &rarr;
                    </div>

                </div>
              </div>
              <img src={"/public/happy.svg"} className='h-40'/>

          </div>
        </motion.div>

        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className='flex justify-center'>
          <button className='bg-[#EE7B30] text-white  p-5 rounded-full text-[18px] font-bold shadow-md'>View all articles</button>
        </motion.div>



      </div>


    </>

  )
}

export default Home
