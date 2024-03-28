/* eslint-disable @next/next/no-img-element */
import React from 'react'
import StarRating from './star_rating';

type User = {
    userName: string,
    userProfession: string,
    userPrice: string
    userImage: string
}

const FeaturedProfileCard = ({
    userName,
    userProfession,
    userPrice,
    userImage
}: User) => {
    return (
        <div>
            <div className='max-w-sm bg-white rounded-2xl p-8'>
                <div className='flex flex-col'>
                    <div className='flex items-center space-x-4'>
                        <img
                            className='size-20 rounded-full'
                            src={userImage}
                            alt="user-profile" />
                        <div className='flex flex-col text-green-950 '>
                            <h5 className='font-bold'>{userName}</h5>
                            <h5 className='text-sm'>{userProfession}</h5>
                        </div>
                    </div>
                    <div className='mt-4 flex justify-between items-center'>

                        <StarRating />

                        <div className='bg-[#FE8D4D] rounded-full px-4 py-2'>${userPrice}/hr</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProfileCard;