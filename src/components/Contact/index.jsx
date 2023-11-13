import React from "react";

const Contact = () => {

    return(
        <section id="Contact" className="contact">
            <div className="container">
                <div className="heading">
                    Contact
                </div>
                <div className="heading__description">Don't be shy, ask me anything</div>
                <div className="contact__main">
                    <div className="contact__link">
                        <img src="img/location-pin-svgrepo-com.svg" alt="" className="contact__logo" />
                        <div className="contact__info">
                            <div className="contact__title">Location</div>
                            <div className="contact__subtitle">Kyiv, Ukraine</div>
                        </div>
                    </div>
                    <div className="contact__link">
                        <img src="img/mail-svgrepo-com.svg" alt="" className="contact__logo" />
                        <div className="contact__info">
                            <div className="contact__title">Mail</div>
                            <a href="mailto:ov4lil@icloud.com" className="contact__subtitle">ov4lil@icloud.com</a>
                        </div>
                    </div>
                    <div className="contact__link">
                        <img src="img/telegram-svgrepo-com.svg" alt="" className="contact__logo" />
                        <div className="contact__info">
                            <div className="contact__title">Telegram</div>
                            <a href="https://t.me/vlad0need" className="contact__subtitle">@vlad0need</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact