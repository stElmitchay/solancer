import React from 'react'
import CoursesCard from '../components/learn/courses_card'
import { GoFilter } from 'react-icons/go'
import CoursesLearnCard from '../components/learn/courses_learn_card'
import PrimaryButton from '../components/core/button'
import EventsCard from '../components/learn/events_card'
import Footer from '../components/core/footer'
import { Cardo } from 'next/font/google'
import { PiCubeLight, PiDeviceMobile, PiGlobeDuotone, PiMedal } from 'react-icons/pi'


const courses = [
    {
        id: "1",
        mainHeading: "All Course",
        numberOfCourses: 10,
        icon: <PiCubeLight className='size-7 text-purple-600' />
    },
    {
        id: "2",
        mainHeading: "Mobile Development",
        numberOfCourses: 70,
        icon: <PiDeviceMobile className='size-7 text-pink-400' />
    },
    {
        id: "3",
        mainHeading: "Web Development",
        numberOfCourses: 81,
        icon: <PiGlobeDuotone className='size-7 text-blue-400' />
    },
    {
        id: "4",
        mainHeading: "UI/UX Design",
        numberOfCourses: 32,
        icon: <PiMedal className='size-7 text-green-500' />
    },

]

const learningCards = [
    {
        id: "1",

    }
]



export default function Learn() {
    return (
        <main className='min-h-screen bg-[#F6F8FD]'>

            <div className='h-screen'>
                <div className='p-24'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-3xl text-green-950 font-semibold'>Courses Catalog</h1>
                        <h5 className='mt-4 text-sm text-slate-400 max-w-sm text-center'>Learn the latest knowledge from mentors who experienced in the field</h5>
                        <div className="flex mt-14">
                            {
                                courses.map((course) => (
                                    <div key={course.id} className="px-4">
                                        <CoursesCard {...course} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-fit px-24 pb-20'>
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
                <div className="grid grid-cols-3 gap-x-12">
                    <CoursesLearnCard  />
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                    <CoursesLearnCard />
                </div>


                <div className="flex justify-center mt-24">
                    <PrimaryButton text='See More Courses' color='blue-200' rounded_size='md' />
                </div>



            </div>

            <section className='bg-green-950 h-screen'>

                <div className="flex flex-col p-24">

                    <div className="flex w-full justify-between">
                        <h1 className='text-xl font-semibold'>Upcoming Events</h1>
                        <div className='flex gap-x-4'>
                            <button className='border border-slate-500 rounded-full px-8 py-2'>
                                <h5 className='text-sm font-semibold'>Filter Date</h5>
                            </button>
                            <button className='border border-slate-500 rounded-full px-8 py-2'>
                                <h5 className='text-sm font-semibold'>Newest</h5>
                            </button>
                        </div>
                    </div>


                    <EventsCard />

                    <div className="text-center">
                        <h5 className='text-slate-100'>View more</h5>
                    </div>



                </div>

            </section>

            <Footer />


        </main>
    )
}
