import { PiCurrencyCircleDollarDuotone, PiHeartStraight, PiMapPinDuotone } from "react-icons/pi";

const FeaturedJobCard = () => {
    return (
        <div>
            <div className='bg-[#C8EEEE] h-96 max-w-sm py-6 px-16 rounded-3xl'>
                <div className="flex flex-col justify-center">
                    <div className='flex justify-center'>
                        <div className='size-24'>
                            <img className='rounded-full' src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?w=740&t=st=1711255753~exp=1711256353~hmac=517869ef737dd30f0d791777a7b87cb64295f3ff7e63f451481dfb38b0aeb5a2" alt="user" />
                        </div>
                    </div>
                    <h1 className='text-center font-semibold'>Database Programmer</h1>
                    <h5 className='text-center text-sm font-light'>Maximaz Team</h5>
                </div>
                <div className="w-full flex items-center">
                    <PiCurrencyCircleDollarDuotone />
                    <h5 className="font-light">$ 14,000 - $35,000 <span className="text-slate-400">/monthly</span></h5>
                </div>
                <div className="w-full flex items-center">
                    <PiMapPinDuotone />
                    <h5 className="font-light">London, England <span className="underline decoration-solid text-slate-400">View Maps</span></h5>
                </div>
                <div className="flex space-x-9">
                    <div className="bg-[#FE8D4D] rounded-full p-4">
                        <PiHeartStraight className="fill-white stroke-[#FE8D4D]"/>
                    </div>
                    <button className="bg-white rounded-full w-full">Apply Now</button>
                </div>
            </div>
        </div>
    )
}


export default FeaturedJobCard;