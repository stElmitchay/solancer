import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import CompanyDetailsCard from '../components/job-details/company_details_card'
import Footer from '../components/core/footer'
import CompanyDetailsHeader from '../components/job-details/company-details-header'
import CompanyJobApplicationForm from '../components/job-details/company-job-application-form'

export default function Job_Details() {

    return (
        <main className='bg-[#F6F8FD] min-h-fit'>
            <div className="bg-green-950 h-60 px-12 pt-8">

                <div className="flex">
                    <button className="bg-white rounded-full p-4">
                        <FaLongArrowAltLeft className='text-green-950' />
                    </button>
                    <div className="flex flex-col place-items-center place-content-center w-full">
                        <h1 className="text-slate-200 font-semibold text-xl">Apply Job</h1>
                        <h5 className="text-sm font-light">Jobs / Highspeed Studios / UI Designer</h5>
                    </div>



                </div>
            </div>

            <section className="h-fit px-24">
                <div className="-mt-24 flex">
                    <CompanyDetailsCard />
                    <div className="flex flex-col w-full ml-6">
                        <CompanyDetailsHeader />
                        <div className="mt-6">
                            <CompanyJobApplicationForm />

                        </div>
                    </div>
                </div>


                <div className="flex text-slate-800 py-24 gap-12 justify-center">
                    <h1 className='text-2xl'>KJNKJNSJKN</h1>
                    <h1 className='text-2xl'>KJNKJNSJKN</h1>
                    <h1 className='text-2xl'>KJNKJNSJKN</h1>
                    <h1 className='text-2xl'>KJNKJNSJKN</h1>
                    <h1 className='text-2xl'>KJNKJNSJKN</h1>
                </div>

            </section>








            <Footer />






        </main>
    )

}