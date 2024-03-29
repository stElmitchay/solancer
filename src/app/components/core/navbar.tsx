'use client';

import Logo from './logo';
import { classNames } from "../../utils/classNames";
import { truncate } from "../../utils/string";
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
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

const connectButtonStyle = {
    backgroundColor: "darkGreen",
    borderRadius: 9999,

}

export default function NavBar() {

    const { connected, publicKey } = useWallet();


    return (
        <nav className="bg-white">
            <div className="w-full flex items-center">
                <div className="p-4">
                    <Link href='/'><Logo /></Link>
                </div>

                <ul className='flex gap-12 items-center'>
                    {
                        navBarItems.map((navBarItem, i) => (
                            <NavMenuItem key={i} {...navBarItem} />
                        ))
                    }

                    <li><input type="text" className='bg-slate-200 rounded-full ps-4 h-12 max-w-md' /></li>
                    <li>
                        <WalletMultiButton
                            style={connectButtonStyle}
                        >
                            <span className="text-sm font-semibold">
                                {connected ? truncate(publicKey?.toString()) : "Connect Wallet"}
                            </span>
                        </WalletMultiButton>
                    </li>
                </ul>
            </div>
        </nav>
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