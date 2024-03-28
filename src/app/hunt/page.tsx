import React from 'react'
import Logo from '../components/core/logo'
import { PiMapPin } from 'react-icons/pi'
import { RxChevronDown } from 'react-icons/rx'
import PeoplesCard from '../components/hunt/peoples_card'
import Footer from '../components/core/footer'
import CardsCarousel from '../components/core/card_carousel'



export default function Hunt() {
    return (
        <main className='min-h-screen bg-[#F6F8FD]'>
            <div className="p-24">
                <div className="flex flex-col place-items-center">
                    <Logo />
                    <div className="max-w-xs">
                        <h1 className="text-green-950 font-light text-pretty text-center">
                            Search over 30,000+ talented freelancers in the world through ziro
                        </h1>
                    </div>
                    <div className="relative flex items-center">
                        <div className="absolute flex text-slate-900 text-light text-xs">
                            <div className='flex items-center'>
                                <div className='flex'>
                                    <PiMapPin className='size-4' />
                                    <h5>Location</h5>
                                </div>
                                <button><RxChevronDown /></button>
                                <div className="border-l border-gray-400"></div>
                                <div className='flex mr-36 items-center justify-between'>
                                    <div className='flex items-center w-full'>
                                        <h5>Title</h5>
                                        <button><RxChevronDown /></button>
                                        <div className="border-l border-gray-400"></div>
                                    </div>
                                    <input type="search" placeholder='Search here...' />
                                    <button className="bg-orange-500 rounded-full px-6 py-2">
                                        <h1>Search</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">

                            <div className='w-[700px] bg-white rounded-full h-12 p-2 border border-slate-400' />
                        </div>

                    </div>
                </div>

                <div className="flex justify-between text-slate-800 mt-16 pb-14">
                    <h1 className='font-semibold text-xl'>Featured this week</h1>
                    <button><h5 className='text-sm'>View more</h5></button>
                </div>
                <CardsCarousel />
                <section className="h-fit">

                    <div className="grid grid-cols-4 gap-4 mt-12">
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                        <PeoplesCard />
                    </div>

                </section>



            </div>

            <Footer />

        </main>
    )
}
