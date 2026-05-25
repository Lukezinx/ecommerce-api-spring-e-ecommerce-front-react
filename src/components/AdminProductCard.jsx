export default function AdminProductCard({produto, onEdit, onDelete}) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-2">{produto.name}</h2>
            <p className="text-gray-400 text-sm mb-4">{produto.description}</p>
            <p className="text-blue-400 font-bold text-lg mb-2">R$ {produto.price}</p>
            
            <div className="flex justify-between text-sm text-gray-500">
                <span>SKU: {produto.SKU}</span>
                <span>Estoque: {produto.quantityStock}</span>
            </div>

            {produto.category && (
                <span className="inline-block mt-4 bg-gray-700 px-3 py-1 rounded-full text-xs">
                    {produto.category.name}
                </span>
            )}

            <div className="flex justify-between mt-6 pt-4 border-t border-gray-700">
                <button onClick={() => onEdit(produto)} className="text-blue-400 hover:text-blue-300 font-semibold transition cursor-pointer">
                    Editar
                </button>
                <button onClick={() => onDelete(produto.id)} className="text-red-500 hover:text-red-400 font-semibold transition cursor-pointer">
                    Excluir
                </button>
            </div>
        </div>
    )
    
}