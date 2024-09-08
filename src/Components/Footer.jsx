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
                        <Link to={""}><li>الرئيسية</li></Link>
                        <Link to={""}><li>تسجيل الدخول</li></Link>
                        <Link to={""}><li>تواصل معنا</li></Link>
                    </ul>

                    <ul>
                        <Link to={""}><li>الاسئلة الشائعة</li></Link>
                        <Link to={""}><li>شروط الاستخدام</li></Link>
                        <Link to={""}><li>نظام الشراء و البيع</li></Link>
                    </ul>

                    <ul>
                        <Link to={""}><li>نصائح للبيع</li></Link>
                        <Link to={""}><li>قائمة المنتجات الممنوعة</li></Link>
                    </ul>
                </div>

                <div className="rights">
                    <p>2024 © Bazar</p>
                    <p>Develop & Design By <b>CoderKoala</b></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;