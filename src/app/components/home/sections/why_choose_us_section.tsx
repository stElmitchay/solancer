import React from 'react'
import WhyChooseUsCard from '../why_choose_us_card';
import { PiBookOpenBold, PiBracketsAngle, PiBuildingsBold, PiCodeBlock, PiImagesDuotone } from 'react-icons/pi';
import { FaLocationCrosshairs } from 'react-icons/fa6';



const curatedDevelopementCourses = [
    {
        id: "1",
        header: "Solana Bytes",
        subHeader: "By-pass all needless protocols and meet the right job or freelancer.",
        icon: <PiCodeBlock className='text-purple-800 size-9' />,
        iconBgColor: "#FFFF"
    },
    {
        id: "2",
        header: "Solana Bootcamp",
        subHeader: "By-pass all needless protocols and meet the right job or freelancer.",
        icon: <FaLocationCrosshairs className='text-[#1F342B] size-9 bg-white rounded-full p-1' />,
        iconBgColor: "#1F342B"
    },
    {
        id: "3",
        header: "Solana Development Course",
        subHeader: "By-pass all needless protocols and meet the right job or freelancer.",
        icon: <PiBracketsAngle className='text-purple-800 size-9' />,
        iconBgColor: "#FFFF"
    },
    {
        id: "4",
        header: "Solana Cookbook",
        subHeader: "We maintain a full transparency policy making sure everything is seen. ",
        icon: <PiBookOpenBold className='size-12 text-[#004126]' />,
        iconBgColor: "purple-700"
    },
    {
        id: "5",
        header: "Solana Program Library",
        subHeader: "By-pass all needless protocols and meet the right job or freelancer.",
        icon: <PiBuildingsBold className='text-[#FF9900] size-12' />,
        iconBgColor: "purple-700"
    },
    {
        id: "6",
        header: "Get Started with NFTs",
        subHeader: "Leveraging the power of the solana blockchain to maintain lighting fast processes",
        icon: <PiImagesDuotone className='text-slate-50 size-12' />,
        iconBgColor: "purple-700"
    },


]

const WhyChooseUsSection = () => {
    return (
        <section className="h-fit text-green-950 bg-white pt-10 pb-12">

            <div className="flex flex-col place-items-center">
                <div className="flex flex-col items-center py-12">
                    <div className="">
                        <h1 className="text-xl md:text-3xl font-semibold text-center">Explore Our Curated Solana Development Courses</h1>
                    </div>
                    <div className="text-sm mt-4 max-w-md text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                </div>
                <div className="flex flex-col gap-8 md:grid grid-cols-3">
                    {curatedDevelopementCourses.map((card) => (
                        <div key={card.id}>
                            <WhyChooseUsCard header={card.header} subHeader={card.subHeader} icon={card.icon} iconBgColor={card.iconBgColor} />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection;