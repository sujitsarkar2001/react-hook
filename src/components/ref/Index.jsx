import { useEffect, useRef } from "react";

const Index = () => {

    const inputRef = useRef(null);
    console.log(inputRef);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" className="border border-gray-500 py-3 px-2 w-full" />
        </div>
    )
}

export default Index;