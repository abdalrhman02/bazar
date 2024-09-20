import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fst, storage, auth } from '../firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    prDescription: '',
    prName: '',
    prPrice: '',
    prSection: '',
    prStatus: '',
    sellerNumber: ''
  });
  const [images, setImages] = useState([null, null, null, null]);
  const [userData, setUserData] = useState(null); // To store seller's name and town

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the current authenticated user
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userDocRef = doc(fst, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error('No such user document!');
          }
        } else {
          console.error('No authenticated user found!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = file;
      setImages(updatedImages);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.prName || !formData.prPrice || !formData.prSection || !formData.prStatus || !formData.prDescription) {
      alert('Please fill all required fields.');
      return;
    }

    if (!images[0]) {
      alert('Please upload at least one image.');
      return;
    }

    try {
      const productId = uuidv4();

      const imageUrls = await Promise.all(
        images.map(async (image, index) => {
          if (image) {
            try {
              const uniqueFileName = `${uuidv4()}_${image.name}`;
              const storageRef = ref(storage, `product-images/${productId}/${uniqueFileName}`);
              await uploadBytes(storageRef, image);
              return await getDownloadURL(storageRef);
            } catch (uploadError) {
              console.error(`Error uploading image ${index + 1}:`, uploadError);
              return '';
            }
          }
          return '';
        })
      );

      // Make sure userData is available
      if (!userData) {
        alert('User data is not loaded yet.');
        return;
      }

      // Add the product to Firestore with seller details
      await addDoc(collection(fst, 'products'), {
        prDescription: formData.prDescription,
        prImg1: imageUrls[0] || '',
        prImg2: imageUrls[1] || '',
        prImg3: imageUrls[2] || '',
        prImg4: imageUrls[3] || '',
        prName: formData.prName,
        prPrice: formData.prPrice,
        prSection: formData.prSection,
        prStatus: formData.prStatus,
        sellerName: userData.username || 'Unknown Seller',
        sellerTown: userData.town || 'Unknown Town',
        sellerNumber: formData.sellerNumber
      });

      alert('Product added successfully!');
      setFormData({
        prDescription: '',
        prName: '',
        prPrice: '',
        prSection: '',
        prStatus: '',
        sellerNumber: ''
      });
      setImages([null, null, null, null]);
    } catch (error) {
      console.error('Error adding product:', error.message);
      alert('Error adding product: ' + error.message);
    }
  };

  return (
    <>
      <Header />

      <div className="addProduct">
        <div className="title">
          <h2>اضف اعلانك</h2>
          <p>اذا كنت اول مرة تحاول البيع في موقعنا نطلب منك تصفح صفحة <b>المنتجات الممنوعة</b> و صفحة <b>نظام البيع و الشراء</b></p>
        </div>

        <div className="forms">
          <div className="productDetailsForm">

            <div>
              <div className="inp">
                <label>اسم المنتج:</label>
                <input type="text" name="prName" value={formData.prName} onChange={handleChange} required />
              </div>

              <div className="inp">
                <label>السعر:</label>
                <input type="number" name="prPrice" value={formData.prPrice} onChange={handleChange} required />
              </div>
            </div>

            <div className="inp">
              <label>الوصف:</label>
              <textarea name="prDescription" value={formData.prDescription} onChange={handleChange} required />
            </div>

            <div>
              <div className="inp">
                <label>القسم:</label>
                  <select name="prSection" value={formData.prSection} onChange={handleChange} required>
                    <option value="">اختر القسم المناسب</option>
                    <option value="الكترونيات">الكترونيات</option>
                    <option value="ملابس">ملابس</option>
                    <option value="رياضة">ادوات رياضية</option>
                    <option value="اثاث">اثاث</option>
                    <option value="مطبخ">مطبخ</option>
                    <option value="العاب">العاب و اطفال</option>
                    <option value="كتب">كتب</option>
                    <option value="حيوانات">حيوانات</option>
                    <option value="سيارات">مستلزمات السيارات</option>
                    <option value="دراجات">دراجات</option>
                    <option value="معدات">معدات (للحدائق, للعمل...)</option>
                  </select>
              </div>

              <div className="inp">
                <label>حالة المنتج:</label>
                <select name="prStatus" value={formData.prStatus} onChange={handleChange} required >
                  <option value="">اختر الحالة</option>
                  <option value="جديد - بحالة جيدة">جديد و بحالة جيدة</option>
                  <option value="مستعمل - بحالة جيدة">مستعمل - بحالة جيدة</option>
                  <option value="مستعمل - به مشكلة">مستعمل - به مشكلة</option>
                  <option value="لا يعمل">لا يعمل</option>
                </select>
              </div>
            </div>

            <div className="inp">
              <label>رقم هاتفك:</label>
              <input type="number" name="sellerNumber" value={formData.sellerNumber} onChange={handleChange} required 
                placeholder='رقم الهاتف مهم ليتواصل معك المشترون'
              />
            </div>
          </div>

          <div className="productImagesForm">
            <div className='title'>
              <h3>اضف صور المنتج</h3>
              <p>من المهم ان تكون الصور واضحة - الصورة الاولى هي التي ستكون في الوجاهة</p>
            </div>

            <div className='images'>
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="image-upload"
                  onClick={() => document.getElementById(`fileInput${index}`).click()}
                  style={{
                    backgroundColor: images[index - 1] ? 'transparent' : '#e7e7e7',
                    backgroundImage: images[index - 1]
                      ? `url(${URL.createObjectURL(images[index - 1])})`
                      : 'none',
                  }}
                >
                  {images[index - 1] ? null : <p>اضف الصورة رقم ({index})</p>}
                  <input id={`fileInput${index}`} type="file" accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageChange(e, index - 1)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className='btn' onClick={handleSubmit}>Add Product</button>
      </div>

      <Footer />
    </>
  );
};

export default AddProductPage;
