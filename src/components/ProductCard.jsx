export default  function ProductCard({produto, onAddToCard}) {
                             
    return <div key={produto.id} className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold">{produto.name}</h2>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">{produto.description}</p>
                <p className="text-2xl font-bold text-green-400 mt-4">R$ {produto.price.toFixed(2)}</p>
    
            </div>
    
            <button onClick={() => onAddToCard(produto)} className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition cursor-pointer"> Adiconar ao Carrinho</button> 
    </div>
                        
}