/* eslint-disable @next/next/no-img-element */
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex flex-row max-w-full pt-6">
        <div className="pl-40">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1711227912~exp=1711228512~hmac=9ddf0a968f5c66c7a1111956c0c88b8b3c914f179a5e525a39bbf960be260d96"
            width="[10]-px"
            height="[10]-px"
            alt="solancer-img" />
        </div>
        <div className="w-full">
          <ul className="flex justify-around text-green-900">
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
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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

      <div className="text-green-600">
        Level Up Your Solana Dev Skills: From Beginner to Builder
      </div>




      
    </main>
  );
}
