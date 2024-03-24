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

    <main className="min-h-screen bg-white">
      
      <div className="h-screen flex flex-row justify-around text-green-950">
        <div className="flex flex-col mt-20">
          <div className="max-w-lg text-5xl font-bold">
            Level Up Your Solana Dev Skills: From Beginner to Builder
          </div>
          <div className="max-w-sm text-sm mt-8">
            Access curated learning materials, collaborate with peers and land freelance gigs.
          </div>
          <div className="max-w-sm flex justify-end mt-8">
            <button className="h-12 text-white font-semibold bg-green-950 px-10 py-2 rounded-full">Lets hunt</button>
          </div>
        </div>

        <div className="flex items-center">
          <PiDotsSixVerticalLight className="scale-125" />
          <PiCircleFill className="w-[575px] h-[575px]" />
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
