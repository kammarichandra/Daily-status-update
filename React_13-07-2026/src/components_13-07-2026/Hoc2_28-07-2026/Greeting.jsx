function Message() {
  return <h2>Welcome Student!</h2>;
}

function withGreeting(WrappedComponent) {
  return function () {
    return (
      <>
        <h1>Hello</h1>
        <WrappedComponent />
      </>
    );
  };
}

const GreetingMessage = withGreeting(Message);

export default function App() {
  return <GreetingMessage />;
}