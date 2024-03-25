import React from 'react'
import { IconType } from 'react-icons';
import { PiCubeLight } from 'react-icons/pi';

type CourseCard ={
    mainHeading: string,
    numberOfCourses: number,
    icon?: React.ReactNode
}

const CoursesCard = ({ mainHeading, numberOfCourses, icon} : CourseCard) => {
    return (
        <div>
            <div className={`bg-blue-200 max-w-sm h-48 p-12 rounded-xl border hover:border-purple-600`}>
                <div className="flex flex-col items-center">
                    <div className='bg-slate-200 p-3 rounded-full'>
                        {icon}
                    </div>
                    <h1 className='text-slate-800 mt-4'>{mainHeading}</h1>
                    <h5 className=' text-slate-400 font-light text-xs'>{numberOfCourses} Courses</h5>
                </div>
            </div>
        </div>
    )
}

export default CoursesCard;