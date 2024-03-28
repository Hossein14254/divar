import React from 'react'

export default function Statisticsagahi({numagahis,numcomment}) {
  return (
    <div className='bg-white h-[200px] my-3 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105'>
        
        <div className='flex items-center'>
            <div className='inline-block-block mx-4 mt-4 w-6 h-6 rounded-lg bg-[#656ED3]'></div>
            <h1 className='text-2xl -mb-7 mx-4 inline-block'>آمار آگهی ها و کامنت ها</h1>
        </div>
        
        <div className='grid grid-cols-2 mt-4'>
            <div className='flex justify-center col-span-1'>
                <div className='block'>
                    <p>کامنت</p>
                    <div className='text-3xl'>{numcomment}</div>
                </div>
            </div>

            

            <div className='flex justify-center col-span-1'>
                <div className='block'>
                    <p> آگهی</p>
                    <div className='text-3xl'>{numagahis}</div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2'>
            <div className='flex justify-center col-span-1'>
                <a href='#' className='flex justify-center my-3 items-center'>
                    <button className='h-10 bg-[#656ED3] text-white rounded-lg w-32'>مشاهده جزئیات </button>
                </a>
            </div>
            <div className='flex justify-center col-span-1'>
                <a href='#' className='flex justify-center my-3 items-center'>
                    <button className='h-10 bg-[#656ED3] text-white rounded-lg w-32'>مشاهده جزئیات </button>
                </a>
            </div>

        </div>




    </div>
  )
}
