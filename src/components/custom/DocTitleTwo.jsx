import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const DocTitleTwo = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-green-500 ml-2 text-white py-2 px-3 text-center"
        >
        Count: {count}
        </button>
    );
};

export default DocTitleTwo;
