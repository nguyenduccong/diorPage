import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Mousewheel,Autoplay,Pagination
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Mousewheel,Autoplay,Pagination]);


const BannerHome=()=>{
        return(
            <BoxContent>
            {/* ==============ContentBanner============== */}

            <ContentBanner>

                <Content>
                    <img src="./images/home/the_Banner.jpg" alt="" />
                    <div className="title">
                        NGƯỜI MẪU THỜI TRANG
                    </div>
                    <h3>Một bộ sưu tập các phong cách thanh lịch</h3>
                    <div className="separator"></div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at, laudantium eaque ex repudiandae sed, 
                        alias recusandae aperiam illum provident iste asperiores iusto fuga adipisci
                    </div>
                </Content>
               
            </ContentBanner>

            {/* ===============SlideBanner=============== */}

            <SlideBanner>
                <Swiper slidesPerView={'auto'} spaceBetween={30} /* mousewheel={true} */ /* loop={true} */  autoplay={{"delay": 2000,"disableOnInteraction": false}} pagination={{"clickable": true}} className="mySwiper">
                    <SwiperSlide><img src="./images/home/banner1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/home/banner9.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </SlideBanner>

        </BoxContent>
        );
}

const BoxContent = styled.section`
    width:100vw;
    height:100vh;
    background:#fff;
    display:flex;
`

const ContentBanner = styled.div`
    width:35%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`

const Content = styled.div`
    text-align:right;
    width:80%;
    


    .title{
        font-family: Montserrat,sans-serif;
        font-size: 48px;
        line-height: 1.104em;
        font-weight: 800;
        text-transform: uppercase;
        color: #000;
        margin: 25px 0;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
    }

    h3{
        font-family: "Playfair Display",serif;
        font-size: 21px;
        line-height: 1.333em;
        font-weight: 400;
        font-style: italic;
        letter-spacing: .015em;
        color: #000;
        display: block;
        margin: 10px 0 11px 0;
        padding-right:57px;
    }
    .separator {
        display: inline-block;
        width: 100px;
        height: 3px;
        background-color: #000;
        margin: 14px 0 16px 0;
    }
`

const SlideBanner = styled.div`
    width:65%;
`

export default BannerHome