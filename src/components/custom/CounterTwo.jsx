import useCounter from "../../hooks/useCounter";

const CounterTwo = () => {

    const [count, increment, decrement, reset] = useCounter();

    return (
        <div className="w-96 bg-gray-100 rounded-md text-center py-5">
            <p className="text-lg">Count : {count}</p>

            <div className="flex mt-3 items-center justify-center space-x-2">
                <button onClick={increment} className="bg-gray-200 py-2 px-3 rounded-sm">Increment</button>
                <button onClick={decrement} className="bg-gray-200 py-2 px-3 rounded-sm">Decrement</button>
                <button onClick={reset} className="bg-gray-200 py-2 px-3 rounded-sm">Reset</button>
            </div>
        </div>
    )
}

export default CounterTwo;