import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className="signup-container">
                <div className="signup-left">
                    <form className="signup-form">
                        <div className="mainlogo"><img src="img/logo.png" alt="Faith" className="logo" /></div>
                        <h1 className="h1">Create an account</h1>

                        <label>Full Name</label>
                        <input type="text" className="input-field" required /><br />

                        <label>Email</label>
                        <input type="email" className="input-field" required /><br />

                        <label>Password</label>
                        <input type="password" className="input-field" required /><br />

                        <button type="submit" className="submit-btn">Submit</button><br />

                        <div className="maingoogle"><img src="img/google.png" alt="Sign in with Google" className="google" /></div>

                        <p className="login-note">
                        Have an account? <a href="log in.html">Log in</a>
                        </p>
                    </form>
                </div>

                <div className="signup-right">
                    <img src="img/Mask group-1.png" alt="" />
                    <img src="img/Mask group-2.png" alt="" />
                    <img src="img/Mask group.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Signup