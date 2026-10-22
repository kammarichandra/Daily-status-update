import React, { useEffect, useState } from 'react'

function Timer() {
    let [seconds, setseconds] = useState(0);
    let [isRunning, setIsRunning] = useState()

    useEffect(() => {
        if (!isRunning) {
            console.log("timer stopeed")
            return
        }

        console.log("timmer started...!");

        let intervalidId = setInterval(() => {
            setseconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(intervalidId);
            console.log("timer fun cleaned up ")
        }
    }, [isRunning]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Timer Example</h2>

            <h3>Seconds: {seconds}</h3>

            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Stop Timer" : "Start Timer"}
            </button>
        </div>
    )
}

export default Timer