import React, { useRef, useState } from "react";
import Image from 'next/image'
import { AiFillSetting, AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { RiWhatsappFill, RiYoutubeFill, RiUserHeartLine } from "react-icons/ri";
import { TbSearch  } from "react-icons/tb"
import { MdWorkOutline } from "react-icons/md"
import { FiClock } from "react-icons/fi"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, A11y } from 'swiper';

export default function Home() {
  return (
    <>
    <div className='container-prahwa'>
      <div class="header-section">
            <div class="bordertop"></div>
            <div class="header-menu">
                <div class="logo">
                    <div className='image-logo'>
                      <Image src="/image/logo.png" layout='fill' objectFit='fit' alt='Logo Prahwa.io' />
                    </div>
                </div>
                <div class="menu">
                    <div className='menu-icon'>
                      <Image src='/image/profil.png' layout='fill' objectFit='fit' />
                    </div>
                    <div className='menu-icon'>
                      <Image src='/image/plus.png' layout='fill' objectFit='fit' />
                    </div>
                    <div className='menu-icon'>
                      <Image src='/image/pin.png' layout='fill' objectFit='fit' />
                    </div>
                    <div className='menu-icon'>
                      <Image src='/image/message.png' layout='fill' objectFit='fit' />
                    </div>
                    <div className='menu-icon'>
                      <Image src='/image/book.png' layout='fill' objectFit='fit' />
                    </div>
                    <div className='menu-icon'>
                      <Image src='/image/email.png' layout='fill' objectFit='fit' />
                    </div>
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
                                <AiFillInstagram className='iconify' />
                                <AiFillFacebook className='iconify' />
                                <AiFillLinkedin className='iconify' />
                                <RiWhatsappFill className='iconify' />
                                <RiYoutubeFill className='iconify' />
                            </div>
                        </div>
                    </div>
                    <div class="header-banner-image">
                        <div class="image-banner">
                            <Image src="/image/image-banner.jpg" layout='fill' objectFit='cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-setting">
                <AiFillSetting className='iconify'/>
            </div>
      </div>

      <div className='three-icon'>
          <div className='three-icon-box'>
            <div className='three-icon-box-image'>
              <Image src="/image/branding-icon.png" layout='fill' objectFit='fit' />
            </div>
            <span>Manage Your Brand</span>
            <h1>Branding</h1>
          </div>
          <div className='three-icon-box'>
            <div className='three-icon-box-image'>
              <div className='icon-application'>
                <Image src="/image/application-icon.png" layout='fill' objectFit='fit' />
              </div>
            </div>
            <span>Develope Your Style</span>
            <h1>Application</h1>
          </div>
          <div className='three-icon-box'>
            <div className='three-icon-box-image'>
              <div className='icon-application'>
                <Image src="/image/website-icon.png" layout='fill' objectFit='fit' />
              </div>
            </div>
            <span>Best Website Development</span>
            <h1>Website</h1>
          </div>
          <div className='border-three'></div>
      </div>

      <div className='our-resources-section'>
        <div className='our-resources-heading'>
          <div className='heading-name'>
              <Image src="/image/our-resources.png" layout='fill' className="navbar-home-icon"/>
          </div>
        </div>
        <div className='our-resources-content'>
          <ul>
          <div className='border-resources'></div>
            <li>
              <div className='circle-resources'></div>
              <div className='resources-list-content'>
                <h3>Website (Frontend)</h3>
                <span>Next.js - Vue.js - CSS - HTML - Figma</span>
              </div>
            </li>
            <li>
              <div className='circle-resources'></div>
              <div className='resources-list-content'>
                <h3>Website (Backend)</h3>
                <span>Framework - PHP - API - GITHUB - AWS</span>
              </div>
            </li>
            <li>
              <div className='circle-resources'></div>
              <div className='resources-list-content'>
                <h3>Mobile Apps</h3>
                <span>React Native - Flutter - Webview</span>
              </div>
            </li>
            <li>
              <div className='circle-resources'></div>
              <div className='resources-list-content'>
                <h3>UI/UX DESIGN</h3>
                <span>UI/UX Presentation</span>
              </div>
            </li>
            <li>
              <div className='circle-resources'></div>
              <div className='resources-list-content'>
                <h3>Creative Content</h3>
                <span>Photography - UI/UX - Design Grafis - Consulting</span>
              </div>
            </li>
            <li>
              <div className='circle-resources'></div>
              <div className='resources-list-content'>
                <h3>SOCIAL MEDIA MANAGEMENT</h3>
                <span>Facebook - Instagram - Landing Pages - Tiktok</span>
              </div>
            </li>
          </ul>
          <div className='about-us-content'>
            <div className='about-heading-image'>
                <Image src="/image/about.png" layout='fill'  objectFit='cover'/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna libero sed mi, imperdiet enim fringilla. Augue morbi lectus id arcu nunc, consectetur velit, lorem. Augue orci, tellus, nec tempor magnis sapien, urna. Maecenas felis at feugiat eu. Amet, vel sit egestas tempus lacus malesuada erat. Vitae, velit sit mauris nunc dui mi justo. Elit nulla nulla mi, urna diam vestibulum et vitae. In dolor ut vel, nunc.</p>
            <TbSearch className='search-about' />
          </div>
        </div>
      </div>

      <div className='history-client'>
        <div className='description-history'>
          <div className='history-box'>
            <div className='history-heading'>
                <MdWorkOutline className='history-icon' />
                <span>123</span>
            </div>
            <p>Complete Project</p>
          </div>
          <div className='history-box'>
            <div className='history-heading'>
                <FiClock className='history-icon' />
                <span>3 Year</span>
            </div>
            <p>Company Was Founded</p>
          </div>
          <div className='history-box'>
            <div className='history-heading'>
                <RiUserHeartLine className='history-icon' />
                <span>123</span>
            </div>
            <p>Happy Client</p>
          </div>
        </div>
      </div>

      <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={5}
      loop={true}
      pagination={{
          clickable: true,
        }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="box-slide">
          <div className="box-slide-icon">
            <Image src="/image/design.png" layout="fill"/>
          </div>
          <span>UI Interface Design</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box-slide">
          <div className="box-slide-icon">
            <Image src="/image/website-interactive.png" layout="fill"/>
          </div>
          <span>Website Interactive</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box-slide">
          <div className="box-slide-icon">
            <Image src="/image/apps-development.png" layout="fill"/>
          </div>
          <span>Apps Developement</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="box-slide">
          <div className="box-slide-icon">
            <Image src="/image/ads.png" layout="fill"/>
          </div>
          <span>Optimation Adds</span>
        </div>
      </SwiperSlide>
      <div className="slide-heading">
        <div className="slide-heading-content">
          <h4>Service</h4>
          <div className="circle-divider"></div>
          <p>Working with mutual respect and trust</p>
        </div> 
      </div>
    </Swiper>
  </div>
    </>
  )
}
