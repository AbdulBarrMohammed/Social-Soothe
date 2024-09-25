import React, { useState } from 'react'
import Questions from './Questions'

const Home = () => {


  return (
    <>

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


        <div className='bg-white flex flex-wrap justify-center items-center px-20 py-40 gap-16 w-full'>
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
        </div>
        <Questions />

        <div className="bg-[#F9F6F4] flex flex-col justify-center items-center px-10 py-10 gap-10 w-full">
          <h2 className='text-5xl text-center py-10 font-medium'>Take our Social Sooth challenge</h2>
          <div className='flex flex-col gap-24 items-center justify-center'>

            <div className='flex gap-20 items-center justify-center max-w-2xl'>
                <img src={"/public/plant.svg"} className='w-1/3' />
                <div className='flex flex-col gap-5'>
                  <h2 className='text-3xl'>Start easy and slow</h2>
                  <p className='text-2xl'>Our challenge will gradually give you social interactions through different levels, start with easy challenges that will slowly get your social juices flowing</p>
                </div>
            </div>

            <img src={'/public/arrow-down.svg'} className='h-32'/>

            <div className='flex gap-20 items-center justify-center max-w-2xl'>
              <img src={"/public/plant.svg"} className='w-1/3' />
              <div className='flex flex-col gap-5'>
                <h2 className='text-3xl'>Grow gradually</h2>
                <p className='text-2xl'>Each step will gradually have you socially interact more, with each level, social interactions will require more talking
              and public exposure.</p>
              </div>
            </div>


          </div>


        </div>



      </div>


    </>

  )
}

export default Home
