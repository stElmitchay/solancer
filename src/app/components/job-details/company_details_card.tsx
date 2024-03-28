/* eslint-disable @next/next/no-img-element */

import { PiPlusFill } from "react-icons/pi";
import PrimaryButton from "../core/button";
import { RiAccountPinCircleFill } from "react-icons/ri";

const CompanyDetailsCard = () => {
    return (
        <div>
            <div className="bg-white h-fit max-w-xs rounded-lg">
                <div className="px-24 pt-8">
                    <div className="flex flex-col items-center">
                        <img className="rounded-full size-20" src="https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220" alt="dddd" />
                        <div className="text-nowrap">
                            <h1 className="text-slate-800 text-center">Highspeed Studios</h1>
                            <h1 className="text-slate-400 text-sm">Creative Design Agency</h1>
                        </div>

                        <button className="bg-green-950 w-36 h-8 rounded-full font-semibold text-sm flex items-center justify-center">
                            <PiPlusFill className="size-4" />
                            <h5>Follow</h5>
                        </button>

                    </div>

                </div>


                <div className="flex px-6">
                    <div className="p-4 bg-purple-800 rounded-2xl">
                        <RiAccountPinCircleFill className="text-slate-200 " />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-800 font-semibold">80 - 100</h1>
                        <h5 className="text-slate-400 text-xs">Employee</h5>
                    </div>
                    <div className="flex">
                        <div className="p-4 bg-purple-800 rounded-lg">
                            <RiAccountPinCircleFill className="text-slate-200 " />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-800 font-semibold">80 - 100</h1>
                            <h5 className="text-slate-400 text-xs">Employee</h5>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CompanyDetailsCard;