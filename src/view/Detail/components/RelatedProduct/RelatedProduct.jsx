import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import prouctApi from '../../../../api/productApi';
import ItemProduct from '../../../../components/ItemProduct/ItemProduct';
import Loadding from '../../../../components/Loadding/Loadding';


const RelatedProduct =()=>{

    const [ProductNew, setProductNew] = useState([]);

    useEffect(() => {
        const fetchProductNew= async()=>{
            const res = await prouctApi.GetProductsNew()   
            // const data = await res.data
            // console.log(data)
            setProductNew(res)
        }

        fetchProductNew()

    }, [])

    console.log(ProductNew);

    return(

        <BoxContent>
            <h3>Sản Phẩm Liên Quan</h3>

            {/* ===================ListProduct================== */}
            <ListProduct>
                {
                   ProductNew.length===0
                   ?
                    <Loadding></Loadding>
                   :
                   ProductNew.map((item)=>(
                    <ItemProduct width={"23%"} img={`../images/home/${item.urlImg}`} name={item.name} price={item.price} subtitle={item.subtitle} description={item.describe} id={item.id} sp={item}></ItemProduct>
                    ))
                }
            </ListProduct>


        </BoxContent>
    );
}

const BoxContent = styled.div`
 padding: 7.5rem 0;
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


export default RelatedProduct