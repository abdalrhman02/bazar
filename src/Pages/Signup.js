import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, fst , app } from "../firebaseconfig";
import { doc, setDoc } from 'firebase/firestore';

//Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
            
            try {
                await setDoc(doc(app, "users", user.uid), {
                    username: displayName, 
                    email: email,
                    role: "User",
                });
            } catch (firestoreError) {
                console.error("Error creating user document:", firestoreError);
                setError("Failed to create user document: " + firestoreError.message);
            }

            // TODO: navigate didn't work!
            console.log("Signup successful");
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
                                <input type='email' placeholder='البريد الالكتروني' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='inp'>
                                <input type='password' placeholder='كلمة المرور' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className='btns'>
                                <button className='loginBtn btn' type='submit'>انشاء الحساب</button>
                                <Link to="/Login">
                                    <button className='loginBtn btn' type='button'>تسجيل الدخول</button>
                                </Link>
                            </div>
                        </form>

                        <br></br>
                        {noti}

                        <div className='otherLoginWays'>
                            <h3>تسجيل الدخول عبر</h3>
                            <div>
                                <div className='way'>
                                    <img src={require('../Images/icons/phone.png')} alt="Phone" />
                                </div>
                                <div className='way'>
                                    <img src={require('../Images/icons/google.png')} alt="Google" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Signup;