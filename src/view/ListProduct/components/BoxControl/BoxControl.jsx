import React from 'react'
import styled from 'styled-components'

const BoxControl = (props)=>{

    return(
        <BoxContent>
            <ul>
                {props.data.map((item)=><li key={item.id}>{item.name}</li>)}
            </ul>
        </BoxContent>
    )
}


const BoxContent = styled.div`
    width: 20%;

    ul{
        position: -webkit-sticky;
        position: fixed;
        top: 130px;
        list-style: none;
        li{
            line-height: 30px;
            cursor: pointer;
        }
    }
`

export default BoxControl