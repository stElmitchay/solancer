import React from 'react';
import CoursesCard from '../components/learn/courses_card';
import { GoFilter } from 'react-icons/go';
import CoursesLearnCard from '../components/learn/courses_learn_card';
import PrimaryButton from '../components/core/button';
import EventsCard from '../components/learn/events_card';
import Footer from '../components/core/footer';
import { PiCubeLight, PiDeviceMobile, PiGlobeDuotone, PiMedal, PiCheckCircle, PiHeartDuotone } from 'react-icons/pi'


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
        category: "Mobile",
        title: "Full Stack Web Development MERN Stack"

    },
    {
        id: "2",
        category: "Mobile",
        title: "Full Stack Web Development MERN Stack"

    },
    {
        id: "3",
        category: "Mobile",
        title: "Full Stack Web Development MERN Stack"

    },
    {
        id: "4",
        category: "Mobile",
        title: "Full Stack Web Development MERN Stack"

    },
    {
        id: "5",
        category: "Mobile",
        title: "Full Stack Web Development MERN Stack"

    },
    {
        id: "6",
        category: "Mobile",
        title: "Full Stack Web Development MERN Stack"

    },
]

const events = [
    {
        id: "1",
        day: "3",
        month: "Nov",
        eventCategory: "Mobile App",
        eventTitle: "Global Android Programmer Meetup 2020",
        eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <PiCheckCircle className='text-green-600' />

    },
    {
        id: "2",
        day: "14",
        month: "Nov",
        eventCategory: "ART EXIBITHION",
        eventTitle: "Paris Designer Meetup with Ziro Partner",
        eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <PiHeartDuotone className='text-green-600' />

    },
    {
        id: "3",
        day: "10",
        month: "Feb",
        eventCategory: "ACCOUNTING",
        eventTitle: "Bussiness Plan in Pandemic with Famous Native Speaker",
        eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <PiHeartDuotone className='text-green-600' />


    },
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
                <div className='flex justify-between mt-4 w-full'>
                    <input type="search" id="default-search" className="block h-8 ps-10 text-sm border border-slate-300 rounded-md min-w-96 max-w-96" placeholder="Search Here" required />
                    <button className='text-gray-900 bg-white p-2 rounded-sm flex items-center border border-slate-300'>
                        <GoFilter />
                        <h5 className='text-sm ps-2'>Filters</h5>
                    </button>
                </div>
                <div className="grid grid-cols-4 mt-8 gap-8">
                    {
                        learningCards.map((card) => (
                            <div key={card.id}>
                                <CoursesLearnCard key={card.id} {...card} />
                            </div>
                        ))
                    }
                </div>


                <div className="flex justify-center mt-24">
                    <PrimaryButton text='See More Courses' buttonColor='blue-200' rounded_size='md' />
                </div>



            </div>

            <section className='bg-green-950 h-fit'>

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

                    <div className="grid grid-cols-3 mt-8 gap-8">
                        {
                            events.map((program) => (
                                <div key={program.id}>
                                    <EventsCard key={program.id} {...program} />
                                </div>
                            ))
                        }
                    </div>



                    <button className='text-center mt-12 hover:text-slate-500 text-slate-200'>View more</button>




                </div>

            </section>

            <Footer />


        </main>
    )
}
