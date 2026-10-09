import { useEffect, useState } from 'react';

function UseFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const res = await response.json();

                setData(res);

            } catch (error) {
                console.log("Error:", error);
                setError(error.message);

            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { data, loading, error };
}

export default UseFetch;