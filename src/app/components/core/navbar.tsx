'use client';

import Logo from './logo';
import { classNames } from "../../utils/classNames";
import Link from 'next/link';
import { truncate } from "../../utils/string"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';
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

const NavBar = () => {

    const { connected, publicKey } = useWallet();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const connectButtonStyle = {
        backgroundColor: "#052e16",
        borderRadius: 9999,
    }

    return (
        <nav className="bg-white">
            <div className="w-full flex items-center justify-between p-2">
                <div>
                    <Link href='/'><Logo /></Link>
                </div>
                <ul className={`hidden md:flex items-center w-full justify-around`}>
                    <div className='flex gap-4'>
                        {
                            navBarItems.map((navBarItem, i) => (
                                <NavMenuItem key={i} {...navBarItem} />
                            ))
                        }
                    </div>
                    <div className='flex gap-8 items-center'>
                        <li><input type="search" placeholder='Search' className='bg-slate-200 rounded-full ps-4 h-8 max-w-md' /></li>
                        <li>
                            <WalletMultiButton
                                style={connectButtonStyle}
                            >
                                <span className="text-sm font-semibold text-slate-50">
                                    {connected ? truncate(publicKey?.toString()) : "CONNECT WALLET"}
                                </span>
                            </WalletMultiButton>
                        </li>
                    </div>
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