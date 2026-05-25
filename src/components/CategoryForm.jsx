export default function CategoryForm({ name, setName, handleSubmit, isLoading, editingId, cancelEdit }) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 h-fit">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
                {editingId ? "Editar Categoria" : "Nova Categoria"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-gray-400 text-sm mb-1 block">Nome da Categoria:</label>
                    <input 
                        type="text" value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Eletrônicos, Roupas..." required
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
                <div className="flex gap-2">
                    <button type="submit" disabled={isLoading} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition disabled:opacity-50">
                        {isLoading ? "Salvando..." : editingId ? "Atualizar" : "Cadastrar"}
                    </button>
                    {editingId && (
                        <button type="button" onClick={cancelEdit} className="bg-gray-600 hover:bg-gray-500 text-white font-bold px-4 py-2 rounded-lg transition">
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}