import { useState } from "react";

function Counter(){
    const [cont, setCount] = useState(1);

    const increment = () => {
        setCount(cont + 1);
    };

    const decrement = () => {
        setCount(cont - 1);
    };

    return (
        <div>
            <h1>Counter: {cont} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;