import React from 'react'
import { FaSackDollar } from 'react-icons/fa6'
import { PiMapPinLineBold } from 'react-icons/pi'

const CompanyDetailsHeader = () => {
    return (
        <div>
            <div className="bg-white h-fit p-8 rounded-xl">
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <h1 className="text-slate-800 font-semibold text-sm tracking-wide">Lead UI/UX Designer</h1>
                        <h5 className="text-xs text-slate-800 font-medium">Experience 2-5 years</h5>
                    </div>
                    <div className="flex">
                        <div className="bg-green-600 p-4 rounded-full">
                            <FaSackDollar className='text-slate-200' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-slate-800 font-semibold'>$14,000 - $25,000</h1>
                            <h5 className="text-xs text-slate-500 font-medium">Monthly Salary</h5>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="bg-orange-400 p-4 rounded-full">
                            <PiMapPinLineBold className='text-slate-200' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-slate-800 font-semibold'>$14,000 - $25,000</h1>
                            <h5 className="text-xs text-slate-500 font-medium">Monthly Salary</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetailsHeader