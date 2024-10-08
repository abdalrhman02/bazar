import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, fst } from "../firebaseconfig";
import { doc, setDoc } from 'firebase/firestore';

//Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [town, setTown] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [noti, setNoti] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setNoti("");
        setError("");

        const displayName = lastName ? `${firstName} ${lastName}` : firstName;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName });
            
            await setDoc(doc(fst, "users", user.uid), {
                username: displayName, 
                email: email,
                town: town,
                role: "User",
            });

            navigate('/');
        } catch (error) {
            console.error("Signup error:", error);
            if (error.code === "auth/email-already-in-use") {
                setNoti("هنالك حساب يستخدم هذا الايميل بالفعل!");
            } else {
                setError(error.message);
            }
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

            <div className="loginSignupForm signup">
                <div className='container'>
                    <div className='image'>
                        <h1>مرحبا بك!</h1>
                        <img src={require('../Images/login-signup/signup-img.png')} alt="Signup" />
                    </div>
                    
                    <div className='loginForm'>
                        <h2 className='title'>انشاء حساب</h2>
                        
                        <form onSubmit={handleSignup}>
                            <div className='inp'>
                                <input type='text' placeholder='الاسم' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            </div>
                            <div className='inp'>
                                <input type='text' placeholder='اسم العائلة' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            </div>
                            <div className='inp'>
                                <input type='text' placeholder='البلد' value={town} onChange={(e) => setTown(e.target.value)} required />
                            </div>
                            <div className='inp'>
                                <input type='email' placeholder='البريد الالكتروني' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='inp'>
                                <input type='password' placeholder='كلمة المرور' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className='btns'>
                                <button className='loginBtn btn' type='submit'>انشاء الحساب</button>
                                <p>لديك حساب على موقعنا؟ <Link to="/Login">سجل دخولك من هنا</Link></p>
                            </div>
                        </form>

                        <br></br>
                        {noti}

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
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Signup;
