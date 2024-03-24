import React from 'react'
import NewsCard from '../news_card'

const LatestNewsSection = () => {
    return (
        <>
            <section className="h-fit bg-white">
                <div className="p-12">
                    <div className="flex flex-col">
                        <h1 className="text-3xl text-slate-700 font-semibold">Latest News</h1>
                        <h5 className="text-sm text-slate-400 mt-6">These are all the shakings happening in the solana job market </h5>
                    </div>

                    <div className="flex p-12">
                        <div className="px-4">
                            <NewsCard category="People" width="max-w-xl" />
                        </div>
                        <div className="px-4 w-full">
                            <NewsCard category="Industry" width="" />
                        </div>
                    </div>

                </div>
            </section></>
    )
}

export default LatestNewsSection