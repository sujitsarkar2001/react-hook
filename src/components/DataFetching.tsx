import axios from "axios";
import React, { useEffect, useState } from "react"

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const DataFetching: React.FC = () => {

    const [post, setPost] = useState<Post>({
        userId: 0,
        id: 0,
        title: '',
        body: '',
    });
    
    const [id, setId] = useState<string | number>(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => setPost(response.data))
                .catch(error => console.log(error))
    }, [id])

    return (
        <div className="flex flex-wrap mt-5">
            {/* {posts && posts.map((post, key) => (
                <div className="sm:w-6/12 md:w-4/12 shadow-md mb-10" key={key}>
                    <div className="border-b border-gray-300 p-2">
                        <h3 className="text-lg capitalize">{post.title}</h3>
                    </div>
                    <div className="p-4">
                        {post.body}
                    </div>
                </div>
            ))} */}
            <div className="sm:w-6/12 md:w-4/12 shadow-md mb-10">
                <div className="border-b border-gray-300 p-2">
                    <h3 className="text-lg capitalize">{post.title}</h3>
                </div>
                <div className="p-4">
                    {post.body}
                </div>
            </div>
            <div className="sm:w-6/12 md:w-4/12 shadow-md mb-10 p-3">
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} className="bg-gray-100 p-2 w-full border border-gray-300 focus:outline-none" />
            </div>
        </div>
    )
}

export default DataFetching;