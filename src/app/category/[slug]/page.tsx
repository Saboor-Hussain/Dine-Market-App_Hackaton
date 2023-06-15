import { Products } from "@/utils/mock"
import ProductCard from '@/components/ProductCard'


const getProductsByCategory = (category: string) => {
    return Products.filter((product) => product.category == category);

}

export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductsByCategory(params.slug);
    
    return (
        <div className='flex flex-col justify-between items-center gap-y-10 flex-wrap lg:flex-row lg:justify-evenly lg:mx-16 gap-x-10'>

            {
                result.length > 0 ? 
                    result.map((product) => (
    
                        <ProductCard key={product.id} id={product.id} title={product.name} price={product.price} category={product.category} img={product.image} />
                    ))
                    :
                    <p>No Products Found!</p>

            }

            
        </div>
    )
}