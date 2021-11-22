import React from 'react';
import styled from 'styled-components';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';


const IndexAD = () =>{

    return(
        <BoxContent>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem><Link to="/admin" >Quản Trị</Link></MenuItem>
                    <SubMenu title="Danh Mục">
                        <MenuItem><Link to="/admin/cata" >Danh sách Danh Mục</Link></MenuItem>
                        <MenuItem><Link to="/admin/addcata" >Thêm Danh Mục</Link></MenuItem>
                        <MenuItem><Link to="/admin/editcata" >Sửa Danh Mục</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title="Sản Phẩm">
                        <MenuItem><Link to="/admin/product" >Danh sách Sản Phẩm</Link></MenuItem>
                        <MenuItem><Link to="/admin/addproduct" >Thêm Sản Phẩm</Link></MenuItem>
                        <MenuItem><Link to="/admin/editproduct" >Sửa Sản Phẩm</Link></MenuItem>
                    </SubMenu>

                    <SubMenu title="Khách Hàng">
                        <MenuItem><Link to="/admin/kh" >Danh sách Khách Hàng</Link></MenuItem>
                        <MenuItem to="/admin/dh" ><Link to="/admin" >Danh Sách Đơn Hàng</Link></MenuItem>
                    </SubMenu>
                    <SubMenu title="Thêm">
                        <MenuItem><Link to="/admin/img" >Tìm Hình</Link></MenuItem>
                        <MenuItem to="/admin/thời tiết" ><Link to="/admin" >Thời Tiết</Link></MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>

            <Content>
                trang Quản Trị
            </Content>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100%;
    height: 100vh;
`

const Content = styled.div`
    width: 100%;
    height: 100vh;
    padding-left:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:5vw
`

export default IndexAD