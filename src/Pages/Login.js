import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setError("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
        }
    };

    
    // If user logged in go to the home page.
    auth.onAuthStateChanged(function(user) {
        if (user) {
          navigate("/")
        } else {
          return
        }
    });

    return (
        <>
            <Header />

            <div className="loginSignupForm">
                <div className='container'>
                    <div className='loginForm'>
                        <h2 className='title'>تسجيل الدخول</h2>
                        
                        <form onSubmit={handleLogin}>
                            <div className='inp'>
                                <input
                                    type='email'
                                    placeholder='البريد الالكتروني'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='inp'>
                                <input
                                    type='password'
                                    placeholder='كلمة المرور'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='btns'>
                                <button className='loginBtn btn' type='submit'>تسجيل الدخول</button>
                                {error && <p className="error" style={{color: 'red', fontWeight:600}}>{error}</p>}

                                <p>لا تملك حساب على موقعنا؟ <Link to="/Signup">انشئ حساب جديد الان</Link></p>
                            </div>
                        </form>


                        {/* <div className='otherLoginWays'>
                            <h3>تسجيل الدخول عبر</h3>
                            <div>
                                <div className='way'>
                                    <img src={require('../Images/icons/phone.png')} alt="Phone" />
                                </div>
                                <div className='way'>
                                    <img src={require('../Images/icons/google.png')} alt="Google" />
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className='image'>
                        <h1>مرحبا بك!</h1>
                        <img src={require('../Images/login-signup/login-img.png')} alt="Login" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Login;