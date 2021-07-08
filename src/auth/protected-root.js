// src/auth/protected-route.js
import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../Components/index";
class ProtectedRoute extends React.Component {
    render() {
        return (
            <Route
                component={withAuthenticationRequired(this.props.component, {
                    onRedirecting: () => <Loading />,
                })}
                {...this.props.args}
            />
        );
    }
}

export default ProtectedRoute;