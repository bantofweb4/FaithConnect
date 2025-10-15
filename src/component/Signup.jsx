import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <main className="page">
                <section className="card">
                    <div className="card-left">
                        <img src="img/Mask group-1.png" alt="" className="left-img small" />
                        <img src="img/Mask group-2.png" alt="" className="left-img medium" />
                        <img src="img/Mask group.png" alt="" className="left-img" />
                    </div>

                    <div className="card-right">
                        <form className="login-form" noValidate>
                            <img src="img/logo.png" alt="Faith" className="logo" />
                            <h1 className="form-title">Sign Up</h1>

                            <label htmlFor="email" className="label">Email</label>
                            <input id="email" name="email" type="email" className="input" required />

                            <label htmlFor="password" className="label">Password</label>
                            <input id="password" name="password" type="password" className="input" required />

                            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                            <input id="confirmPassword" name="confirmPassword" type="password" className="input" required />

                            <button type="submit" className="btn">Sign Up</button>

                            <img src="img/google.png" alt="Sign up with Google" className="google-btn" />

                            <p className="signup-note">
                                Already have an account?{' '}
                                <Link to="/mainsignup" className="underline">Login</Link>
                            </p>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Signup