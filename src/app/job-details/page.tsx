import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import CompanyDetailsCard from '../components/job-details/company_details_card'
import CompanyDetailsHeader from '../components/job-details/company-details-header'
import CompanyJobApplicationForm from '../components/job-details/company-job-application-form'
import Footer from '../components/core/footer'

export default function Job_Details() {

    return (
        <main className='h-fit bg-[#F6F8FD]'>

            <div className="bg-green-950 h-60 px-12">
                <div className="flex">
                    <button className="bg-white rounded-full p-4">
                        <FaLongArrowAltLeft className='text-green-950' />
                    </button>
                    <div className="flex flex-col place-items-center place-content-center w-full">
                        <h1 className="text-slate-200 font-semibold text-xl">Apply Job</h1>
                        <h5 className="text-sm font-light">Jobs / Highspeed Studios / UI Designer</h5>
                    </div>
                </div>

                <section className='absolute h-screen'>
                    <div className="flex">
                        <CompanyDetailsCard />
                        <div className="flex flex-col gap-y-6">
                            <CompanyDetailsHeader />
                            <CompanyJobApplicationForm />
                        </div>
                    </div>
                </section>
            </div>

            <section>
                dd
            </section>

            <div className="relative">
                <Footer />

            </div>

        </main>
    )

}