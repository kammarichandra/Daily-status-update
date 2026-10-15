
import { Component } from "react";
import Errorfallback from "./Errorfallback";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Rendering error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Errorfallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
