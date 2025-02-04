import { useState } from "react";

function Searcher() {
    const [query, setQuery] = useState<string>("");
    const fruits: string[] = ["Banana", "Manzana", "Piña", "Melocotón"]

    const filteredNames = fruits.filter(fruit =>
        fruit.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="justify-center flex items-center">
            <div>
                <input type="text" name="" id="" placeholder="Buscar" value={query} onChange={(e) => setQuery(e.target.value)} className="mx-4 my-4 px-2 py-2 border-2 border-amber-600 rounded-lg w-full"/>
                <div className="bg-amber-700">
                    <ul className="bg-amber-800 px-1 py-1">
                        {filteredNames.map((name, index) => (
                            <li key={index} className="bg-amber-50 text-black px-2 py-2 m-2">
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Searcher;