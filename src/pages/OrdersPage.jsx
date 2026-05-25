import OrderCard from "../components/OrderCard";

export default function OrdersPage() {

    const mockPedidos = [
        { id: "PED-1029", data: "20/05/2026", total: 3500.00, status: "Aprovado" },
        { id: "PED-1030", data: "21/05/2026", total: 199.90, status: "Em Transporte" }
    ];


    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-blue-400">Meus Pedidos</h1>
                <div className="space-y-4">
                    {mockPedidos.map((pedidos) => (
                        <OrderCard key={pedidos.id} pedido={pedidos}/>
                    ))}
                </div>
            </div>
        </div>
    )
}