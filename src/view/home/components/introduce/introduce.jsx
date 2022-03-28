import React from'react';
import styled from 'styled-components';

const Introduce=()=>{

    return(
        <BoxContent>

            <BoxTop>
                <Content>
                    <div className="boxtext">
                        <h6>BỘ SƯU TẬP 2019</h6>
                        <h3>THỜI TRANG CÓ THỂ ĐƯỢC TRUYỀN CẢM HỨNG. THỜI TRANG MỘT PHẢI CÓ VỊ TRÍ.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Voluptas quas cupiditate, deleniti accusantium ea ducimus
                            iure ratione voluptate, fugiat numquam commodi minus nisi? 
                            Adipisci omnis deleniti eum sint possimus exercitationem.</p>
                    </div>

                    <div className="boximg">
                        <img src="./images/home/imgIT1.jpg" alt="" />
                    </div>
                </Content>
                <Images><img src="https://dior-shop.surge.sh/images/home/banner3.jpg" alt="" /></Images>
            </BoxTop>
            

        </BoxContent>
    );
}

const BoxContent = styled.section`
    margin:7.5rem 0;
    width:100vw;
`

const BoxTop = styled.div`
    width:100vw;
    display:flex;
    margin-bottom: 200px;
`

const Content = styled.div`
    width:45%;
    display: flex;
    flex-direction:column;
    align-items: flex-end;
    .boxtext{
        padding:0 7.5rem;

        @media an screnn (max-width:1024px){
            padding:0 1.5rem;
        }
        
        h3{
            font-size: 30px;
            line-height: 1.17em;
        }

        p{
            display: block;
            margin: 16px 0 0;
        }
    }

    .boximg{
        width: 50%;
        margin-right: 50px;
        transform: translateY(50px);
        overflow:hidden;

    img:hover{
        transform: scale(1.2);
    }
}
`

const Images = styled.div`
    width: 55%;
    overflow:hidden;

    img:hover{
        transform: scale(1.2);
    }
`  

export default Introduce