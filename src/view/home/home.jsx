import React, { useEffect, useState } from'react';
import styled from 'styled-components'
import Header from './components/Header/Header';
import BannerHome from './components/BannerHome/BannerHome';
import BestPick from './components/BestPick/BestPick';
import HotPick from './components/HotPick/HotPick';
import Introduce from './components/introduce/introduce';
import Video from './components/Video/Video';
import YourStyle from './components/YourStyle/YourStyle';
import prouctApi from '../../api/productApi';

const Home =(props)=>{

    const [ProductNew, setProductNew] = useState([]);
    const [ProductHot, setProductHot] = useState([]);

    useEffect(() => {
        const fetchProductNew= async()=>{
            const res = await prouctApi.GetProductsNew()   
            setProductNew(res)
        }

        fetchProductNew()

        const fetchProductHot= async()=>{
            const res = await prouctApi.GetProductsHot()   
            setProductHot(res)
        }

        fetchProductHot()

    }, [])

    console.log(ProductNew);
    console.log(ProductHot);

    return(
        <BoxContent>
            <Header narbar={props.changedBackground}></Header>
            {/* =============Banner-Home================ */}
            <BannerHome></BannerHome>

            {/* ==============Introduce================= */}
            <Introduce></Introduce>

            {/* ==================== Best-Pick ==================== */}
            <BestPick ProductNew={ProductNew}></BestPick>

            {/* ====================Video==================== */}
            <Video></Video>

            {/* ====================HotPick================= */}
            <HotPick ProductHot={ProductHot}></HotPick>
            
            {/* ====================HotPick================= */}
            <YourStyle></YourStyle>

            
        </BoxContent>
    );
}

const BoxContent = styled.div`

`



export default Home