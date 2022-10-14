import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const DocTitleOne = () => {

    const [count, setCount] = useState(0);

    useDocumentTitle(count)

    return (
        <button onClick={() => setCount(count => count + 1)} className="bg-green-500 text-white py-2 px-3 text-center">
            Count: {count}
        </button>
    )
}

export default DocTitleOne;