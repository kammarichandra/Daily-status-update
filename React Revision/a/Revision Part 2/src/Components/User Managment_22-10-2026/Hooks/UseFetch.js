
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        setData(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, loading, error };
}
