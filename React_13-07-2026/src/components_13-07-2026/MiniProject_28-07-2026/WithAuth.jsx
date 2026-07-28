function withAuth(WrappedComponent) {

  return function EnhancedComponent(props) {
    
    let isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;