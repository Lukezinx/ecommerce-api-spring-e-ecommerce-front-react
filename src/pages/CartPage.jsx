import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "../store/slice/cartSlice";
import Narbar from "../components/Narbar";
import CardItem from "../components/CardItem";

export default function CartPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    const { items, totalPrice, totalQuantity } = useSelector((state) => state.cart);
    const { token } = useSelector((state) => state.login);

    const handleFinalizarCompra = () => {
        
        if (!token) {
            alert("Precisa de iniciar sessão para finalizar a sua compra!");
            navigate("/login");
            return;
        }
        
        alert("Pedido realizado com sucesso! (Simulação)");
        dispatch(clearCart()); 
        navigate("/meus-pedidos"); 
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Narbar />

            <div className="p-8 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-blue-400">Seu Carrinho de Compras</h1>

                {items.length === 0 ? (
                    
                    <div className="text-center py-12 bg-gray-800 rounded-xl border border-gray-700 p-8">
                        <p className="text-gray-400 text-lg mb-6">O seu carrinho ainda está vazio.</p>
                        <Link 
                            to="/" 
                            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition"
                        >
                            Voltar para a Loja
                        </Link>
                    </div>
                ) : (
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                               <CardItem key={item.id} item={item}/>
                            ))}
                            
                            <button 
                                onClick={() => dispatch(clearCart())}
                                className="text-sm text-red-400 hover:text-red-300 transition font-semibold"
                            >
                                🗑️ Limpar Carrinho
                            </button>
                        </div>

                        
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 h-fit space-y-6">
                            <h2 className="text-xl font-bold border-b border-gray-700 pb-3">Resumo do Pedido</h2>
                            
                            <div className="flex justify-between text-gray-400">
                                <span>Total de itens:</span>
                                <span className="text-white font-medium">{totalQuantity}</span>
                            </div>
                            
                            <div className="flex justify-between items-center border-t border-gray-700 pt-4 text-lg font-bold">
                                <span>Total:</span>
                                <span className="text-green-400 text-2xl">R$ {totalPrice.toFixed(2)}</span>
                            </div>

                            <button 
                                onClick={handleFinalizarCompra}
                                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition shadow-lg cursor-pointer"
                            >
                                Finalizar Compra
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}