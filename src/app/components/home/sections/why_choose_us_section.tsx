import React from 'react'
import WhyChooseUsCard from '../why_choose_us_card';

const WhyChooseUsSection = () => {
    return (
        <section className="h-screen text-green-950  bg-white">

            <div className="flex flex-col place-items-center">
                <div className="flex flex-col items-center my-12">
                    <div className="text-3xl font-semibold text-nowrap">Explore Our Curated Solana Development Courses</div>
                    <div className="text-sm mt-4 max-w-md text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <WhyChooseUsCard />
                    </div>
                    <div>
                        <WhyChooseUsCard />
                    </div>
                    <div>
                        <WhyChooseUsCard />
                    </div>
                    <div>
                        <WhyChooseUsCard />
                    </div>
                    <div>
                        <WhyChooseUsCard />
                    </div>
                    <div>
                        <WhyChooseUsCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection;