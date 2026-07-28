import { useState } from "react";

export default function useCounter() {
    let [count, setCount] = useState(0);

    return {
        count,
        increment: () => setCount(count + 1)
    };
}