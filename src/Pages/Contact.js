import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vqj7zqn', 'template_l28dja2', form.current,
            {publicKey: 't9wtId6r80QRhGXae',}
        )
        .then(
            () => {
                console.log('Message Sent!');
            },
            (error) => {
                console.log('Message Failed...', error.text);
            },
        );
    };

    return (
        <>
            <Header />

            <div className="contact">
                <div className="contactIntro">
                    <div className="title">
                        <h2>تواصل معنا</h2> 
                        <p>نرغب في الاستماع الى اسئلتكم/اقتراحاتكم و مساعدتكم</p>
                    </div>
                </div>

                <div className="contactDetails">
                    <div className="title">
                        <h2>ارسل رسالتك</h2>
                        <p>نرجوا ان يكون محتوى الرسالة واضحا لكي نقوم بالرد عليك باسرع وقت ممكن</p>
                    </div>

                    <div className='container'>
                        <div className="messageForm">

                            <form onSubmit={sendEmail} ref={form}>
                                <div className="inp">
                                    <label>الاسم:</label>
                                    <input type="text" name="user_name" />
                                </div>

                                <div className="inp">
                                    <label>رقم الهاتف:</label>
                                    <input type="text" name="user_number" />
                                </div>

                                <div className="inp">
                                    <label>الايميل:</label>
                                    <input type="text" name="user_email" />
                                </div>

                                <div className="inp">
                                    <label>رسالتك:</label>
                                    <textarea type="text" name="user_msg"></textarea>
                                </div>

                                <input type='submit' value='ارسال' className='btn' />
                            </form>
                        </div>

                        <div className='socials'>
                            <div>
                                <img src={require('../Images/icons/email.png')} />
                                <p>bazarcontact11@gmail.com</p>
                            </div>
                            
                            <div>
                                <img src={require('../Images/icons/instagram-black.png')} />
                                <p>@bazaracc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact;