import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Promotion from '@/views/Promotion'
import Image from 'next/image'


export default function Home() {
  return (
    <div>

    <Hero/>

    <Promotion/>

    {/* Products */}
    <ProductList/>

    </div>
  )
}
