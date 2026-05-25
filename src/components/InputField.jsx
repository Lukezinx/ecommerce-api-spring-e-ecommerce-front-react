export default function InputField({label, type, value, onChange, placeholder}) {
    return (
        <div className="mb-4">
            <label className="text-gray-400 text-sm mb-1 block">{label}</label>
            <input 
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition mb-4" 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
            />
        </div>
    )
}