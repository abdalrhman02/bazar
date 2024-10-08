import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="logo">
                    <a href="#" target="_blank">
                        <img src={require("../Images/icons/instagram-white.png")} className="insta" />
                    </a>
                    
                    <Link to={"/"}>
                        <img src={require("../Images/Logo/BazarLogoWhite.png")} className="logo-img" />
                    </Link>
                </div>


                <div className="links">
                    <ul>
                        <Link to={"/"}><li>الرئيسية</li></Link>
                        <Link to={"/Login"}><li>تسجيل الدخول</li></Link>
                        <Link to={"/Contact"}><li>تواصل معنا</li></Link>
                        <Link to={""}><li>الاسئلة الشائعة</li></Link>
                        <Link to={"/SellerGuidance"}><li>مهم للبائعين</li></Link>
                    </ul>
                </div>

                <div className="rights">
                    <p>2024 © Bazar</p>
                    <p>Develop & Design By <a href="https://www.coderkoala.xyz/"><b>CoderKoala</b></a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;