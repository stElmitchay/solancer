"use-client";


import Logo from './logo';
import { classNames } from "../../utils/classNames";
import { truncate } from "../../utils/string";
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PiUserDuotone } from 'react-icons/pi';
require("@solana/wallet-adapter-react-ui/styles.css");




const navBarItems = [
    {
        text: 'Home',
        path: '/'
    },
    {
        text: 'Build a Product',
        path: '/build'
    },
    {
        text: 'Learn',
        path: '/learn'
    },
    {
        text: 'Become a hunter',
        path: '/hunt'
    }
]

type Navigation = {
    connected: boolean,
    publicKey?: any
}

const NavBar = () => {

    return (
        <nav className="flex flex-row max-w-full pt-6 bg-white">
            <div className="w-full">
                <ul className="flex justify-around items-center">
                    <li><Logo /></li>
                    {
                        navBarItems.map((navBarItem) => (
                            <NavMenuItem key={navBarItem.path} {...navBarItem} />
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
                    {/* <li>
                        <WalletMultiButton
                            className="phantom-button"
                            startIcon={
                                <PiUserDuotone
                                    className="h-2 w-2"
                                />
                            }
                        >
                            <span className="text-sm font-semibold">
                                {connected ? truncate(publicKey?.toString()) : "Connect Wallet"}
                            </span>
                        </WalletMultiButton>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}



export default NavBar;

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