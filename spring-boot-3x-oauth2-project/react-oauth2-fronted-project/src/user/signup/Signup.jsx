import SocialSignup from "./SocialSignup";
import {Link, Navigate, useLocation} from "react-router-dom";
import SignupForm from "./SignupForm";

const Signup = (props) => {
    const location = useLocation();

    if (props.authenticated) {
        return <Navigate to="/" state={{from: location.pathname}}/>;
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="signup-title">Signup with SpringSocial</h1>
                <SocialSignup/>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm {...props} />
                <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
            </div>
        </div>
    );
}

export default Signup;