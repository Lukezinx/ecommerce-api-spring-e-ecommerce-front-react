import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearToken } from "../store/slice/authSilce"
import { fetchProducts,deleteProduct } from "../store/thunks/productThunks";
import AdminProductCard from "../components/AdminProductCard";

export default function ProductPage() {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const {lista, isLoading,error} = useSelector((state) => state.product);
    const [searchName, setSearchName] = useState(''); 



    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch])

    const handleLogout = () => {
        dispatch(clearToken())
        navigate("/")
    }

    const handlePesquisar = () => {
        dispatch(fetchProducts({name: searchName}))
    }

    const handleClearFilter = () => {
        setSearchName('')
        dispatch(fetchProducts());
    }

    const handleDelete = (id) => {
        if(window.confirm("Tem certeza que deseja deletar este produto?")) {
            dispatch(deleteProduct(id))
        }
    }

    return <>
        <div className="min-h-screen bg-gray-900 text-white p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">Gerenciar Produtos</h1>
                <button className="bg-green-600 hover:bg-green-500 py-2 px-4 rounded-lg mr-4 font-bold transition cursor-pointer" onClick={() =>navigate("/product/form")}>
                    + Cadastrar Produto
                </button>

                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 py-2 px-6 rounded-lg transition font-bold cursor-pointer">
                    Sair da Conta
                </button>

            </div>
            
            <div className="flex gap-4 mb-8 bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Buscar produto" className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>


                <button onClick={handlePesquisar} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-bold transition"> Buscar</button>

                {searchName && (
                    <button onClick={handleClearFilter} className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg font-bold transition">Limpar</button>
                )}
            </div>

            {isLoading ? (
                <p>Carregando estoque...</p>
            ): error ? (
                <p>Error: {error}</p>
            ): (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {lista?.map(produto => (
                        <AdminProductCard key={produto.id} produto={produto} onEdit={(prod) => navigate("/product/form", {state: {produto: prod}})} onDelete={handleDelete}/>
                    ))}
                </div>
            )}

        </div>
    </>
}