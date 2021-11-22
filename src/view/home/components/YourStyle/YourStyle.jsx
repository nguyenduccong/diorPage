import React from 'react';
import styled from 'styled-components';
import TitleSection from '../../../../components/TitleSection/TitleSection';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/navigation/navigation.min.css"


import SwiperCore, {
  Autoplay,EffectCoverflow,Navigation
  } from 'swiper/core';
  
  // install Swiper modules   
  SwiperCore.use([Autoplay,EffectCoverflow,Navigation]);
  

const data={
    content:"GARMENTS FOR EVERYONE",
    title:"PICK YOUR STYLE"
}

const YourStyle = ( )=>{

    return(
        <BoxContent>
            <TitleSection data={data}></TitleSection>
            
            <Swiper effect={'coverflow'}  grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
            }}
            autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} 
            loop={true} className="mySwiper">
            <SwiperSlide><img src="./images/home/BestPick1.jpg" alt="" /></SwiperSlide>
            
            <SwiperSlide><img src="./images/home/BestPick2.jpg" alt="" /></SwiperSlide>
            
            <SwiperSlide><img src="./images/home/BestPick3.jpg" alt="" /></SwiperSlide>
            
            <SwiperSlide><img src="./images/home/BestPick4.jpg" alt="" /></SwiperSlide>
            
            <SwiperSlide><img src="./images/home/BestPick1.jpg"  alt=""/></SwiperSlide>
            
            <SwiperSlide><img src="./images/home/BestPick2.jpg" alt="" /></SwiperSlide>
                        
            <SwiperSlide><img src="./images/home/BestPick3.jpg" alt="" /></SwiperSlide>
            
            <SwiperSlide><img src="./images/home/BestPick4.jpg" alt="" /></SwiperSlide>

            </Swiper>

        </BoxContent>
    );
}

const BoxContent = styled.div`
    position: relative;
    height: 100%;

    padding-bottom:7.5rem;

  .swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 450px;
  height: 500px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

`

export default YourStyle