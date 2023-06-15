import Image from 'next/image'
import React from 'react'

import E1 from "public/event1.webp"
import E2 from "public/event2.webp"
import E3 from "public/event3.webp"
import { Button } from '@/components/ui/button'

export default function Promotion() {
    return (
        <div>

            <div className='flex justify-center items-center my-8 flex-col'>

                <p className="leading-7 [&:not(:first-child)]:mt-6 my-3 text-blue-500 font-bold uppercase text-sm">
                    Promotions
                </p>
                <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-wide transition-colors first:mt-0">
                    Our Promotion Events
                </h2>

            </div>

            {/* All Cards */}
            <div className='flex gap-x-4 gap-y-4 lg:flex-nowrap flex-wrap'>

                {/* Left side */}
                <div className='flex-auto'>
                    {/* Col First Card */}
                    <div className='bg-slate-300 flex justify-between items-center px-6'>
                        <div className='flex-1'>
                            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight uppercase">
                                get up to 60%
                            </h3>
                            <h4 className="scroll-m-20 text-lg font-light tracking-tight">
                                For the Summer Season
                            </h4>
                        </div>

                        <div className='lg:flex-shrink-0 flex-shrink'>
                            <Image src={E1} alt='event1' />
                        </div>
                    </div>

                    {/* Col Second Card */}
                    <div className='bg-gray-900 flex flex-col justify-between items-center px-6 py-6 text-white mt-6'>
                        <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight transition-colors first:mt-0 uppercase p-4 pt-4">
                            Get 30% off
                        </h2>
                        <h4 className="scroll-m-20 text-md tracking-tight uppercase">
                            Use Promo Code
                        </h4>
                        <Button className='bg-gray-700 text-lg tracking-widest py-4 px-6 m-3'>DINEWEEKENDSALE</Button>

                    </div>

                </div>

                {/* Right side */}
                <div className='flex sm:flex-row gap-x-4 gap-y-4 lg:flex-auto flex-1 flex-col'>
                    {/* Row First Card */}
                    <div className='bg-orange-200 pt-4 px-4 sm:flex-1'>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 S">
                            Flex Sweatshirt
                        </p>
                        <div className='flex gap-x-4'>
                            <h4 className="scroll-m-20 text-lg font-extralight tracking-tight line-through">
                                $100.00
                            </h4>
                            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight ">
                                $75.00
                            </h4>
                        </div>

                        <div className='flex justify-center flex-shrink-0'>

                            <Image src={E2} alt='event2' />
                        </div>
                    </div>

                    {/* Row Second Card */}
                    <div className='bg-slate-200 pt-4 px-4 flex-1'>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Flex Push Bottom Bomber
                        </p>
                        <div className='flex gap-x-4'>
                            <h4 className="scroll-m-20 text-lg font-extralight tracking-tight line-through">
                                $255.00
                            </h4>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                                $190.00
                            </h4>
                        </div>
                        <div className='flex justify-center shrink-0'>

                            <Image src={E3} alt='event3' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
