import { useEffect, useState } from "react";
import PropBox from "./PropBox"; // Make sure the import path is correct

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const detailsJson = await response.json();
            setData(detailsJson);
            setIsPending(false);
        } catch (err) {
            setError(err.message);
            setIsPending(false);
        }
    };

    return { data, isPending, error };
};

// Component to use the useFetch hook
export const DataFetchingComponent = () => {
    const { data, isPending, error } = useFetch();

    
    return (
        <div>
        </div>
    );
};
