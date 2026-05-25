export default function ProductForm({ 
    formData, 
    handleChange, 
    handleSubmit, 
    categorias, 
    isLoading, 
    isEditing, 
    onCancel 
}) {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-gray-400 text-sm mb-1 block">Nome do Produto:</label>
                    <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required 
                        placeholder="Ex: iPhone 15 Pro"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
                <div>
                    <label className="text-gray-400 text-sm mb-1 block">SKU:</label>
                    <input 
                        type="text" name="SKU" value={formData.SKU} onChange={handleChange} required 
                        placeholder="Ex: ELE-IPH15P-BLK"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                    />
                </div>
            </div>

            <div>
                <label className="text-gray-400 text-sm mb-1 block">Descrição:</label>
                <textarea 
                    name="description" value={formData.description} onChange={handleChange} rows="3" 
                    placeholder="Insira os detalhes técnicos ou comerciais do produto..."
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-gray-400 text-sm mb-1 block">Preço (R$):</label>
                    <input 
                        type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required min="0" placeholder="0.00"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                    />
                </div>
                <div>
                    <label className="text-gray-400 text-sm mb-1 block">Quantidade em Estoque:</label>
                    <input 
                        type="number" name="quantityStock" value={formData.quantityStock} onChange={handleChange} required min="0" placeholder="0"
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                    />
                </div>
            </div>

            <div>
                <label className="text-gray-400 text-sm mb-1 block">Categoria:</label>
                <select 
                    name="categoryId" value={formData.categoryId} onChange={handleChange} required 
                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                    <option value="" disabled>Selecione uma categoria</option>
                    {categorias?.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-gray-800">
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex justify-end gap-4 mt-8">
                <button 
                    type="button" onClick={onCancel} 
                    className="px-6 py-2 text-gray-400 hover:text-white font-semibold transition cursor-pointer">
                    Cancelar
                </button>
                <button 
                    type="submit" disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2 rounded-lg transition disabled:opacity-50 cursor-pointer">
                    {isLoading ? "Salvando..." : isEditing ? "Atualizar Produto" : "Cadastrar Produto"}
                </button>
            </div>
        </form>
    );
}