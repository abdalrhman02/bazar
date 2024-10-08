import React, { useState, useEffect, useRef } from 'react';
import { auth } from '../firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';
import { logout, AuthStatus } from '../Helpers/AuthContext';
import { Link } from 'react-router-dom';

function Header() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const checkUserStatus = async () => {
            const loggedInUser = await AuthStatus();
            setUser(loggedInUser);
        };

        checkUserStatus();
    }, []);

    let userLinks = useRef();
    let userLinksBar = () => {
        if (userLinks.current.classList.contains("disNone")) {
            userLinks.current.classList.add("disBlock");
            userLinks.current.classList.remove("disNone");
        } else {
            userLinks.current.classList.remove("disBlock");
            userLinks.current.classList.add("disNone");
        }
    }


    // Small Screen 
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        function handleResize() {
        setIsSmallScreen(window.innerWidth >= 900);
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isSmallScreen ? (
                <header>
                    <div className="container">
                        <div className="socials-login">
                            <div className="login">
                                {user ? 
                                    <>                            
                                        <img src={require('../Images/icons/white-user.png')} onClick={userLinksBar} />
                                        <div className='userLinks disNone' ref={userLinks}>
                                            <Link to={("/ProfilePage")}><p>الحساب الشخصي</p></Link>
                                            <p onClick={logout}>تسجيل الخروج</p>
                                        </div>
                                    </>
                                    :
                                    <Link to={"/Login"}>
                                        <p>تسجيل الدخول</p>
                                    </Link>
                                }
                            </div>

                            <a href="#" className='socials'>
                                <img src={require('../Images/icons/instagram.png')} />
                            </a>
                        </div>

                        <div className="logo-links">
                            <a href="/"><img src={require('../Images/Logo/BazarLogo.png')} className='logo-img' /></a>
                            <ul className="links">
                                <li><Link to={("/")}>الصفحة الرئيسية</Link></li>
                                <li><Link to={("/Store")}>المنتجات</Link></li>
                                <li><Link to={("/Contact")}>تواصل معنا</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            ) : (
                <header className='small-header'>
                    <div className="container">

                        <div className="socials-login">
                            <div className="login">
                                {user ? 
                                    <>                            
                                        <img src={require('../Images/icons/white-user.png')} onClick={userLinksBar} />
                                        <div className='userLinks disNone' ref={userLinks}>
                                            <Link to={("/ProfilePage")}><p>الحساب الشخصي</p></Link>
                                            <p onClick={logout}>تسجيل الخروج</p>
                                        </div>
                                    </>
                                    :
                                    <Link to={"/Login"}>
                                        <p>تسجيل الدخول</p>
                                    </Link>
                                }
                            </div>
        
                            <a href="#" className='socials'>
                                <img src={require('../Images/icons/instagram.png')} />
                            </a>
                        </div>

                        <div className='logo'>
                            <a href="/"><img src={require('../Images/Logo/BazarLogo.png')} className='logo-img' /></a>
                        </div>
        
                        <div className="links">
                            <ul className="link">
                                <li><Link to={("/")}>الرئيسية</Link></li>
                                <li><Link to={("/Store")}>المنتجات</Link></li>
                                <li><Link to={("/Contact")}>تواصل معنا</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            )}
        </>
    )
}

export default Header;