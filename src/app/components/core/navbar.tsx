import Logo from './logo';
import { classNames } from "../../utils/classNames";
import Link from 'next/link';


const navBarItems = [
    {
        text: 'Home',
        path: '/'
    },
    {
        text: 'Build a Product',
        path: '/'
    },
    {
        text: 'Learn',
        path: '/learn'
    },
    {
        text: 'Become a hunter',
        path: '/'
    }
]

const NavBar = () => {
    return (
        <>
            <nav className="flex flex-row max-w-full pt-6 bg-white">
                <div className="w-full">
                    <ul className="flex justify-around items-center">
                        <li><Logo /></li>
                        {
                            navBarItems.map((navBarItem, i) => (
                                <>
                                    <NavMenuItem key={i} {...navBarItem} />
                                </>
                            ))
                        }
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

        </>
    )
}

type NavMenuItem = {
    text: string
    path: string
}

const NavMenuItem = ({ text, path }: NavMenuItem) => {

    const current = path

    return (
        <Link href={current}>
            <li
                className={classNames(
                    "hover:text-green-500 cursor-pointer",
                    current ? "text-green-950" : "text-green-500 "
                )}
            >
                <span>{text}</span>
            </li>
        </Link>
    );
};

export default NavBar;