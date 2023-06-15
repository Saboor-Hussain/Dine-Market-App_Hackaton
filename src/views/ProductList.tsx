import React from 'react'
import P1 from "public/p1.webp"
import Image, { StaticImageData } from 'next/image'
import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'

export default function ProductList() {
    const productChunks = Products.slice(0, 3);
    console.log(productChunks)

    return (
        <div>

            <div className='flex justify-center items-center my-8 flex-col'>

                <p className="leading-7 [&:not(:first-child)]:mt-6 my-3 text-blue-500 font-bold uppercase text-sm">
                    Products
                </p>
                <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-wide transition-colors first:mt-0">
                    Check What We Have
                </h2>

            </div>

            <div className='flex flex-col justify-center items-center gap-y-10 lg:flex-row lg:justify-evenly lg:mx-16 gap-x-10'>

                {
                    productChunks.map((product) => (

                        <ProductCard key={product.id} id={product.id} title={product.name} price={product.price} category={product.category} img={product.image} />
                    ))

                }
            </div>
        </div>
    )
}
