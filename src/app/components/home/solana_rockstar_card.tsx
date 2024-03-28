import React from 'react'

type Card = {
  header: string,
  subHeader: string
}

const SolanaRockstarCard = ({
  header, subHeader
}: Card) => { 
  return (
    <div>
      <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-green-950 dark:border-gray-700 h-96 flex flex-col justify-between">
        {/* <a href="#"> */}
        <h5 className="mb-2 text-base flex justify-center text-pretty font-bold tracking-tight text-gray-900 dark:text-white">{header}</h5>
        {/* </a> */}
        <p className="mb-3 font-light text-gray-700 dark:text-gray-200">{subHeader}</p>
        <div className='flex justify-center'>
          <button className="w-48 h-12 bg-green-700 rounded-full text-slate-400 hover:text-slate-200">Learn more</button>
        </div>
        {/* </a> */}
      </div>
    </div>
  )
}

export default SolanaRockstarCard;
