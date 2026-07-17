function Student() {

    function greet(a,b) {
        return a+b;
    }

    return (
        <div>
            <h1>Student Component</h1>
            <p>Name : chandra sekhar</p>
            <p>Age :23</p>
            <p>{greet(10,20)}</p>
        </div>
    );
}

export default Student;