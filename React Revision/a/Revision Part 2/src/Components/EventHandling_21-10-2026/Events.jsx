import { useState } from 'react'

function Events() {
    //button click
    let [message, setmessage] = useState("welcome to atp");

    let handleclick = () => {
        setmessage("button cliked successfully...!")
    }
    // text
    let [name, setname] = useState("");

    let handlechange = (e) => {
        setname(e.target.value)
    }

    // submit

    let [submittedname, setsubmittedname] = useState("")

    let handlesubmit = (e) => {
        e.preventDefault()
        setsubmittedname(name)
    }

    return (
        <div>
            <h2>React event handling</h2>
            {/* onClick example */}
            <section>
                <h2>1. Button Click</h2>
                <p>{message}</p>

                <button onClick={handleclick}>
                    Click Me
                </button>
            </section>

            {/* onChange example */}
            <section>
                <h2>2. Live Text Input</h2>

                <input type="text" placeholder="Enter your name" value={name} onChange={handlechange} />

                <p>You are typing: {name}</p>
            </section>

            {/* onSubmit example */}
            <section>
                <h2>3. Form Submission</h2>

                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="Enter your name" value={name} onChange={handlechange} required />

                    <button type="submit"> Submit </button>
                </form>

                {submittedname && (
                    <p>Submitted name: {submittedname}</p>
                )}
            </section>
        </div>
    )
}

export default Events