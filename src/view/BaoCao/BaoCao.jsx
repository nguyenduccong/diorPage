import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import prouctApi from '../../api/productApi';
import BoxListProduct from '../../components/BoxListProduct/BoxListProduct';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/Header';
import BoxControl from '../ListProduct/components/BoxControl/BoxControl';



const BaoCao = (props)=>{
    
    return(
        <BoxContent>
            <Header narbar={props.changedBackground}></Header>
            <div className="BoxBaoCao">
                <div className="title">
                    Báo Cáo
                </div>
                <div className="content">
                    <ol>
                        <li>đỗ dữ liệu vào trang request api</li>
                        <li>Sử dụng router để chuyển layout: trang chủ , trang chi tiết, trang đăng nhập trang cart , trang danh sách sản phẩm </li>
                        <li>Sử dụng router để chuyển layout: trang chủ , trang chi tiết, trang đăng nhập trang cart , trang danh sách sản phẩm </li>
                        <li>hiển thị sản phẩm theo loại</li>
                        <li>giỏ hàng : Thêm - xóa - Tổng Tiền</li>
                        <li>đăng nhập bằng google </li>
                        <li>Bình Luận</li>
                        <li>thich san pham</li>
                        <li>xem Sản Phẩm trước khi thêm vào giỏ hàng</li>
                        <li>sản phẩm mới , sản phẩm xem nhiều</li>
                        <li>Tìm Hình</li>
                        <li>Sử dụng redux lưu giỏ hàng</li>
                    </ol>
                </div>
            </div>
        </BoxContent>
    );
}


const BoxContent = styled.div`
    display: flex;
    padding: 7.5rem 0;
    min-height:100vh;
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;

    .BoxBaoCao{
        width: 80%;
        min-height:80vh ;
        border: 1px solid #000;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 5.5rem 7.5rem;

        .title{
            font-size: 5vh;
            color: #000;
            font-weight: bold;
            margin-bottom:50px;
        }

        .content{
            ol{
                li{
                    font-size:20px;
                    line-height:40px;
                    
                }   
            }
        }
    }
`

export default BaoCao