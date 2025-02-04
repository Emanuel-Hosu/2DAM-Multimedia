import { useState } from "react";

function Searcher2(){
    const [query, setQuery] = useState<string>("");
    const fruits: string[] = ["Manzana", "Banana", "Melocoton", "Coco", "Mandarina"]

    const filtredFruits = fruits.filter(fruit =>
        fruit.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="items-center">
            <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Buscar"
            className="border-2 border-amber-500 w-full px-3 py-3"
            />
            <div>
                <ul className="flex-col gap-4 text-black">
                    {filtredFruits.map((fruits, index) => (
                        <li
                        className="px-2 py-2 bg-amber-100 rounded-lg m-2"
                        key={index}
                        >
                            {fruits}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Searcher2;