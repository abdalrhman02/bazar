import { Link } from "react-router-dom";

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function SellerGuidance() {
    return (
        <>
            <Header />
            
            <div className="sellerGuidance">
                <div className="title">
                    <h2>صفحة ارشادية للبائعين</h2>
                    <p>من المهم جدا قراءة محتوى هذه الصفحة ان كنت تنوي البيع على BAZAR (4 دقائق للقراءة)</p>
                </div>

                <div className="content">
                    <section>
                        <h3>نظام البيع و الشراء:</h3>
                        <p>يقدم موقعنا طريقة سهلة جدا لعرض منتجاتك للبيع لعدد كبير من الناس كل ما عليك هو الدخول لصفحة “اضف اعلانك” و ملئ بيانات المنتج و نشره بدون دفع اي رسوم.</p>
                        <p>و عندما يريد شخص ان يشتري منك هذا المنتج سيتواصل معك عن طريق رقم الهاتف الذي ستضعه في اعلانك و تتفقان على الالتقاء لاتمام عملية البيع.</p>
                        <p>و نحن في BAZAR من حقنا طلب نسبة ربح من البيعة ان تمت عملية الشراء من خلال موقعنا و ستكون النسبة واضحة و مكتوبة لك قبل عرض منتجك حتى و سنطلب من كل بائع ان يدفع هذه النسبة من خلال تحويل بنكي لحسابنا , و نحن هنا نعمل بموجب الامانة الشخصية لديك!</p>
                        <p>بمعنى انه لن يكون هناك من يجربك على الدفع الا امانتك.</p>
                        <p>شكرا لتفهمكم و نثق بكم :)</p>
                    </section>

                    <section className="sellingAdvice">
                        <h3>نصائح للبيع:</h3>
                        <ul>
                            <li>كتابة اسم المنتج بشكل جيد ليظهر في نتائج البحث</li>
                            <li>كتابة تفاصيل كافية عن المنتج في خانة الوصف</li>
                            <li>وضع صور واضحة تظهر المنتج بشكل جيد</li>
                            <li>وضع سعر معقول بالنسبة لمنتج “مستعمل”</li>
                            <li>اختيار القسم المناسب للمنتج ليجده الناس بسهولة</li>
                            <li>عدم نشر منتجات ممنوعة في موقعنا</li>
                        </ul>
                    </section>

                    <section className="banProducts">
                        <h3>المنتجات الممنوع عرضها:</h3>
                        <ul>
                            <li>الاسلحة او الادوات الخطرة من السكاكين او الرذاذ او اي نوع سلاح حتى لو كان مرخصا</li>
                            <li>المنتجات الطبية بكل انواعها من ادوية او مكملات غذائية </li>
                            <li>المحتويات الغير اخلاقية كالمواد الاباحية او منتجات مسيئة و عنصرية</li>
                            <li>المواد الكيميائية او المواد السامة</li>
                        </ul>

                        <p>سيتم حذف اي منتج ممنوع من موقعنا و نحن غير مسؤولون عنه!</p>
                    </section>

                    <section>
                        <h2>مستعد لنشر منتجك الاول؟</h2>
                        <Link to={("/AddProduct")}>
                            <button className="btn" style={{marginTop:"15px"}}>اضف منتج</button>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SellerGuidance;