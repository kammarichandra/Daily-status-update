function WithoutMemoChild({ count }) {

  console.log("Child Render");

  return (

    <div>

      <h2>Count: {count}</h2>

    </div>

  );
}

export default WithoutMemoChild;
