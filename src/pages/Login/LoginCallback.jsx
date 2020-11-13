import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function LoginCallback() {

    const token = useQuery().get("token");
    const userId = useQuery().get("userId");
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    window.location.href = '/';
    
}
