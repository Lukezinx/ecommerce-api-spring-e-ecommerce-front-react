import { useEffect,useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate,Link } from "react-router-dom";
import { authLogin } from "../store/thunks/authThunk";
import InputField from "../components/InputField";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const dispatch = useDispatch(); 
    const {isLoading, error,token} = useSelector((state) => state.login)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authLogin({email, password}))
    }


    useEffect(() => {
        if(token) {
            navigate('/product')
        }
    },[token])


    return <>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

            
            <form onSubmit={handleSubmit}>
                
                <div className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg">

                    <h1 className="text-2xl font-bold text-white mb-6 text-center">Login</h1>

                    <InputField 
                        label="Email:" 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Digite seu email" 
                    />

                    <InputField 
                        label="Senha:" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Digite sua senha" 
                    />

                    {error && <p className="text-red-500">{error}</p>}

                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isLoading}>    {isLoading ? "Logando..." : "Login"}</button>

                    <p className="text-gray-400 text-center mt-4 text-sm">Não possui conta? <Link className="text-blue-400 hover:underline" to={"/register"}>Cadastre-se</Link></p>
                    
                </div>
            </form>
        </div>
    </>
}