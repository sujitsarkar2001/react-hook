import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'Error':
            return {
                loading: false,
                error: action.payload,
                post: {}
            }
        default:
            state;
    }
}
const FetchingData = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'Success', payload: response.data})
            })
            .catch(err => {
                dispatch({ type: 'Error', payload: err.message})
            })
    }, [])

    const { loading, error, post } = state

    return (
        <div className="mt-5">
            {
                loading ? (
                    <div className="bg-green-600 text-white text-center py-3 text-xl">Loading...</div>
                ) 
                : 
                (
                    <div className="w-96 shadow-md mb-10 mx-auto">
                        <div className="border-b border-gray-300 p-2">
                            <h3 className="text-lg capitalize">{post.title}</h3>
                        </div>
                        <div className="p-4">
                            {post.body}
                        </div>
                    </div>
                )
            }
            { error ? <div className="bg-red-600 text-white text-xl">{ error }</div> : null }
            
        </div>
    )
}

export default FetchingData;