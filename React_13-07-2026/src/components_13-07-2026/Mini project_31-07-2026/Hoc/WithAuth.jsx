function withAuth(Component) {

    return function ProtectedComponent(props) {
        
        const loggedIn = true;

        if (!loggedIn) {
            return <h2>Access Denied</h2>;
        }

        return <Component {...props} />;
    };
}

export default withAuth;