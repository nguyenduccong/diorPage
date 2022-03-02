import React from 'react';
import styled from 'styled-components';
import NavMenu from './components/NavMenu/NavMenu';
import GoToTop from '../GoToTop'


const Header=(props)=>{



    return(
        <BoxContent>
            <NavMenu  navbar={props.narbar}></NavMenu>
            <GoToTop />
        </BoxContent>
    );
}

const BoxContent = styled.div`

`


export default Header