import React from 'react'

export default function Homepage() {
    return (
    <>
        <div class="header-section">
            <div class="bordertop"></div>
            <div class="header-menu">
                <div class="logo">
                    <img src="image/logo.png" alt="" />
                </div>
                <div class="menu">
                    <img src="image/profil.png" alt="login" />
                    <img src="image/plus.png" alt="plus" />
                    <img src="image/pin.png" alt="pin" />
                    <img src="image/message.png" alt="message" />
                    <img src="image/book.png" alt="book" />
                    <img src="image/email.png" alt="" />
                </div>
            </div>
            <div class="header-banner">
                <div class="header-banner-content">
                    <div class="header-banner-text">
                        <h3>Hello world,</h3>
                        <h1>We Are Prahwa Io Technology Company</h1>
                        <p>Kami membuat berbagai macam inovasi teknologi di berbagai bidang yang sesuai kebutuhan anda. </p>
                        <div class="header-banner-text-footer">
                            <button>Lihat Profile</button>
                            <div class="banner-social-media">
                                <span class="iconify" data-icon="ant-design:instagram-filled"></span>
                                <span class="iconify" data-icon="carbon:logo-facebook"></span>
                                <span class="iconify" data-icon="ant-design:linkedin-filled"></span>
                                <span class="iconify" data-icon="ri:whatsapp-fill"></span>
                                <span class="iconify" data-icon="akar-icons:youtube-fill"></span>   
                            </div>
                        </div>
                    </div>
                    <div class="header-banner-image">
                        <div class="image-banner">
                            <img src="image/image-banner.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-setting">
                <span class="iconify" data-icon="ant-design:setting-filled"></span>
            </div>
        </div>
    </>
    )
}

