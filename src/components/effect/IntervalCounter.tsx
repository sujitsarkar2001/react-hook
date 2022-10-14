import React, { useEffect, useState } from "react"

export const IntervalHookCounter : React.FC = () => {

    const [count, setCount] = useState<number>(0)

    const tick = () => setCount(count => count + 1)

    useEffect(() => {
        console.log('Hello World');
        const interval = setInterval(tick, 1000)

        return () => clearInterval(interval)
        
    }, [count])

    return (
        <div className="bg-red-500 text-center text-white">{ count }</div>
    )
}