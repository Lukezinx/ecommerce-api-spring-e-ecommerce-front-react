export default function CardItem({item}) {
    return (
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex justify-between items-center">
            <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm mt-1">SKU: {item.SKU}</p>
                <p className="text-blue-400 font-semibold mt-2">
                    Qtd: {item.quantidadeComprada}
                </p>
            </div>
            <div className="text-right">
                <p className="text-xl font-bold text-green-400">
                    R$ {(item.price * item.quantidadeComprada).toFixed(2)}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                    (R$ {item.price.toFixed(2)} un.)
                </p>
            </div>
        </div>
    )
}