// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductAdd from '../Components/ProductAdd';

function Store() {
    return (
        <>
            <Header />

            <div className="store">            
                <div className="container">
                    <div className='options'>
                        <div className='types'>
                            <div>
                                <img src={require('../Images/store/android.png')} />
                            </div>
                            <div>
                                <img src={require('../Images/store/apple.png')} />
                            </div>
                            <div>
                                <img src={require('../Images/store/playstation.png')} />
                            </div>
                            <div>
                                <img src={require('../Images/store/xbox.png')} />
                            </div>
                            <div>
                                <img src={require('../Images/store/gaming.png')} />
                            </div>
                            <div>
                                <img src={require('../Images/store/laptop.png')} />
                            </div>
                            <div>
                                <img src={require('../Images/store/camera.png')} />
                            </div>
                            <div>
                                <img src={require('../Images/store/smartwatch.png')} />
                            </div>
                        </div>

                        <div className='towns'>
                            <h3>البحث حسب المنطقة</h3>
                            <select>
                                <option>الشمال</option>
                                <option>حيفا</option>
                                <option>الوسط</option>
                                <option>القدس</option>
                                <option>الجنوب</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='sections-products'>
                        <div className='search-add'>
                            <div className='search'>
                                <button><img src={require('../Images/icons/search-white.png')} /></button>
                                <input type="text" placeholder='عن ماذا تبحث؟' />
                            </div>

                            <div className='add btn'>
                                <p>اضف منتجك</p>
                                <img src={require('../Images/icons/plus.png')} />
                            </div>
                        </div>

                        <div className='sectionsList'>
                            <ul>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>000</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>كتب</h3>
                                </li>
                                <li>
                                    <img src={require('../Images/Store-page/book.png')} />
                                    <h3>000</h3>
                                </li>
                            </ul>
                        </div>

                        <div className='products'>
                            <ProductAdd />
                            <ProductAdd />
                            <ProductAdd />
                            <ProductAdd />
                            <ProductAdd />
                            <ProductAdd />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Store;