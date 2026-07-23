import React from "react";

let withLoading = (Component) => {

  return function LoadingComponent(props) {

    if (props.isLoading) {
      return (
        <div className="loader">
          <h2>🔄 Fetching products...</h2>
          <div className="spinner"></div>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withLoading;