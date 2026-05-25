import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchCategory } from "../store/thunks/categoryThunk";
import { createProduct,updateProduct } from "../store/thunks/productThunks";
import ProductForm from "../components/ProductForm";


export default function ProductFormPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const location = useLocation();
    const productForEdit = location.state?.produto;
    const {lista: categorias} = useSelector((state) => state.category)
    const {isLoading, error} = useSelector((state) => state.product)

    const [formData, setFormData] = useState({
        name: productForEdit?.name || "",
        SKU: productForEdit?.SKU || "",
        description: productForEdit?.description || "",
        price: productForEdit?.price || "",
        quantityStock: productForEdit?.quantityStock || "",
        categoryId: productForEdit?.category?.id || "" 
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        dispatch(fetchCategory())
    },[dispatch])

    const handleSubmit= async (e) => {
        e.preventDefault()

        const payload = {
            ...formData,
            price: parseFloat(formData.price),
            quantityStock: parseInt(formData.quantityStock),
            categoryId: parseInt(formData.categoryId)
        };

        if(payload.price < 0 || payload.quantityStock < 0) {
            alert("Erro: O preço e o estoque não podem ser negativos!")
            return
        }

        try {
            if(productForEdit) {
                await dispatch(updateProduct({id: productForEdit.id, productData: payload})).unwrap()
            } else {
                await dispatch(createProduct(payload)).unwrap()
            }
            navigate("/product")

        } catch (err) {
            console.error("Falha ao salvar produto", err)
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">

                <h1 className="text-2xl font-bold mb-6 text-blue-400">
                    {productForEdit ? "Editar produto" : "Cadastrar novo produto"}
                </h1>

                {error && (<p className="text-red-500 mb-4 bg-red-900/20 p-3 rounded-lg border border-red-500">{error}</p>)}

                <ProductForm 
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    categorias={categorias}
                    isLoading={isLoading}
                    isEditing={!!productForEdit}
                    onCancel={() => navigate("/product")}
                />

            </div>
        </div>
    )
}