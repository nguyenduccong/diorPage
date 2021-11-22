import React from 'react';
import styled from 'styled-components'


const NavMobile = (props)=>{
    console.log(props.show);
    return(
        <BoxContent className={props.show?"active":""}>
            <CloseTag onClick={props.handleClickNavMB}><i class="fas fa-times"></i></CloseTag>

        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to right, #b6b4c2 , #aac9ce);
    display: none;
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: 99999;

    &.active{
        display: block;
    }
`

const CloseTag = styled.div`
    position: absolute;
    top: 24px;
    right: 44px;
    i{
        font-size: 40px;
        color:#fff;
        cursor: pointer;
    }
`

export default NavMobile