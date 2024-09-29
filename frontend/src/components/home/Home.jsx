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
      <div className="bg-white flex flex-col items-center text-[#44423F]">
        <div className='bg-[#F9F6F4] flex gap-10  justify-center items-center px-20 py-40 w-full'>
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
              <p className='text-lg'>Learn to take deep breathes when dealing with social anxiety with 4-7-8 technique that when done repeatedly can help a person feel a sense of calm
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm'>
              <div className='flex items-center gap-5'>
                <img src={'/public/images/undraw_message_sent_re_q2kl.svg'} className="h-32"/>
                <h2 className='font-bold text-2xl'>Share and chat with others</h2>
              </div>
              <p className='text-lg'>Create safe spaces with other users where you can post anonymously about your experiences, challenges, or victories and message others with similar experiences
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

      <div className='bg-white flex flex-col justify-center items-center px-20 py-32 gap-10 w-full text-[#44423F'>
        <h2 className='font-medium text-5xl text-start text-[#44423F] font-semibold'>Featured Articles</h2>

        <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}


        className='grid grid-rows-2 grid-flow-col gap-3'>

          <div className='p-5 rounded-xl flex justify-between gap-5 bg-[#EE7B30] shadow-lg col-start-1 col-span-2'>
            <div>
              <div className='bg-white p-5 flex flex-col rounded-xl'>
                <p>Coping mechanisms for social anxiety</p>
                  <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                      &rarr;
                  </div>

              </div>
            </div>
            <img src={"/public/happy.svg"} className='h-24'/>
          </div>


          <div className='p-5 rounded-xl flex flex-col bg-[#F7D046] shadow-md'>
              <div>
                <div className='bg-white p-5 flex flex-col rounded-xl'>
                  <p>Do and Donts of social anxiety</p>
                    <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                        &rarr;
                    </div>

                </div>
              </div>

          </div>

          <div className='p-5 rounded-xl flex flex-col bg-[#EA5933] shadow-md'>
              <div>
                <div className='bg-white p-5 flex flex-col rounded-xl'>
                  <p>The Science of Social Anxiety</p>
                    <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                        &rarr;
                    </div>

                </div>
              </div>

          </div>

          <div className='p-5 rounded-xl flex flex-col justify-end bg-pink shadow-md'>
                <div>
                  <div className='bg-white p-5 flex flex-col rounded-xl'>
                    <p>The Link Between Social Anxiety and Other Mental Health Issues</p>
                      <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                          &rarr;
                      </div>

                  </div>
                </div>

          </div>

          <div className='p-5 rounded-xl flex flex-col bg-lightRed shadow-md'>
                <div>
                  <div className='bg-white p-5 flex flex-col rounded-xl'>
                    <p>Managing Social Anxiety in Professional Settings</p>
                      <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                          &rarr;
                      </div>

                  </div>
                </div>


          </div>

          <div className='p-5 rounded-xl flex justify-between gap-5 bg-lightOrange shadow-md row-start-2 col-start-3 col-end-5'>
              <div>
                <div className='bg-white p-5 flex flex-col rounded-xl'>
                  <p>Social Anxiety in Adolescents: Recognizing and Addressing the Issue</p>
                    <div className='bg-lightRed h-5 w-5 p-3 rounded-3xl flex justify-center items-center text-white'>
                        &rarr;
                    </div>

                </div>
              </div>
              <img src={"/public/images/undraw_junior_soccer_6sop.svg"} className='h-20'/>

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

      <footer className='bg-[#F9F6F4] flex flex-col justify-center items-center px-10 py-20 gap-10 w-full'>
        <div className='flex justify-around'>
          <div className='flex flex-col gap-2 w-1/2'>
            <p className='font-bold text-xl'>Your Mental Health matters</p>
            <p className='text-[#44423F]'>If you are in a crisis or any other person life maybe in danger please don't use this site. Their are available resources that can give
              you immediate help.
            </p>
          </div>
          <div>
            <button className='bg-[#44423F] text-white p-5 rounded-full text-[18px] font-bold shadow-md'>Resources</button>
          </div>

        </div>

      </footer>
      {/* Footer  bottom links and copyright*/}
      <footer className='bg-[#44423F] flex justify-between items-center text-white w-full px-10 py-10'>

        <div className='flex items-center gap-7'>
          <p>&#169; Social Soothe</p>
          <p>About</p>
          <p>Privacy policy</p>
          <p>Terms & conditions</p>

        </div>
        <ul className='flex items-center gap-2'>
          <li><img src={"/public/images/icons8-instagram.svg"} className='h-8'/></li>
          <li><img src={"/public/images/icons8-facebook-48.png"} className='h-8'/></li>
          <li><img src={"/public/images/icons8-youtube.svg"} className='h-8'/></li>
          <li><img src={"/public/images/icons8-twitterx.svg"} className='h-8'/></li>
          <li><img src={"/public/images/icons8-tiktok.svg"} className='h-8'/></li>
        </ul>
      </footer>


    </>

  )
}

export default Home
