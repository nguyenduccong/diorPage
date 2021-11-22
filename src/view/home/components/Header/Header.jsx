import React, { useState } from 'react';
import styled from 'styled-components'
import NavMenu from '../../../../components/Header/components/NavMenu/NavMenu';
import NavMobile from '../../../../components/Header/components/NavMobile/NavMobile';


const Header=(props)=>{
    console.log(props.narbar);

    const [navMB, setnavMB] = useState(false)
    
    const handleClickNavMB=()=>{
        setnavMB(!navMB)
    }

    return(
        <BoxContent>
            <BtnBar onClick={handleClickNavMB} className={props.narbar?"":"active"}>
                <span></span>
                <span></span>
                <span></span>
            </BtnBar>
            <NavMobile show={navMB} handleClickNavMB={handleClickNavMB}></NavMobile>
            <NavMenu home navbar={props.narbar}></NavMenu>
        </BoxContent>
    );
}

const BoxContent = styled.div`

`

const BtnBar = styled.div`
    position:fixed;
    top:24px;
    left:24px;
    font-size: 25px;
    color: #000;
    width: 28px;
    cursor: pointer;
    margin-right:24px;
    
    &.active{
        display: block;
    }

    span{
        display: block;
        width: 100%;
        height: 2px;
        background-color: #000;
        margin:6px 0;
        transition: all .5s;
        position:relative;

        &::before{
            position:absolute;

        }
    }

    &:hover span:nth-child(2n+1){
        width: 50%;
    }
        
`


export default Header