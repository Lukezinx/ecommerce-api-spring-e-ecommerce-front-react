import {useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate,Link } from "react-router-dom";
import { registerThunk } from "../store/thunks/registerThunk";
import InputField from "../components/InputField";

export default function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorLocal, setErrorLocal] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const {isLoading, error} = useSelector((state) => state.login)

    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const validPassword = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password)
        if(!validPassword) {
            setErrorLocal("A senha deve ter no mínimo 8 caracteres e pelo menos uma letra")
            return
        }

        if(password !== confirmPassword) {
            setErrorLocal("As senhas não coincidem")
            return
        }

        try {
            await dispatch(registerThunk({email,password})).unwrap()
            navigate("/")
        } catch {
            //erro tratado pelo redux
        }
    }


    return <>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
            <form onSubmit={handleSubmit}>

                <div  className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg">
                    <h1 className="text-2xl font-bold text-white mb-6 text-center">Cadastro</h1>

                    <InputField 
                    label="Digite seu Email:" 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Digite seu email" 
                    />

                    <InputField 
                    label="Digite sua Senha:" 
                    type="password" 
                    value={email} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Digite sua senha" 
                    />


                    <InputField 
                    label="Confirme sua senha:" 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        setErrorLocal('')
                    }} 
                    placeholder="Digite sua senha novamente" 
                    />

                    <div className="flex  justify-center">
                        {errorLocal && <p className="text-red-500 text-sm mb-2">{errorLocal}</p>}
                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                    </div>


                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isLoading}>{isLoading ? "Cadastrando..." : "Cadastre-se"}</button>

                    <p className="text-gray-400 text-center mt-4 text-sm">Ja possui cadastro? <Link className="text-blue-400 hover:underline" to={"/"}>Login</Link></p>

                </div>                    
            </form>
        </div>
    </>
}