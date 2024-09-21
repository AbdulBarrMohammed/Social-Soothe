import React from 'react'

const Home = () => {
  return (
    <>

      <div className="bg-[#F9F6F4] flex flex-col items-center text-[#44423F]">
        <div className='flex gap-10  justify-center items-center p-20'>
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


        <div className='bg-white flex flex-wrap justify-center items-center p-20 gap-16 w-full'>
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
                <img src={'/public/write.svg'} className="h-32"/>
                <h2 className='font-bold text-2xl'>Take some breathing exercises</h2>
              </div>
              <p className='text-lg'>Write down and keep a journal of how your feeling each to keep track of your mental health
                and progression with social anxiety
              </p>
            </div>

            <div className='flex flex-col gap-5 max-w-sm'>
              <div className='flex items-center gap-5'>
                <img src={'/public/write.svg'} className="h-32"/>
                <h2 className='font-bold text-2xl'>Keep track of goals</h2>
              </div>
              <p className='text-lg'>Write down and keep a journal of how your feeling each to keep track of your mental health
                and progression with social anxiety
              </p>
            </div>
        </div>
    </div>
    </>

  )
}

export default Home
