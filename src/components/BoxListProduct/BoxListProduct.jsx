import React from 'react';
import styled from 'styled-components'
import ItemProduct from '../ItemProduct/ItemProduct';
import Loadding from '../Loadding/Loadding';

const BoxListProduct = (props)=>{
    console.log(props.data);
    return(
        <BoxContent>
             {
                   props.data.length===0
                   ?
                    <Loadding></Loadding>
                   :
                   props.data.map((item)=>(
                    <ItemProduct width={"23%"} img={`../images/home/${item.urlImg}`} name={item.name} price={item.price} subtitle={item.subtitle} description={item.describe} id={item.id} sp={item}></ItemProduct>
                    ))
                }
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`

export default BoxListProduct