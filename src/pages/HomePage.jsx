import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../store/thunks/productThunks";
import Narbar from "../components/Narbar";
import { addToCart } from "../store/slice/cartSlice";

import ProductCard from "../components/ProductCard";


export default function HomePage() {
    const dispatch = useDispatch()
    const {lista: produtos, isLoading} = useSelector((state) => state.product);

    useEffect(()=> {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Narbar/>
            <div className="p-8 max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Nossa Loja</h1>

                {isLoading ? (<p className="text-center text-gray-400"> Carregando produtos...</p>)
                : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {produtos.map((produtos) => (
                            <ProductCard key={produtos.id} produto={produtos} onAddToCard={(produtos) => dispatch(addToCart(produtos))}/>
                        ))}
                    </div>
                )
            }
            </div>
        </div>
    )
}