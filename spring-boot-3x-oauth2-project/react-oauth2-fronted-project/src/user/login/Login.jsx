import {useLocation, useNavigate, Navigate, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Alert from "react-s-alert";
import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [errorDisplayed, setErrorDisplayed] = useState(false);

    useEffect(() => {
        if (location.state && location.state.error && !errorDisplayed) {
            setErrorDisplayed(true);
            setTimeout(() => {
                Alert.error(location.state.error, {
                    timeout: 5000
                });

                navigate(location.pathname, {state: null});

            }, 100);
        }
    }, [location, errorDisplayed, navigate]);

    if (props.authenticated) {
        return (
            <Navigate to={"/"} state={{from: location.pathname}}/>
        );
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <SocialLogin/>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm {...props} />
                <span className="signup-link">
                    New user? <Link to="/signup">Sign up!</Link>
                </span>
            </div>
        </div>
    );
};

export default Login;