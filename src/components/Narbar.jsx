import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../store/slice/authSilce";

export default function Narbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {token,user} = useSelector((state) => state.login)
    const { totalQuantity } = useSelector((state) => state.cart);

    const isAdmin = user?.role === "ADMIN"

    const isLogado = !!token

    const handleLogout = () => {
        dispatch(clearToken())
        navigate("/")
    }

    return (
        <nav className="bg-gray-800 border-b border-gray-700 px-8 py-4 flex justify-between items-center shadow-lg">
           
            <div className="flex items-center gap-8">
                <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition">
                    Meu E-commerce
                </Link>
                
                <div className="hidden md:flex gap-6">
                    <Link to="/" className="text-gray-300 hover:text-white transition">Loja</Link>
                    
                    <Link to="/carrinho" className="text-gray-300 hover:text-white transition flex items-center gap-1 relative">
                        🛒 Carrinho
                        {totalQuantity > 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full absolute -top-3 -right-4">
                            {totalQuantity}
                        </span>)}
                    </Link>

                    {isLogado && (
                        <Link to="/meus-pedidos" className="text-gray-300 hover:text-white transition">Meus Pedidos</Link>
                    )}

                </div>
            </div>

            
            <div className="flex items-center gap-4">
                {isLogado ? (
                    <>
                        {isAdmin && (
                            <div className="hidden md:flex items-center gap-4 mr-4 border-r border-gray-600 pr-4">
                                <Link to="/category" className="text-sm text-gray-400 hover:text-white transition">Categorias</Link>
                                <Link to="/product" className="text-sm text-gray-400 hover:text-white transition">Produtos</Link>
                            </div>
                        )}
                        
                        
                        <button 
                            onClick={handleLogout}
                            className="text-red-400 hover:text-red-300 font-semibold transition"
                        >
                            Sair
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-gray-300 hover:text-white font-semibold transition">
                            Entrar
                        </Link>
                        <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold transition">
                            Cadastrar
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}