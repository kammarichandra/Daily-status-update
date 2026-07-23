import React from "react";


const withLoading = (Component) => {


  return function LoadingComponent(props) {


    if (props.loading) {

      return (

        <div>

          <h2>
            Loading Data...
          </h2>

        </div>

      );

    }


    return (
      <Component {...props}/>
    );

  };


};


export default withLoading;