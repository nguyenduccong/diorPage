import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import cataApi from '../../api/cataApi'
import prouctApi from '../../api/productApi'
import BoxListProduct from '../../components/BoxListProduct/BoxListProduct'
import Header from '../../components/Header/Header'
import BoxControl from './components/BoxControl/BoxControl'

const ListProduct = (props)=>{
    const [data, setdata] = useState([]);
    const [listCata, setlistCata] = useState([]);

    useEffect(() => {
        const fetchProduct= async()=>{
            const res = await prouctApi.GetProducts()   
            // const data = await res.data
            // console.log(data)
            setdata(res)
        }

        fetchProduct()

        const fetchCata= async()=>{
            const res = await cataApi.GetCata()   
            // const data = await res.data
            // console.log(data)
            setlistCata(res)
        }

        fetchCata()

    }, [])
    
    return(
        <BoxContent>
            <Header narbar={props.changedBackground}></Header>
            <BoxControl data={listCata}></BoxControl>
            <BoxListProduct data={data}></BoxListProduct>

        </BoxContent>
    )
}


const BoxContent = styled.div`
    display: flex;
    padding: 7.5rem 0;
    position: relative;
`

export default ListProduct