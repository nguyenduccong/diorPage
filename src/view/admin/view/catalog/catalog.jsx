import React from 'react';
import styled from 'styled-components';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';


const CataAd = () =>{

    return(
        <BoxContent>
                        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem><Link to="/admin" >Quản Trị</Link></MenuItem>
                <SubMenu title="Danh Mục">
                    <MenuItem><Link to="/admin/" >Danh sách Danh Mục</Link></MenuItem>
                    <MenuItem><Link to="/admin/" >Thêm Danh Mục</Link></MenuItem>
                    <MenuItem><Link to="/admin" >Sửa Danh Mục</Link></MenuItem>
                </SubMenu>

                <SubMenu title="Sản Phẩm">
                    <MenuItem><Link to="/admin" >Danh sách Sản Phẩm</Link></MenuItem>
                    <MenuItem><Link to="/admin" >Thêm Sản Phẩm</Link></MenuItem>
                    <MenuItem><Link to="/admin" >Sửa Sản Phẩm</Link></MenuItem>
                </SubMenu>

                <SubMenu title="Khách Hàng">
                    <MenuItem><Link to="/admin" >Danh sách Khách Hàng</Link></MenuItem>
                    <MenuItem to="/admin" ><Link to="/admin" >Danh Sách Đơn Hàng</Link></MenuItem>
                </SubMenu>
            </Menu>
            </ProSidebar>

            Trang cata
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100vw;
    height: 100vh;
    background: #11d03d;
`

export default CataAd