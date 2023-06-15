import React from 'react'
import logo from '/public/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'

import { ShoppingCart, Search } from "lucide-react"
import { Input } from '@/components/ui/input'

export default function Header() {
    return (
        <div className='flex justify-between items-center py-10 px-16'>

            <Link href={"/"}>
                <Image src={logo} alt='logo' className='w-40' />
            </Link>

            <ul className='lg:flex hidden gap-x-10'>
                <li className='text-lg'>
                    <Link href={"/category/female"}>
                        Female
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/category/male"}>
                        Male
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/category/kids"}>
                        Kids
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/category/sports"}>
                        Sports
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/products"}>
                        All Products
                    </Link>
                </li>

            </ul>

            <div className='flex gap-x-2 justify-start items-center rounded-md border border-input bg-transparent px-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
                <Search className='opacity-60 w-4 h-4'/>
                <Input className='w-96 h-8 outline-none' type="text" placeholder="What are you looking for" />
            </div>
            <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
                <Link href={"/"}>

                    <ShoppingCart />
                </Link>

            </div>

        </div>
    )
}
