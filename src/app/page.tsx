/* eslint-disable @next/next/no-img-element */
import { PiDotsSixVerticalLight, PiCircleFill } from "react-icons/pi";
import SolanaRockstarCard from "./components/home/solana_rockstar_card";
import FeaturedProfileCard from "./components/home/featured_profile_card";
import WhyChooseUsCard from "./components/home/why_choose_us_card";
import FeaturedJobCard from "./components/home/featured_jobs_card";

const cards = [
  {
    id: "1",
    header: "From Rookie to Expert",
    subHeader: "Dive deep into the world of Solana development with our comprehensive suite of resources. Whether you’re a complete beginner or a seasoned developer looking to expand your skill set, we’ve got you covered. Learn at your own pace, collaborate with fellow builders, and put your newfound knowledge to the test."
  },
  {
    id: "2",
    header: "Land Freelance Gigs and Put Your Skills to Work",
    subHeader: "Showcase your expertise to a network of potential clients and secure freelance gigs that fit your skill set and schedule. The Solana ecosystem is booming, and there’s a growing need for talented developers."
  },
  {
    id: "3",
    header: "Connect, Collaborate, And Build the Future of Solana",
    subHeader: "Connect with a vibrant community of Solana developers, exchange ideas, and work together to bring your innovative projects to life. The Solana ecosystem thrives on collaboration, and our platform provides the perfect space to join forces and make your mark on the blockchain."
  },

]

const featured_profile_cards = [
  {
    id: "1",
    userProfession: "UI/UX Designer",
    userPrice: "84"
  },
  {
    id: "2",
    userProfession: "UI/UX Designer",
    userPrice: "84"
  },
  {
    id: "3",
    userProfession: "UI/UX Designer",
    userPrice: "84"
  },
  {
    id: "4",
    userProfession: "UI/UX Designer",
    userPrice: "84"
  }
]


export default function Home() {

  return (

    <main className="min-h-screen bg-white">
      <nav className="flex flex-row max-w-full pt-6">
        <div className="w-full">
          <ul className="flex justify-around text-green-950  items-center">
            <li>
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1711227912~exp=1711228512~hmac=9ddf0a968f5c66c7a1111956c0c88b8b3c914f179a5e525a39bbf960be260d96"
                className="w-[53px] h-[50px]"
                alt="solancer-img" />
            </li>
            <li>
              Home
            </li>
            <li>
              Build a Product
            </li>
            <li>
              Learn
            </li>
            <li>
              Become a hunter
            </li>
            <li>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full h-8 ps-10 text-sm border border-slate-300 rounded-full" placeholder="Search Here" required />
              </div>
            </li>
            <li>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </li>
          </ul>
        </div>
      </nav>

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

      <div className="flex justify-center mb-12">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold text-green-950 text-center">Everything You Need to Become a Solana Rockstar</div>
          <div className="flex flex-row space-x-4"> {/* Flex container for cards with padding */}
            {cards.map((card) => (
              <div key={card.id} className="p-4 mt-16"> {/* Add padding to each card */}
                <SolanaRockstarCard header={card.header} subHeader={card.subHeader} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="h-1/2 bg-green-950 p-12">
        <div className="flex justify-between">
          <div className="text-xl font-medium">Featured profile this week</div>
          <div className="text-sm">View more</div>
        </div>
        <div className="flex flex-row space-x-4">
          {
            featured_profile_cards.map((card) => (
              <div key={card.id} className="p-4 mt-16 w-full">
                <FeaturedProfileCard cardId={card.id} userProfession={card.userProfession} userPrice={card.userPrice} userName={"David"} userImage={"https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?w=740&t=st=1711255753~exp=1711256353~hmac=517869ef737dd30f0d791777a7b87cb64295f3ff7e63f451481dfb38b0aeb5a2"} />
              </div>
            ))
          }
        </div>
      </section>

      <section className="h-screen text-green-950  bg-white">

        <div className="flex flex-col place-items-center">
          <div className="flex flex-col max-w-md text-center my-12">
            <div className="text-3xl font-semibold">Why Choose Us</div>
            <div className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <WhyChooseUsCard />
            </div>
            <div>
              <WhyChooseUsCard />
            </div>
            <div>
              <WhyChooseUsCard />
            </div>
            <div>
              <WhyChooseUsCard />
            </div>
            <div>
              <WhyChooseUsCard />
            </div>
            <div>
              <WhyChooseUsCard />
            </div>
          </div>


        </div>

      </section>

      <section className="h-screen text-green-950  bg-white">
        <div className="flex flex-col place-items-center">
          <div className="flex flex-col max-w-md text-center my-12">
            <div className="text-3xl font-semibold">Featured Jobs</div>
            <div className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
          </div>
          <div className="grid grid-cols-3 gap-4">

            <div>
              <FeaturedJobCard />
            </div>
          </div>


        </div>
      </section>






    </main>
  )
}
