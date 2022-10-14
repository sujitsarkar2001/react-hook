import { useEffect } from "react";

const useDocumentTitle = (count) => {

    useEffect(() => {
        document.title = `Document title ${count}`
    }, [count])
}

export default useDocumentTitle;