import ErrorBoundary from "./Components/ErrorBoundry";
import EmpList from "./Features/EmpList";


function Advance() {
  return (
    <ErrorBoundary>
      <EmpList />
    </ErrorBoundary>
    
  );
}

export default Advance;