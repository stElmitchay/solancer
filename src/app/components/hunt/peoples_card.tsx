/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PiCircleFill } from 'react-icons/pi';
import StarRating from '../home/star_rating';

const PeoplesCard = () => {
  return (
    <div>
      <div className="bg-white p-4 max-w-sm h-fit flex flex-col justify-between rounded-xl">

        <div>
          <div className="relative">
            <div className="flex justify-center">
              <img className='rounded-full w-24 h-24' src="https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220" alt="ddd" />
              <div className="bg-green-500 h-8 rounded-full flex items-center px-2 absolute top-[80px]">
                <PiCircleFill className='text-white size-2.5' />
                <h5 className='text-xs font-semibold tracking-wide ml-1'>AVAILABLE</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-slate-800 relative text-nowrap items-center pt-6 gap-y-1">
            <h1 className="font-semibold text-xl">Angela Moss</h1>
            <h5 className='text-sm'>Content Writer</h5>
            <StarRating />
          </div>

        </div>


        <div className="mt-12">
          <div className="flex flex-col gap-y-4">
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </div>

        </div>
      </div>
    </div>
  )
}

export default PeoplesCard;



const CardInfo = () => {
  return (
    <div className="flex justify-between text-xs">
      <h5 className="text-slate-400">From</h5>
      <h5 className="font-semibold text-slate-800">New York, US</h5>
    </div>
  )
};