function withGreeting(WrappedComponent) {
  return function () {
    return (
      <>
        <h1>Welcome!</h1>
        <WrappedComponent />
      </>
    );
  };
}

function Student() {
  return <h2>John</h2>;
}

let EnhancedStudent = withGreeting(Student);

function Hoc() {
  return <EnhancedStudent />;
}
export default Hoc;