import React from 'react';
import { useLocation, Redirect } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function LoginCallback() {

    const token = useQuery().get("token");
    console.log(token);
    localStorage.setItem('token', token);
    return (
        <Redirect to="/"></Redirect>
    )
}
