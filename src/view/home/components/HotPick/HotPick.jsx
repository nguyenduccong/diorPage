import React from 'react';
import styled from 'styled-components';
import ItemProduct from '../../../../components/ItemProduct/ItemProduct';
import Loadding from '../../../../components/Loadding/Loadding';
import TitleSection from '../../../../components/TitleSection/TitleSection';

const data={
    content:"Sản phẩm hôm nay và nhiều hơn",
    title:"sản Phẩm Bán Chạy"
}

const HotPick =(props)=>{
    const {ProductHot}=props;
    return(
        <BoxContent>
            <TitleSection data={data}></TitleSection>

            <ListProduct>
                {
                    ProductHot.length===0
                    ?
                        <Loadding></Loadding>
                    :
                    ProductHot.map((item)=>(
                        <ItemProduct width={"30%"} img={`./images/home/${item.urlImg}`} name={item.name} price={item.price} subtitle={item.subtitle} description={item.describe} id={item.id} sp={item}></ItemProduct>

                    ))
                }
                {/* <ItemProduct width={"30%"} img={"./images/home/BestPick2.jpg"} ></ItemProduct>
                <ItemProduct width={"30%"} img={"./images/home/BestPick3.jpg"} ></ItemProduct>
                <ItemProduct width={"30%"} img={"./images/home/BestPick1.jpg"} ></ItemProduct>
                <ItemProduct width={"30%"} img={"./images/home/BestPick2.jpg"} ></ItemProduct>
                <ItemProduct width={"30%"} img={"./images/home/BestPick3.jpg"} ></ItemProduct> */}

            </ListProduct>


            <ListProduct>
            </ListProduct>

            
        </BoxContent>
    );
}

const BoxContent = styled.div`

`

const ListProduct = styled.div`
    width: 95%;
    padding: 1.5rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

`

export default HotPick