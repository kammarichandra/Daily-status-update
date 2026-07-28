import useCounter from "./useCounter";

function Student() {
    
  let { count, increment } = useCounter();

  return (
    <>
      <h1>Student Dashboard</h1>

      <h3>Name : chandra</h3>

      <h3>Course : React</h3>

      <h3>Visits : {count}</h3>

      <button onClick={increment}> Increase Visit </button>
    </>
  );
}

export default Student;