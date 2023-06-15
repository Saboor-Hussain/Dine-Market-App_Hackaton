import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'
import heroImage from "/public/Hero.webp"
import F1 from "public/Featured1.webp"
import F2 from "public/Featured2.webp"
import F3 from "public/Featured3.webp"
import F4 from "public/Featured4.webp"

import { ShoppingCart } from "lucide-react"
import Image from 'next/image'

export default function Hero() {
    return (
        <section className='flex flex-col gap-y-10 lg:flex-row py-6'>
            {/* Left Div */}
            <div className='flex-1'>
                <Badge className='py-4 px-6 rounded-lg bg-blue-200 text-blue-600'> Sale 70% </Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                    An Industrial Take on Streetwear
                </h1>

                <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>

                <Button className='bg-black px-8 h-12 mt-4 font-semibold '>
                    <ShoppingCart className="mr-3 h-6 w-6" /> Start Shopping
                </Button>

                {/* Features */}
                <div className='flex lg:mt-20 lg:gap-x-8 flex-wrap  my-6 gap-1.5 justify-between items-center'>
                    <Image src={F1} alt='feature-01' />
                    <Image src={F2} alt='feature-02' />
                    <Image src={F3} alt='feature-03' />
                    <Image src={F4} alt='feature-04' />

                </div>


            </div>

            {/* Right Div */}
            <div className='lg:flex-1 lg:flex hidden relative'>
                {/* <div className='bg-orange-200 w-60 h-60 rounded-full absolute top-6'></div> */}
                <Image src={heroImage} alt='Hero' />

            </div>
        </section>
    )
}
