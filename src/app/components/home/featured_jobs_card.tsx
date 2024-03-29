/* eslint-disable @next/next/no-img-element */
import { PiCurrencyCircleDollarDuotone, PiHeartStraight, PiMapPinDuotone } from "react-icons/pi";

type Jobs = {
    profession: string,
    company: string,
    minSalary: string,
    maxSalary: string,
    location: string
}


const FeaturedJobCard = ({
    profession,
    company,
    minSalary,
    maxSalary,
    location
}: Jobs) => {
    return (
        <div>
            <div className='bg-green-950 max-w-sm py-8 px-8 rounded-3xl flex flex-col justify-between'>
                <div className="flex flex-col justify-center">
                    <div className='flex justify-center'>
                        <div className='size-24'>
                            <img className='rounded-full' src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?w=740&t=st=1711255753~exp=1711256353~hmac=517869ef737dd30f0d791777a7b87cb64295f3ff7e63f451481dfb38b0aeb5a2" alt="user" />
                        </div>
                    </div>
                    <h1 className='text-center font-semibold text-slate-50'>{profession}</h1>
                    <h5 className='text-center text-sm font-light text-slate-50'>{company}</h5>

                    <div className="flex flex-col mt-8 space-y-4">
                        <span className="flex items-center">
                            <PiCurrencyCircleDollarDuotone className="size-5 text-slate-50" />
                            <h5 className="ml-2 font-light text-slate-50">${minSalary} - ${maxSalary} <span className="ml-6 text-slate-400">/monthly</span></h5>
                        </span>
                        <span className="flex items-center">
                            <PiMapPinDuotone className="size-5 text-slate-50" />
                            <h5 className="ml-2 font-light text-slate-50">
                                {location}
                                <span className="ml-4 underline decoration-solid text-slate-400">View Maps</span>
                                
                            </h5>

                        </span>

                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    <div className="bg-[#FE8D4D] rounded-full p-4">
                        <PiHeartStraight className="fill-white stroke-[#FE8D4D]" />
                    </div>
                    <button className="bg-white rounded-full w-full">Apply Now</button>
                </div>
            </div>
        </div>
    )
}


export default FeaturedJobCard;