import React from 'react'
import FeaturedJobCard from '../featured_jobs_card';
import PrimaryButton from '../../core/button';
import Link from 'next/link';



const featured_jobs_card = [
    {
        id: "1",
        profession: "UI/UX Designer",
        company: "Paradoxx",
        minSalary: '35,000',
        maxSalary: '80,000',
        location: "San Francisco, CA"
    },
    {
        id: "2",
        profession: "UI/UX Designer",
        company: "Paradoxx",
        minSalary: '35,000',
        maxSalary: '80,000',
        location: "San Francisco, CA"
    },
    {
        id: "3",
        profession: "UI/UX Designer",
        company: "Paradoxx",
        minSalary: '35,000',
        maxSalary: '80,000',
        location: "San Francisco, CA"
    },
    {
        id: "4",
        profession: "UI/UX Designer",
        company: "Paradoxx",
        minSalary: '35,000',
        maxSalary: '80,000',
        location: "San Francisco, CA"
    }
]




const FeaturedJobsSection = () => {

    return (
        <section className="h-fit text-green-950 bg-white">
            <div className="flex flex-col place-items-center">
                <div className="flex flex-col max-w-md text-center my-12">
                    <div className="text-3xl font-semibold">Featured Jobs</div>
                    <div className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                </div>


                <div className="gap-4 lg:flex flex-row">
                    {
                        featured_jobs_card.map((job) => (
                            <div key={job.id} className='p-4 lg:p-0'>
                                <FeaturedJobCard key={job.id} profession={job.profession} company={job.company} minSalary={job.minSalary} maxSalary={job.maxSalary} location={job.location} />
                            </div>
                        ))
                    }
                </div>

                <div className="mt-12 pb-12">
                    <Link href={'/job-details'}> <PrimaryButton buttonColor={'green-950'} text="View more" rounded_size={'full'} /></Link>

                </div>
            </div>
        </section>
    )
}

export default FeaturedJobsSection;