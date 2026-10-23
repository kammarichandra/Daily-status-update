
import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
         hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("Error:", error);
    console.error("Component Info:", info);
  }

  render() {
    if (this.state.hasError) {

      return (

        <div>
            
          <h2> Something went wrong! </h2>

          <p> An unexpected error occurred. </p>

          <button onClick={() => this.setState({ hasError: false }) } > Try Again </button>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
