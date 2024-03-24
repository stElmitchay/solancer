import React from 'react'

type News = {
  category: string,
  width: string
}

const NewsCard = ({ category, width }: News) => {
  return (
    <div>
      <div className={`bg-slate-500 h-96 py-3 px-2 rounded-lg ${width}`}>
        <div className='flex flex-col h-full justify-between'>
          <div className="flex justify-end">
            <div className="bg-orange-500 rounded-full px-6 py-2">
              <h5>{category}</h5>
            </div>
          </div>
          <div className="flex flex-col ps-6 pb-6">
            <h5><span className='text-sm'>James</span>24 min read</h5>

            <h1 className='font-semibold text-xl w-full mt-4'>A Media Critic Focuses on the Crisis in Local News</h1>


          </div>


        </div>
      </div>
    </div>
  )
}

export default NewsCard;