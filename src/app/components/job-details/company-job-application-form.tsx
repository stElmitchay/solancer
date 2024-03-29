import React from 'react'

const CompanyJobApplicationForm = () => {
    return (
        <div>
            <div className="bg-white h-screen p-8 rounded-xl">
                <h1 className="text-slate-800 text-xl font-semibold">Please fill the form</h1>
                <div className="grid grid-cols-3 text-sm text-slate-800 font-medium">
                    <InputFormTextFieldWithLabel />
                </div>


            </div>
        </div>
    )
}



const InputFormTextFieldWithLabel = () => {
    return (
        <div className="flex flex-col">
            <h5>First Name</h5>
            <input type="text" className="bg-slate-300 rounded-full h-12" />
        </div>
    )
}

export default CompanyJobApplicationForm;