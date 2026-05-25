import { useEffect,useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchCategory, createCategory, deleteCategory, updateCategory } from "../store/thunks/categoryThunk";
import CategoryForm from "../components/CategoryForm";
import CategoryTable from "../components/CategoryTable";

export default function CategoryPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [editingId, setEditingId] = useState(null);

    const {lista, isLoading, error} = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(fetchCategory())
    },[dispatch])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name.trim()) return;

        try {
            if (editingId) {
                
                await dispatch(updateCategory({ id: editingId, name })).unwrap();
            } else {
                
                await dispatch(createCategory({ name })).unwrap();
            }
            
            cancelEdit();
        } catch (err) {
            console.error("Falha ao salvar:", err);
        }
    }

    const handleEditClick = (categoria) => {
        setEditingId(categoria.id);
        setName(categoria.name);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setName("");
    };

    const handleDelete = async (id) => {
        
        if (window.confirm("Tem certeza que deseja excluir esta categoria?")) {
            dispatch(deleteCategory(id));
        }
    };


    return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-8">Gerenciar Categorias</h1>

        {error && <p className="text-red-500 mb-4 bg-red-900/20 p-3 rounded-lg border border-red-500">{error}</p>}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <CategoryForm 
                name={name} 
                setName={setName} 
                handleSubmit={handleSubmit} 
                isLoading={isLoading} 
                editingId={editingId} 
                cancelEdit={cancelEdit} 
            />

            <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-xl font-bold mb-4 text-blue-400">Categorias Cadastradas</h2>
                
                <CategoryTable 
                    lista={lista} 
                    isLoading={isLoading} 
                    onEdit={handleEditClick} 
                    onDelete={handleDelete} 
                />
            </div>
            
        </div>
    </div>
);
}