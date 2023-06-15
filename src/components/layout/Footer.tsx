import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='border-t border-black mt-28 px-16 py-6 gap-4 flex justify-between flex-wrap '>
      <div>
        <p className="text-base text-muted-foreground">
          Copyright © 2023 Dine Market
        </p>
      </div>

      <div className="flex text-base text-muted-foreground">
        <p> Design by. </p>
        <p className='text-foreground font-semibold'>Weird Design Studio </p>
      </div>

      <div className="flex text-base text-muted-foreground">
        <p> Code by. </p>
        <p className='text-foreground font-semibold'>Saboor Hussain on <Link href={"/"}> Github </Link></p>
      </div>
    </div>
  )
}
