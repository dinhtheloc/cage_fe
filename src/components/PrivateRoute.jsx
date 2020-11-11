import React from "react";
import {
    Redirect, Route
} from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
    const token = localStorage.getItem('token');
    console.log(token);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                        <Redirect to='/login'/>
                    )
            }
        />
    );


}


