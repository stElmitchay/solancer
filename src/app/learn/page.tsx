import React from 'react'
import CoursesCard from '../components/learn/courses_card'
import { GoFilter } from 'react-icons/go'
import CoursesLearnCard from '../components/learn/courses_learn_card'

export default function Learn() {
    return (
        <main className='min-h-screen bg-[#F6F8FD]'>

            <div className='h-screen'>
                <div className='p-24'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-3xl text-green-950 font-semibold'>Courses Catalog</h1>
                        <h5 className='mt-4 text-sm text-slate-400 max-w-sm text-center'>Learn the latest knowledge from mentors who experienced in the field</h5>
                        <div className="flex">
                            <CoursesCard />
                            <CoursesCard />
                            <CoursesCard />
                            <CoursesCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-fit px-24'>
                <div className="flex flex-col">
                    <h1 className="text-3xl text-green-950 font-semibold">Blogs</h1>
                    <h5 className="text-sm text-slate-400">Learn the latest knowledge from experties mentors</h5>
                </div>
                <div className='flex justify-between mt-4'>
                    <input type="search" id="default-search" className="block h-8 ps-10 text-sm border border-slate-300 rounded-sm" placeholder="Search Here" required />
                    <button className='text-gray-900 bg-white p-2 rounded-sm flex items-center border border-slate-300'>
                        <GoFilter />
                        <h5 className='text-sm ps-2'>Filters</h5>
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-12">
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                    <CoursesLearnCard />

                </div>

            </div>


        </main>
    )
}
