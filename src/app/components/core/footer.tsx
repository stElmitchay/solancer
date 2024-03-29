import React from 'react'
import { PiFacebookLogoFill } from 'react-icons/pi'
import Logo from './logo'

const Footer = () => {
    return (
        <>
            <section className="h-fit bg-[#1F2131]">
                <div className="p-12">
                    {/* <div className="flex flex-row items-center justify-between">
                        <h1 className="max-w-md text-3xl text-[#72CAC4] font-semibold leading-relaxed">Don’t miss our weekly updates about freelancer career</h1>
                        <input type="search" id="default-search" className="block h-8 ps-10 text-sm border border-slate-300 rounded-full" placeholder="Search Here" required />
                    </div> */}

                    <div className="flex flex-row items-center mt-32">

                        <div className="flex flex-col max-w-md space-y-10">
                            <Logo />
                            <h5 className="text-sm">Solancer is a web3 based freelancing website where freelancers and employers can meet and work together</h5>
                            <div className="flex gap-4">
                                <PiFacebookLogoFill />
                                <PiFacebookLogoFill />
                                <PiFacebookLogoFill />
                                <PiFacebookLogoFill />
                                <PiFacebookLogoFill />
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-4 gap-4 px-32">
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Solancer</h1>
                                <ul>
                                    <li>Why Solancer</li>
                                    <li>Enterprise</li>
                                    <li>Testimonials</li>
                                    <li>Security</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="font-semibold">Resources</h1>
                                <ul>
                                    <li>Download</li>
                                    <li>Help Center</li>
                                    <li>Events</li>
                                    <li>Guides</li>
                                    <li>Partner</li>
                                    <li>Directories</li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="font-semibold">Company</h1>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Products</li>
                                    <li>Faq</li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="font-semibold">Get in Touch with Us</h1>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Products</li>
                                    <li>Faq</li>
                                </ul>
                            </div>



                        </div> */}


                    </div>


                </div>
                <hr />
                <div className="px-12 py-6">
                    <h5><span>Solancer Offical Website{' '}-{' '}&copy;{' '} 2024 All Rights Reserved</span></h5>
                </div>

            </section>
        </>
    )
}

export default Footer