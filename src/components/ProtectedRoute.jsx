import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import Narbar from "./Narbar";

export default function PotectedRoute({children, requireAdmin}) {
    const {token, user} = useSelector((state) => state.login)

    if(!token) {
        return <Navigate to="/login" replace/>
    }

    if(requireAdmin && user?.role !== "ADMIN") {
        return <Navigate to={"/"} replace/>
    }

    return <div className="min-h-screen bg-gray-900">
        <Narbar/>
        <main>{children}</main>
    </div>
}

