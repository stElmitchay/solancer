import React from 'react'
import WhyChooseUsCard from '../why_choose_us_card';

const WhyChooseUsSection = () => {
    return (
        <>
            <section className="h-screen text-green-950  bg-white">

                <div className="flex flex-col place-items-center">
                    <div className="flex flex-col max-w-md text-center my-12">
                        <div className="text-3xl font-semibold">Why Choose Us</div>
                        <div className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
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
        </>
    )
}

export default WhyChooseUsSection;