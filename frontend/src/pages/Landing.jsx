import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import Questions from './Questions';


//Hard parts
// * Authenticating different users with passport and crypting their password with brycpt and using jwt tokens
// * Storing data in prisma for postgrelSQL under each unique user
// * had trouble playing background sounds when pressed and continuing playing the sound after it is unpaused
// * Had trouble playing and pausing the breathing sounds for the breathing exercises
// * Figuring out a way to create a virtual tree and placing the tree node leafs on random parts on the top of the tree bark
// * keeping and up changing the background color for each user who decides to change their background
// * Diffuculty figuring out how to make sure the user is authenticated to be able to use the site

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
                  <img src={`../src/assets/mh1.png`} className=""  alt="Description" />
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
              <p className='text-lg'>Write down and keep a journal of how your feeling each day when dealing with a social interaction, pick how it made you
              feel and explain why it made you feel that way
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm' >
              <div className='flex items-center gap-1'>

                <img src={'../src/assets/mh3.png'} className="h-40"/>
                <h2 className='font-bold text-2xl'>Take some breathing exercises</h2>
              </div>
              <p className='text-lg'>Learn to take deep breathes when dealing with social anxiety with different breathing techniques for different situations that can help a person feel a sense of calm
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm'>
              <div className='flex items-center gap-1'>
                <img src={'../src/assets/mh4.png'} className="h-40"/>
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
                <img src={"../src/assets/mh8.png"} className='h-60' />
                <div className='flex flex-col gap-3 w-1/3'>
                  <h2 className='text-4xl'>Document your social interactions</h2>
                  <p className='text-3xl'>Before any social event that you are anxious about write down about the event and question and challenge your negative thoughts</p>
                </div>
            </div>

            <img src={'../src/assets/arrow-down.svg'} className='h-20'/>


            <div className='flex gap-20 items-center justify-center'  data-aos="fade-up">

              <div className='flex flex-col gap-3 w-1/3'>
                <h2 className='text-4xl'>Grow gradually</h2>
                <p className='text-3xl'>Each completed social interaction will gradually grow your social tree with flowers.</p>
              </div>
              <img src={"../src/assets/mh1.png"} className='h-60' />

            </div>

            <img src={'../src/assets/arrow-down.svg'} className='h-20'/>

            <div className='flex gap-20 items-center justify-center' data-aos="fade-up">
              <img src={"../src/assets/mh7.png"} className='h-60' />
              <div className='flex flex-col gap-3 w-1/3'>
                <h2 className='text-4xl'>Reward yourself</h2>
                <p className='text-3xl'>Completing each social interaction rewards you with leafs where you can use to earn rewards and a flower that goes on your social tree</p>
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
        <footer className='bg-[#44423F] flex justify-between items-center text-white w-full px-10 py-10'>

          <div className='flex items-center gap-7'>
            <p>&#169; Social Soothe</p>
            <Link to={`/about`}><p>About</p></Link>
            <Link to={'privacyPolicy'}><p>Privacy policy</p></Link>

          </div>

          <ul className='flex items-center gap-2'>
            <li><img src={"../src/assets/icons8-instagram-48.png"} className='h-8'/></li>
            <li><img src={"../src/assets/icons8-facebook-48.png"} className='h-8'/></li>
            <li><img src={"../src/assets/icons8-youtube-48.png"} className='h-8'/></li>
            <li><img src={"../src/assets/icons8-twitter.svg"} className='h-8'/></li>
            <li><img src={"../src/assets/icons8-tiktok-48.png"} className='h-8'/></li>
          </ul>
        </footer>

     </div>



    </>

  )
}
