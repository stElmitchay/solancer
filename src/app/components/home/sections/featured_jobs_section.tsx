import React from 'react'
import FeaturedJobCard from '../featured_jobs_card';
import PrimaryButton from '../../core/button';



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
        <section className="h-screen text-green-950 bg-white mt-24 mb-4">
            <div className="flex flex-col place-items-center">
                <div className="flex flex-col max-w-md text-center my-12">
                    <div className="text-3xl font-semibold">Featured Jobs</div>
                    <div className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                </div>


                <div className="flex flex-row ps-8 pr-8">
                    {
                        featured_jobs_card.map((job) => (
                            <div key={job.id} className="px-4">
                                <FeaturedJobCard key={job.id} profession={job.profession} company={job.company} minSalary={job.minSalary} maxSalary={job.maxSalary} location={job.location} />
                            </div>
                        ))
                    }
                </div>

                <div className="mt-12">
                    <PrimaryButton buttonColor={'green-950'} text="View more" rounded_size={'full'} />
                </div>
            </div>
        </section>
    )
}

export default FeaturedJobsSection;