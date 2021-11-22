import { CircularProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components'

const Loadding = ()=>{

    return(
        <BoxContent>
            <CircularProgress />
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100%;
    text-align: center;
`

export default Loadding