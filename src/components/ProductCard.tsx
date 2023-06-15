import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'


export default function ProductCard(props: { id:number, title: string, price: number, category: string, img: StaticImageData }) {
    return (
        <Link href={`/products/${props.id}`}>

        <div>
            <Image src={props.img} alt='Product' />
            <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
            <p className='font-bold text-lg'>${props.price}</p>
            <p className='font-bold text-lg'>Category:
                <span className='font-normal text-base capitalize'> {props.category} </span>
            </p>
            <Button>Add to Cart</Button>
        </div>
        </Link>
        )
}
