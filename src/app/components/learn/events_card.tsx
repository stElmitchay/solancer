import React from 'react'
import { PiCheckCircle } from 'react-icons/pi';

type Event = {
    day: string,
    month: string,
    eventCategory: string,
    eventTitle: string,
    eventDescription: string,
    icon?: React.ReactNode
}



const EventsCard = ({day, month, eventCategory, eventTitle, eventDescription, icon}: Event) => {
    return (
        <div>
            <div className="bg-white rounded-xl w-[380px] h-96 relative">
                <div className="bg-gray-500 h-1/2 w-full rounded-t-lg "></div>
                <div className="flex flex-col ps-4">
                    <div className="flex flex-row">

                        <div className="bg-green-500 rounded-full absolute p-2 top-40 scale-x-125 scale-y-125">
                            <div className="flex flex-col text-center">
                                <h1 className='font-semibold text-lg'>{day}</h1>
                                <h5 className='text-xs text-slate-300 uppercase'>{month}</h5>
                                <div className="bg-white p-2 rounded-full mt-4">
                                    {icon}
                                </div>
                            </div>
                        </div>

                        <div className='relative ps-20 py-4 text-pretty'>
                            <div className="flex flex-col w-full">
                                <h2 className='text-orange-500 font-medium tracking-wide text-sm'>{eventCategory}</h2>
                                <h1 className='text-slate-800 font-semibold mt-2'>{eventTitle}</h1>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h5 className='text-slate-800 font-light text-pretty'>{eventDescription}</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventsCard;