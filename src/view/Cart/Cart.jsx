import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import { useCart } from 'react-use-cart';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { cartItemTotalSelector } from './selector';
import { removeFormCart } from './cartSlide';
import Footer from '../../components/footer/footer';

const Cart =(props)=>{
    const {enqueueSnackbar}= useSnackbar()
    // const {items,removeItem,cartTotal} = useCart();

    const dispatch = useDispatch();
    
    const totalCart = useSelector(cartItemTotalSelector);
    const ListCart = useSelector(state => state.cart);
    console.log(ListCart.cartItem);
    // console.log(items.length);

    const remove = (id)=>{
        enqueueSnackbar('Đã Xóa Sản Phẩm',{variant:'success'});
        const action = removeFormCart(id);
        console.log(action);
        dispatch(action)

    }
    return(
        <BoxContent>                
            <Header narbar={props.changedBackground}></Header>
                <Title>
                    <div className="container">
                        <h3>Giỏ Hàng</h3>
                    </div> 
                </Title>

                <div className="container">
                    <BoxCart>
                        <thead>
                           <tr>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Thành Tiền</th>
                                <th></th>
                           </tr>
                        </thead>
                        <tbody>
                           {ListCart.cartItem.length === 0 ? 
                              <tr>
                              <td colspan="4">
                                  Chưa Có Sản Phẩm Trong Giỏ Hàng Vui Lòng Quay Lại Trang Chủ Và Mua Hàng <br />
                                  <Link to="/">Trang Chủ</Link>
                              </td>
                            </tr>
                           :
                           ListCart.cartItem.map((item) =>(
                            <tr>
                            <td>
                                <div className="boxPD">
                                   <img src={`../images/home/${item.product.urlImg}`} alt="" />
                                    <h5 className="nameSp">{item.product.name}</h5>
                                </div>
                            </td>

                            <td>
                                <h5>{item.product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h5>
                            </td>

                            <td>
                                <h5>{item.quantity}</h5>
                            </td>

                            <td>
                                <h5>{(item.product.price*item.quantity).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h5>
                            </td>

                            <td>
                                <h5 onClick={()=>remove(item.id)}>
                                    <i class="fal fa-times"></i>
                                </h5>
                            </td>
                        </tr>
                           ))
                           }
                           {ListCart.cartItem.length === 0 ?
                           ""
                           :
                           <tr>
                              <td colspan="3">
                                  Tổng Tiền
                              </td>
                              <td>
                                 {totalCart.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                              </td>
                            </tr>

                           }



                        </tbody>
                    </BoxCart>


                </div>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 100px;
    .container{
        width: 1320px;
        margin: 0 auto;
    }

`

const Title = styled.div`
    padding: .5rem 0;
    background: #f1efef;
`

const BoxCart = styled.table`
    width: 100%;
    margin: 7.5rem 0;
    th{
        text-transform: uppercase;
        color:#000;
        text-align:center;
        padding: 2rem 0;

    }

    td{
        /* width: 400px; */
        text-align:center;
        padding:1rem;
        border: 1px solid #e1e1e1;
        color: #000;

        a{
            margin-top: 15px;
            padding:.5rem 2rem;
            background: black;
            display: inline-block;
            cursor: pointer;
            color:#fff;
            text-decoration:none;
        }

        h5{
            &.nameSp{
                text-align:left;

            }
            i{
                cursor: pointer;
            }
        }
        .boxPD{
            max-width:400px;
            display: flex;
            align-items:center;
            
            img{
                width: 100px;
            }

            h5{
                padding-left:20px;


            }
        }
    }
`



export default Cart