import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import CompanyDetailsCard from '../components/job-details/company_details_card'

export default function Job_Details() {

    return (
        <main className='min-h-screen bg-[#F6F8FD]'>

            <div className="bg-green-950 h-96 px-12">
                <div className="flex">
                    <button className="bg-white rounded-full p-4">
                        <FaLongArrowAltLeft className='text-green-950' />
                    </button>
                    <div className="flex flex-col place-items-center place-content-center w-full">
                        <h1 className="text-slate-200 font-semibold text-xl">Apply Job</h1>
                        <h5 className="text-sm font-light">Jobs / Highspeed Studios / UI Designer</h5>
                    </div>
                </div>


                <div className="absolute">
                    <div className="flex gap-x-12">
                        <CompanyDetailsCard />
                        <CompanyDetailsCard />

                    </div>
                </div>




            </div>



        </main>
    )

}