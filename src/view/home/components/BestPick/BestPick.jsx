import React from 'react'
import styled from 'styled-components';
import ItemProduct from '../../../../components/ItemProduct/ItemProduct';
import Loadding from '../../../../components/Loadding/Loadding';
import TitleSection from '../../../../components/TitleSection/TitleSection';

const data={
    content:"KHÁM PHÁ ",
    title:"Sản Phẩm Mới"
}

const BestPick =(props)=>{
    const {ProductNew}=props;
    console.log(ProductNew);

    return(
        <BoxContent>

            {/* ===================Title================== */}

            <TitleSection data={data}></TitleSection>

            {/* ===================ListProduct================== */}
            <ListProduct>
                {
                   ProductNew.length===0
                   ?
                    <Loadding></Loadding>
                   :
                   ProductNew.map((item)=>(
                    <ItemProduct width={"23%"} img={`./images/home/${item.urlImg}`} name={item.name} price={item.price} subtitle={item.subtitle} description={item.describe} id={item.id} sp={item}></ItemProduct>
                    ))
                }
            </ListProduct>

        </BoxContent>
    );
}

const BoxContent = styled.div`
    margin-bottom: 30px;
`

const ListProduct = styled.div`
    width: 95%;
    padding: 1.5rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`

export default BestPick