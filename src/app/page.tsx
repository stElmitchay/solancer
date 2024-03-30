/* eslint-disable @next/next/no-img-element */
import { PiDotsSixVerticalLight, PiCircleFill } from "react-icons/pi";
import FeaturedProfileSection from "./components/home/sections/featured_profile_section";
import WhyChooseUsSection from "./components/home/sections/why_choose_us_section";
import FeaturedJobsSection from "./components/home/sections/featured_jobs_section";
import MetricsSection from "./components/home/sections/metrics_section";
import LatestNewsSection from "./components/home/sections/latest_news_section";
import Footer from "./components/core/footer";
import SolanaRockStarSection from "./components/home/sections/solana_rockstar_section";


export default function Home() {

  return (

    <main className="min-h-fit bg-[#F6F8FD]">
      
      <div className="h-fit pb-12 md:h-screen flex flex-row justify-around text-green-950">
        <div className="flex flex-col mt-20">
          <div className="max-w-lg px-1 md:p-0">
            <h1 className="text-3xl text-center md:text-5xl font-bold text-wrap lg:text-start">Level Up Your Solana Dev Skills: From Beginner to Builder</h1>
          </div>
          <div className="px-3 max-w-sm text-sm mt-8">
            Access curated learning materials, collaborate with peers and land freelance gigs.
          </div>
          <div className="text-center md:flex mt-8 max-w-sm lg:justify-end">
            <button className="h-12 text-white font-semibold bg-green-950 px-10 py-2 rounded-full">Lets hunt</button>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <PiDotsSixVerticalLight />
          <PiCircleFill className="md:w-[575px] h-[575px]" />
        </div>
      </div>

      <SolanaRockStarSection />
      <FeaturedProfileSection />
      <WhyChooseUsSection />
      <FeaturedJobsSection />
      <MetricsSection />
      <LatestNewsSection />
      <Footer />
    </main>
  )
}
