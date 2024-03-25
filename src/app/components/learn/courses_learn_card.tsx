import React from 'react'
import PrimaryButton from '../core/button';
import StarRating from '../home/star_rating';

type LearningCard = {
    category: string,
    title: string
}

const CoursesLearnCard = ({ category, title }: LearningCard) => {
    return (
        <div>
            <div className="bg-white rounded-md h-96 max-w-sm p-4">
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col w-full">
                        <div className="bg-gray-300 rounded-lg max-w-sm h-40"></div>
                        <div className="flex text-black items-center mt-3">
                            <div className="bg-slate-200 px-4 py-1 rounded-md mr-2">
                                <h5 className="text-sm font-semibold">{category}</h5>
                            </div>
                            <StarRating />
                        </div>

                        <h1 className='text-green-950 text-xl truncate text-nowrap font-semibold mt-4'>{title}</h1>


                    </div>

                    <div>
                        <PrimaryButton text='Start Learning' color={'green-950'} rounded_size='lg' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoursesLearnCard;