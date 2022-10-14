import { useReducer } from "react"
import FetchingData from "./FetchingData";
import { initialState, reducer } from "./useReducer"

export default function Index() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div className="w-96 mx-auto text-center">
                <div className="bg-green-900 text-white">{state.count}</div>
                <div className="flex items-center justify-center mt-3 space-x-2">
                    <button onClick={() => dispatch({type: 'increment', value: 5})} className="bg-green-500 text-white px-2 py-1 rounded-md">Increment</button>
                    <button onClick={() => dispatch({type: 'decrement', value: 2})} className="bg-red-500 text-white px-2 py-1 rounded-md">Decrement</button>
                    <button onClick={() => dispatch({type: 'reset' })} className="bg-blue-500 text-white px-2 py-1 rounded-md">Reset</button>
                </div>
            </div>

            <FetchingData />

        </div>
    )
}