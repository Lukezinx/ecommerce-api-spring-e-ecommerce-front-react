export default function OrderCard({pedido}) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex justify-between items-center">
            <div>
                <h3 className="font-bold text-lg">Pedido #{pedido.id}</h3>
                <p>Realizado em {pedido.data}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-green-400">R$ {pedido.total.toFixed(2)}</p>
                <span className="inline-block mt-1 bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-700">
                    {pedido.status}
                </span>
            </div>
        </div>
    )
}