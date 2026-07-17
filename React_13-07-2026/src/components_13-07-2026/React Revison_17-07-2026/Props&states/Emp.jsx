function Emp(Props) {

    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {Props.name}</p>
            <p>Age: {Props.age}</p>
            <p>Course: {Props.course}</p>
        </div>
    )
}

export default Emp;