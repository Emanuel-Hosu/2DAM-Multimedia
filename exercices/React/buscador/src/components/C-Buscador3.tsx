import { useState } from "react";

function Buscador3(){
    const [query, SetQuery] = useState<string>("");
    const nombres :String[] = ["Emi", "Juan", "Paco", "Arnau"]

    const filteredNames = nombres.filter(nombre =>
        nombre.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div>
            <input 
            type="text" 
            value={query}
            onChange={(e) => SetQuery(e.target.value)}
            placeholder= "Busca..."
            className="w-full bg-amber-100 text-black px-4 py-4"
            />

            <ul>
                {filteredNames.map((nombre, index) => (
                    <li
                    key={index}
                    className="m-4 bg-amber-400 font-bold text-black px-2 py-2 w-full"
                    >
                    {nombre}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Buscador3;