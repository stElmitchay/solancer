import React from 'react'
import { PiCheckCircle } from 'react-icons/pi';

const EventsCard = () => {
    return (
        <div>
            <div className="bg-white rounded-xl w-[380px] h-96 relative">
                <div className="bg-gray-500 h-1/2 w-full rounded-t-lg "></div>
                <div className="flex flex-col ps-4">
                    <div className="flex flex-row">

                        <div className="bg-green-500 rounded-full absolute p-2 top-40 scale-x-125 scale-y-125">
                            <div className="flex flex-col text-center">
                                <h1 className='font-semibold text-lg'>20</h1>
                                <h5 className='text-xs text-slate-300'>NOV</h5>
                                <div className="bg-white p-2 rounded-full mt-4">
                                    <PiCheckCircle className='text-green-600' />
                                </div>
                            </div>
                        </div>

                        <div className='relative ps-20 py-4 text-pretty'>
                            <div className="flex flex-col w-full">
                                <h2 className='text-orange-500 font-medium tracking-wide text-sm'>MOBILE APP</h2>
                                <h1 className='text-slate-800 font-semibold mt-2'>Global Android Programmer Meetup 2020 </h1>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h5 className='text-slate-800 font-light text-pretty'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventsCard;