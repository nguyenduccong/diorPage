import React from 'react';
import styled from 'styled-components';
import NavMenu from './components/NavMenu/NavMenu';


const Header=(props)=>{



    return(
        <BoxContent>
            <NavMenu  navbar={props.narbar}></NavMenu>
        </BoxContent>
    );
}

const BoxContent = styled.div`

`


export default Header