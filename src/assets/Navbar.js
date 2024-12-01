import React from "react";
import {useNavigate} from "react-router-dom";
import {useRedirect} from "../navigation/RedirectHandlers";

export default function Navbar() {
    const handleRedirectToRegister = useRedirect('/register');
    const handleRedirectToLogin = useRedirect('/login');
    const handleRedirectToHome = useRedirect('/');
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="" onClick={handleRedirectToHome}>
                        Home Stat
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button onClick={handleRedirectToRegister}>
                        Add User
                    </button>
                    <button onClick={handleRedirectToLogin}>
                        Login
                    </button>
                </div>
            </nav>
        </div>
    )
}