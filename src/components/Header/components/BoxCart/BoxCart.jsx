import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { removeFormCart } from '../../../../view/Cart/cartSlide';
import { useDispatch, useSelector } from 'react-redux';


const BoxCart =(props)=>{
    const {enqueueSnackbar}= useSnackbar()
    const {items,removeItem} = useCart();
    const dispatch= useDispatch();
    const ListCart = useSelector(state => state.cart.cartItem);

    const remove = (id)=>{
        enqueueSnackbar('Đã Xóa Sản Phẩm',{variant:'success'});
        const action = removeFormCart(id);
        console.log(action);
        dispatch(action);
    }

    console.log(items.length);
    return(
        <BoxContent className={props.show?"active":""}>
            <OverPlayCart  onClick={props.handleClickCart}></OverPlayCart>
            <ContainerCart>
                <div className="close" onClick={props.handleClickCart}>
                    <i class="fal fa-times"></i>
                </div>

                <ContentCart>
                    {  
                        ListCart.map((item) =>(
                            
                            <ItemCart>
                                <div className="remove" >
                                    <i class="fal fa-times" onClick={()=>remove(item.product.id)}></i>
                                </div>

                                <div className="imgProduct">
                                    <img src={`../images/home/${item.product.urlImg}`} alt="" />
                                </div>
                                <div className="contentProduct">
                                    <h4>{item.product.name}</h4>
                                    <h6> {item.quantity} x ${item.product.price}</h6>
                                </div>
                            </ItemCart>
                                ))
                        
                    }
                    

                </ContentCart>

                <ButtonCart><Link to="/cart">Xem Giỏ Hàng</Link></ButtonCart>

            </ContainerCart>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    position: fixed;
    top: 0;
    bottom: 0;
    display: none;

    &.active{
        display: flex;
    }
`

const OverPlayCart = styled.div`
    width: 70%;
    background: rgb(0,0,0,.68);
    cursor: pointer;
`

const ContainerCart = styled.div`
    width: 30%;
    background: #fff;
    position: relative;
    padding:6rem 2rem 0;


    .close{
        position: absolute;
        top: 24px;
        right: 24px;
        cursor: pointer;

        i{
            font-size: 25px;
            color: #000;
        }
    }

`

const ContentCart = styled.div`
    width: 100%;
    max-height: 70vh;
    overflow-y:scroll;

    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
        width: 8px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-image: linear-gradient(to right, #b6b4c2 , #aac9ce);
    }

`

const ItemCart = styled.div`
    width: 100%;
    padding: 1rem 0;
    background: #fff;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    align-items:center;
    position: relative;

    .imgProduct{
        width: 150px;

        img{
            width: 100%;
        }
    }

    .contentProduct{
        padding-left: 20px;
    }

    .remove{
        position: absolute;
        top: 24px;
        right: 24px;
        cursor: pointer;
        i{
            color: #000;
            font-size:16px;
        }
    }
`

const ButtonCart = styled.div`
    margin-top: 20px;
    a{
        padding: 1rem 2rem ;
        background: #000;
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        transition: all .5s ;

        &:hover{
            background: #fff;
            border:1px solid #000;
            color:#000;

        }
    }
`

export default BoxCart