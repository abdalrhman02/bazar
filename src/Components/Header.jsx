
function Header() {
    return (
        <header>
            <div className="container">
                <div className="socials-login">
                    <div className="login">
                        <a href="#">
                            <p>تسجيل الدخول</p>
                            <img src={require('../Images/icons/user.png')} />
                        </a>
                    </div>

                    <a href="#" className='socials'>
                        <img src={require('../Images/icons/instagram.png')} />
                    </a>
                </div>

                <div className="logo-links">
                    <a href="/"><img src={require('../Images/Logo/BazarLogo.png')} className='logo-img' /></a>
                    <ul className="links">
                        <li><a href="#">الكترونيات</a></li>
                        <li><a href="#">كتب</a></li>
                        <li><a href="#">العاب</a></li>
                        <li><a href="#">ملابس</a></li>
                        <li><a href="#">اثاث</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;