import React from 'react'
import NewsCard from '../news_card'

const LatestNewsSection = () => {
    return (
        <>
            <section className="h-fit bg-white p-24">
                {/* <div className="p-12"> */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl text-slate-700 font-semibold">Stay Ahead of the Curve: Latest Solana News and Updates</h1>
                        <h5 className="text-sm text-slate-400 mt-6">Your Source for All Things Solana - News & Insights</h5>
                    </div>

                    <div className="flex gap-12 mt-12">
                        <div className="">
                            <NewsCard category="People" width="max-w-xl" />
                        </div>
                        <div className="w-full">
                            <NewsCard category="Industry" width="" />
                        </div>
                    </div>
{/* 
                </div> */}
            </section></>
    )
}

export default LatestNewsSection