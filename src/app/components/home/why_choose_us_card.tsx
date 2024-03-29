import React from 'react'


type WhyChooseUsCard = {
    header: string,
    subHeader: string,
    icon: React.ReactNode,
    iconBgColor: string
}



const WhyChooseUsCard = ({ header, subHeader, icon, iconBgColor }: WhyChooseUsCard) => {
    return (
        <div>
            <div className='max-w-xs h-48 bg-[#8236FF] p-8 pb-52 rounded-2xl'>
                <div className="flex flex-col text-slate-50">
                    <div className={`bg-[${iconBgColor}] h-fit w-fit p-2 place-content-center rounded-xl`}>
                        {icon}
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-2xl font-semibold '>{header}</h1>
                        <h5 className='text-sm mt-2'>{subHeader}</h5>
                    </div>
                </div>

            </div>
        </div >
    )
}


export default WhyChooseUsCard; 