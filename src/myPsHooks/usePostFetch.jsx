import { useState, useEffect } from "react";
function usePostFetch (url, data) {
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(()=> {
        fetch(url, {
            method: "POST",
            contentType: "application/json;",
            body: JSON.stringify(data)
        }).then(response => {
            return response.json()
        }).then(res => {
            setResult(res);
            setLoad(false);
        }).catch(err => {
            setError(err.message);
            setLoad(false);
        })
    }, [url, data]);

    return {
        load,
        error,
        result
    }
}
 
export default usePostFetch;