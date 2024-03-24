import React from 'react'
import { PiCubeLight } from 'react-icons/pi';

const CoursesCard = () => {
    return (
        <div>
            <div className={`bg-blue-200 max-w-sm h-48 p-12 rounded-xl border hover:border-purple-600`}>
                <div className="flex flex-col items-center">
                    <div className='bg-slate-200 p-3 rounded-full'>
                        <PiCubeLight className='size-7 text-purple-600' />
                    </div>
                    <h1 className='mt-4'>All Course</h1>
                    <h5 className=' text-slate-400 font-light'>183 Courses</h5>
                </div>
            </div>
        </div>
    )
}

export default CoursesCard;