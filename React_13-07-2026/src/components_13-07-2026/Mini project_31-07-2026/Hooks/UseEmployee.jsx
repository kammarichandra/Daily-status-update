import React, { useEffect, useState } from 'react'

function UseEmployee() {

    let [employees, setemployees] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setemployees(data));
    }, [])

    return (
        [employees, setemployees]
    )
}

export default UseEmployee;