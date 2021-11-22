import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import prouctApi from '../../api/productApi';
import BoxListProduct from '../../components/BoxListProduct/BoxListProduct';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/Header';
import BoxControl from '../ListProduct/components/BoxControl/BoxControl';



const Products = (props)=>{
    const [data, setdata] = useState([]);
    const math = useRouteMatch();
    const id = math.params.id;
    useEffect(() => {
        const fetchProduct= async()=>{
            const res = await prouctApi.GetProductsByCataID(id)   
            // const data = await res.data
            // console.log(data)
            setdata(res)
        }

        fetchProduct()

    }, [id])
    return(
        <BoxContent>
            <Header narbar={props.changedBackground}></Header>
            <BoxListProduct data={data}></BoxListProduct>
        </BoxContent>
    );
}


const BoxContent = styled.div`
    display: flex;
    padding: 7.5rem 0;
    min-height:100vh;
`

export default Products