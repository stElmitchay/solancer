import React from 'react'
import { PiMapPin } from 'react-icons/pi';

const WhyChooseUsCard = () => {
    return (
        <div>
            <div className='max-w-sm h-48 bg-[#BBEDED] p-8 pb-52 rounded-2xl'>
                <div className="bg-[#FF754C] size-12 p-2 rounded-xl mb-4">
                    <div className='size-4  bg-white rounded-full'>
                        <PiMapPin className='text-[#FF754C]' />
                    </div>
                </div>

                <h1 className='text-2xl font-semibold'>Transparent</h1>
                <h5 className='text-sm mt-2'>We maintain a full transparency policy making sure everything is seen.</h5>

            </div>
        </div>
    )
}

export default WhyChooseUsCard; 