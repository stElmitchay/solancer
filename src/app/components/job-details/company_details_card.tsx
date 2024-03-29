/* eslint-disable @next/next/no-img-element */

import { PiPlusFill, PiStarFill } from "react-icons/pi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaLocationPin } from "react-icons/fa6";

const CompanyDetailsCard = () => {
    return (
        <div>
            <div className="bg-white max-w-xs rounded-lg h-fit px-4 py-8">
                <div className="">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center">
                            <img className="rounded-full size-20" src="https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220" alt="dddd" />
                            <div className="text-nowrap">
                                <h1 className="text-slate-800 text-center">Highspeed Studios</h1>
                                <h1 className="text-slate-400 text-sm">Creative Design Agency</h1>
                            </div>

                            <button className="bg-green-950 w-36 h-8 mt-6 rounded-full font-semibold text-sm flex items-center justify-center">
                                <PiPlusFill className="size-4" />
                                <h5>Follow</h5>
                            </button>
                        </div>


                    </div>

                </div>


                <div className="flex">
                    <div className="flex mt-8 gap-8">
                        <div className="flex gap-2">
                            <div className="p-4 bg-purple-800 rounded-2xl">
                                <RiAccountPinCircleFill className="text-slate-200 " />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className="text-slate-800 font-semibold">80 - 100</h1>
                                <h5 className="text-slate-400 text-xs">Employee</h5>
                            </div>

                        </div>
                        <div className="flex">
                            <div className="p-4 bg-yellow-500 rounded-2xl mr-2">
                                <PiStarFill className="text-slate-200" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h1 className="text-slate-800 font-semibold">4.5</h1>
                                <h5 className="text-slate-400 text-xs">Reviews</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex my-6 gap-2">
                    <div className="p-4 bg-gray-400 rounded-2xl">
                        <FaLocationPin className="text-slate-200 " />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-slate-800 font-semibold">London, England</h1>
                        <h5 className="text-slate-400 text-xs">Location</h5>
                    </div>
                </div>

                <hr />

                <div className="flex flex-col mt-6">
                    <div className="flex flex-col text-slate-800">
                        <h1 className="text-sm font-semibold">About Company</h1>
                        <div className="flex flex-col">
                            <h5 className="text-sm py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                            <h5 className="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</h5>
                        </div>
                    </div>

                    <div className="flex justify-around text-nowrap text-slate-800 mt-4">

                        <button className="bg-purple-200 rounded-full px-4 h-10">
                            <h5 className="text-sm font-semibold">23 Vacancy</h5>
                        </button>

                        <button className="border border-slate-400 rounded-full px-4 h-10">
                            <h5 className="text-sm font-semibold">More Detail</h5>
                        </button>

                        {/* <PrimaryButton buttonColor="purple-700" text={"23 Vacancy"} rounded_size={"full"} />
                        <PrimaryButton buttonColor="purple-700" text={"23 Vacancy"} rounded_size={"full"} /> */}
                    </div>

                </div>





            </div>

        </div>
    )
}

export default CompanyDetailsCard;