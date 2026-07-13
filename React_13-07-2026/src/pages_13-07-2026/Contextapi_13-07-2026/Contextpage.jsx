import React from "react";
import Counter from "../../components_13-07-2026/contextapi_13-07-2026/Counter";
import CounterProvider from "../../components_13-07-2026/contextapi_13-07-2026/Countercontext";

const ContextPage = () => {
  return (
    <CounterProvider> usecontext()
      <div>
        <h1>Context API Page</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default ContextPage;