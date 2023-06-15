import { Products } from "@/utils/mock"
import Image from "next/image";


const getProductDetail = (id: number | string) => {
    return Products.filter((product) => product.id == id);

}

export default function Page({ params }: { params: { id: string } }) {
    const result = getProductDetail(params.id);

    return (
        <div className='flex flex-col justify-between items-center gap-y-10 flex-wrap lg:flex-row lg:justify-evenly lg:mx-16 gap-x-10'>

            {
                
                    result.map((product) => (
                        <div key={product.id} className="flex justify-between gap-6">
                            <div>
                                <Image src={product.image} alt={product.name}/>
                            </div>
                            <div>
                                <h1>Product Detail</h1>
                                <p>Name: {product.name}</p>
                                <p>Name: {product.category}</p>
                                <p>Name: {product.price}</p>
                                
                            </div>

                        </div>
    
                    ))
                  
            }

        </div>
    )
}