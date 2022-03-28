import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import prouctApi from '../../../../api/productApi';


const ProductAd = () => {

    const [kh, setkh] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await prouctApi.GetProducts()
            // const data = await res.data
            // console.log(data)
            setkh(res)
        }

        fetchProduct()

    }, [])

    return (
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

            <Content>

                <table  className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">hình</th>
                            <th scope="col">Tên Sản Phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kh === null ?
                            ""
                            :
                            kh.map(item => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td><img src={`../images/home/${item.urlImg}`} /></td>
                                    <td>{item.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Content>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100%;
`

const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-left:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right:20px;

    img{
        width: 150px;
    }
`

export default ProductAd