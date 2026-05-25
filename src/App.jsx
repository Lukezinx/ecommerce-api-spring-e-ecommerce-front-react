import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProductPage from "./pages/ProductPage"
import ProtectedRoute from "./components/ProtectedRoute"
import CategoryPage from "./pages/CategoryPage"
import ProductFormPage from "./pages/ProductFormPage"
import HomePage from "./pages/HomePage"
import OrdersPage from "./pages/OrdersPage"
import CartPage from "./pages/CartPage"


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/carrinho" element={<CartPage/>}/>
                <Route path="/meus-pedidos" element={<ProtectedRoute><OrdersPage/></ProtectedRoute>}/>


                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>



                {/* ADMINISTRATIVO ONLY DEV OR BOSS */}

                <Route path="/product" element={<ProtectedRoute requireAdmin={true}><ProductPage/></ProtectedRoute>}/>
                <Route path="/product/form" element={<ProtectedRoute requireAdmin={true}><ProductFormPage/></ProtectedRoute>}/>
                <Route path="/category" element={<ProtectedRoute requireAdmin={true}><CategoryPage/></ProtectedRoute>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default App
