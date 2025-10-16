import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className="signup-container">
                <div className="signup-left">
                    <form className="signup-form">
                        <img src="img/logo.png" alt="Faith" className="logo" />
                        <h1>Create an account</h1>

                        <label>Full Name</label><br />
                        <input type="text" className="input-field" required /><br />

                        <label>Email</label><br />
                        <input type="email" className="input-field" required /><br />

                        <label>Password</label><br />
                        <input type="password" className="input-field" required /><br />

                        <button type="submit" className="submit-btn">Submit</button><br />

                        <img src="img/google.png" alt="Sign in with Google" className="google" />

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