import React from "react";

function withAuth(Component) {

    return function ProtectedComponent() {

        let userAuthenticated = true;

        if (!userAuthenticated) {

            return (

                <h2>Access Denied</h2>

            )

        }

        return (
            <Component />
        )
    }
}

export default withAuth;