import React from 'react';
import styled from 'styled-components';


const TitleSection =(props)=>{
    const{data}=props
    return(

        <BoxContent>
            <h6>{data.content}</h6>
            <h3>{data.title}</h3>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100%;
    text-align: center;
    h6{
        font-family: Catamaran,sans-serif;
        font-size: 12px;
        line-height: 1.33em;
        font-weight: 600;
        letter-spacing: .1em;
        color: #000;
        text-transform: uppercase;
        margin: 25px 0;
        word-wrap: break-word;
    }

    h3{
        font-size: 30px;
        line-height: 1.17em;
        font-family: "EB Garamond",serif;
        font-weight: 500;
        color: #000;
        text-transform: uppercase;
        word-wrap: break-word;
    }
` 

export default TitleSection