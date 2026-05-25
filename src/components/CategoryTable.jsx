export default function CategoryTable({ lista, isLoading, onEdit, onDelete }) {
    if (isLoading && lista.length === 0) return <p className="text-gray-400">Buscando categorias...</p>;
    if (lista.length === 0) return <p className="text-gray-400">Nenhuma categoria encontrada no banco de dados.</p>;

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-700 text-gray-400 text-sm">
                        <th className="pb-3 font-semibold w-16">ID</th>
                        <th className="pb-3 font-semibold">Nome</th>
                        <th className="pb-3 font-semibold text-right">Ações</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-y-gray-700">
                    {lista.map((categoria) => (
                        <tr key={categoria.id} className="text-gray-300 hover:bg-gray-700/30 transition">
                            <td className="py-3 text-sm text-gray-500">{categoria.id}</td>
                            <td className="py-3 font-medium">{categoria.name}</td>
                            <td className="py-3 text-right space-x-3">
                                <button onClick={() => onEdit(categoria)} className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition cursor-pointer">Editar</button>
                                <button onClick={() => onDelete(categoria.id)} className="text-red-500 hover:text-red-400 text-sm font-semibold transition cursor-pointer">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}