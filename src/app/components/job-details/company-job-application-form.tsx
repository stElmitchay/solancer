import React from 'react'
import PrimaryButton from '../core/button'



type Form = {
    label: string
}

const CompanyJobApplicationForm = () => {
    return (
        <div>
            <div className="bg-white h-screen p-8 rounded-xl">
                <h1 className="text-slate-800 text-xl font-semibold">Please fill the form</h1>
                <div className="grid grid-cols-3 gap-12 py-12">
                    <InputFormTextFieldWithLabel label={'First Name'} />
                    <InputFormTextFieldWithLabel label={'Middle Name'} />
                    <InputFormTextFieldWithLabel label={'Last Name'} />
                    <InputFormTextFieldWithLabel label={'Birth Date'} />
                    <InputFormTextFieldWithLabel label={'Email Address'} />
                    <InputFormTextFieldWithLabel label={'Phone Number'} />
                </div>

                <div className="flex flex-col text-slate-800 gap-4">
                    <h5 className="text-sm font-medium">About You</h5>
                    <input type="text" className="bg-slate-300 rounded-xl" />
                </div>

                <div className="flex flex-col text-slate-800 gap-4 mt-12">
                    <h5 className="text-sm font-medium">Attach your resume</h5>
                    <div className="flex">
                        <button className="bg-slate-300">
                            <h1 className="text-sm text-slate-800">ww</h1>
                            <h1 className="text-sm text-slate-800">ww</h1>
                        </button>
                        <button className="bg-slate-300">
                            <h1 className="text-sm text-slate-800">ww</h1>
                            <h1 className="text-sm text-slate-800">ww</h1>
                        </button>
                    </div>

                </div>

                <div className="flex justify-between mt-12">
                    <PrimaryButton buttonColor='green-950' text='Submit' rounded_size={'full'} />
                    <PrimaryButton buttonColor='slate-300' text='Cancel' rounded_size={'full'} />

                </div>




            </div>
        </div>
    )
}



const InputFormTextFieldWithLabel = ({ label }: Form) => {
    return (
        <div className="flex flex-col text-sm text-slate-800 font-medium gap-4">
            <h5>{label}</h5>
            <input type="text" className="bg-slate-300 rounded-full h-12 pl-4" />
        </div>
    )
}

export default CompanyJobApplicationForm;