import React from 'react'

function Result() {
  return (
    <div className=' px-10 py-5 bg-gradient-to-t from-gradient-lightSlateBlue to-gradient-lightRoyalBlue rounded-b-2xl md:rounded-2xl flex flex-col items-center w-full md:w-1/2'>
        <span className='text-neutral-White p-5 '>Your Result</span>
        <div className=' w-[150px] h-[150px] p-5 bg-gradient-to-t from-gradient-violetBlue to-gradient-persianBlue rounded-full flex flex-col justify-center items-center'>
            <h1 className='text-neutral-White w-fit text-3xl font-extrabold'>76</h1>
            <span className='w-fit text-neutral-White'>of 100</span>
        </div>
        <h3 className='font-bold text-lg text-white w-fit'>Great</h3>
        <p className='p-5 text-white w-fit text-center'>You scored higher than 65% of
            people who have taken these tests.
        </p>
    </div>
  )
}

export default Result