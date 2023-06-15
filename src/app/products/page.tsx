import React from 'react'
import { Products } from '@/utils/mock'
import ProductCard from '@/components/ProductCard'

export default function AllProducts() {
    return (
        <div className='flex flex-col justify-between items-center gap-y-10 flex-wrap lg:flex-row lg:justify-evenly lg:mx-16 gap-x-10'>

            {
                Products.map((product) => (

                    <ProductCard key={product.id} id={product.id} title={product.name} price={product.price} category={product.category} img={product.image} />
                ))

            }
        </div>
    )
}
