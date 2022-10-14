import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    
    useEffect(() => {
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div className="flex items-center justify-between">
        <input
            type="text"
            className="bg-gray-100 py-1 px-3 rounded-tl-sm rounded-bl-sm focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setCount(count => count + 1)} className="bg-gray-700 py-1 px-3 text-white rounded-tr-sm rounded-br-sm">
            Click {count} times
        </button>
        </div>
    );
}

export default Counter;
