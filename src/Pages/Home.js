import { Link } from "react-router-dom";

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';


function Home() {

    return (
        <div className="home">
            <Header />

            <div className='intro'>
                <div className='text'>
                    <h1>موقع <b className="bo">بيع</b> و <b className="bg">شراء</b> الاغراض المستعملة</h1>
                    <p>محتاج شغلة بس ما بدك تصرف؟  موقعنا بفيدك! اشتري اغراض مستعملة بحالة جيدة و باسعار ممتازة</p>
                    <Link to={"Store"}>
                        <button className="btn">المزيد</button>
                    </Link>
                </div>

                <div className='image'>
                    <img src={require('../Images/home/intro-img.png')} />
                </div>
            </div>

            <div className="some-sections">
                <div className="sec">
                    <div className="image">
                        <img src={require('../Images/home/gaming.png')} />
                    </div>
                    <h3>الكترونيات</h3>
                </div>

                <div className="sec">
                    <div className="image">
                        <img src={require('../Images/home/sports.png')} />
                    </div>
                    <h3>رياضة</h3>
                </div>

                <div className="sec">
                    <div className="image">
                        <img src={require('../Images/home/livingroom.png')} />
                    </div>
                    <h3>اثاث</h3>
                </div>

                <div className="sec">
                    <div className="image">
                        <img src={require('../Images/home/microwave.png')} />
                    </div>
                    <h3>مطبخ</h3>
                </div>

                <div className="sec">
                    <div className="image">
                        <img src={require('../Images/home/t-shirt.png')} />
                    </div>
                    <h3>ملابس</h3>
                </div>

                <div className="sec">
                    <div className="image">
                        <img src={require('../Images/home/book.png')} />
                    </div>
                    <h3>كتب</h3>
                </div>
            </div>

            {/* <div className="last-ads">
                <div className="title">
                    <h2>اخر ما تم عرضه</h2>
                </div>

                <div className="container">
                    
                    <div className="ad">
                        <img src={require('../Images/xbox360.jpeg')} />
                        <h4 className="name">اكسبوكس 360 + لعبتين</h4>
                        <h5 className="price">320₪</h5>
                        <h6 className="date">8/12/2024</h6>
                    </div>

                    <div className="ad">
                        <img src={require('../Images/2.jpg')} />
                        <h4 className="name">لابتوت - شبه جديد</h4>
                        <h5 className="price">800₪</h5>
                        <h6 className="date">8/15/2024</h6>
                    </div>

                    <div className="ad">
                        <img src={require('../Images/4.jpg')} />
                        <h4 className="name">دمبلز للاطفال</h4>
                        <h5 className="price">60₪</h5>
                        <h6 className="date">8/02/2024</h6>
                    </div>

                    <div className="ad">
                        <img src={require('../Images//books.png')} />
                        <h4 className="name">مجموعة كتب</h4>
                        <h5 className="price">240₪</h5>
                        <h6 className="date">8/02/2024</h6>
                    </div>

                    <div className="ad">
                        <img src={require('../Images/xbox360.jpeg')} />
                        <h4 className="name">اكسبوكس 360 + لعبتين</h4>
                        <h5 className="price">320₪</h5>
                        <h6 className="date">8/12/2024</h6>
                    </div>

                    <div className="ad">
                        <img src={require('../Images/2.jpg')} />
                        <h4 className="name">لابتوت - شبه جديد</h4>
                        <h5 className="price">800₪</h5>
                        <h6 className="date">8/15/2024</h6>
                    </div>

                    <div className="ad">
                        <img src={require('../Images/4.jpg')} />
                        <h4 className="name">دمبلز للاطفال</h4>
                        <h5 className="price">60₪</h5>
                        <h6 className="date">8/02/2024</h6>
                    </div>

                    <div className="ad">
                        <img src={require('../Images//books.png')} />
                        <h4 className="name">مجموعة كتب</h4>
                        <h5 className="price">240₪</h5>
                        <h6 className="date">8/02/2024</h6>
                    </div>
                </div>
            </div> */}

            <div className="about">
                <div className="container">
                    <div className="image">
                        <img src={require('../Images/home/about-img.jpg')} />
                    </div>

                    <div className="text">
                        <div className="title">
                            <h2>ما هو <b>BAZAR</b></h2>
                        </div>
                        
                        <p>بازار هو مشروع يهدف لبناء مجتمع تجاري بسيط بين الناس لبيع و شراء الاغراض المستعملة بمختلف الاصناف من الاجهزة الالكترونية حتى الكتب و الملابس التي في حالة جيدة و تصلح لاعادة البيع</p>
                        <p>نعمل على ابقاء عمليات البيع و الشراء امنه و مرضية للجميع لتجربة مفيده و امنه!</p>
                        <p>هل لديك استفسار او اقتراح؟ لا تتردد و <b>تواصل معنا</b></p>
                    </div>
                </div>
            </div>

            <div className="seller">
                <div className="text">
                    <h2>كن بائعا على <img src={require('../Images/Logo/BazarLogo.png')} /></h2>
                    <p>تريد كسب بعض المال؟ قم ببيع اغراضك التي لا تريدها و ستجد من يبحث عنها في موقعنا!</p>
                    <p>يتم البيع بعمولة لا تتعدى ال1.5%</p>
                    <button className="btn">كن بائعا</button>
                </div>

                <div className="features">
                    <div className="fea">
                        <img src={require('../Images/icons/money.png')} />
                        <h3>احصل على مال اضافي</h3>
                    </div>

                    <div className="fea">
                        <img src={require('../Images/icons/handshake.png')} />
                        <h3>ساعد غيرك لايجاد ما يحتاجه</h3>
                    </div>

                    <div className="fea">
                        <img src={require('../Images/icons/box.png')} />
                        <h3>تخلص من الاغراض الزائدة</h3>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;