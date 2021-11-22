import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import prouctApi from '../../../../api/productApi';


const Img = () =>{
    const [img, setimg] = useState(null)
    const tukhoa = useRef("")

    const submitImg=(e)=>{
        e.preventDefault();
        let tk  = tukhoa.current.value;
        let page =1;
        let per_page = 20;
        let yourKey = "4lTwMbivObq9S49lEIFS0ZIntsd57vS3zAQYhfaaZao";
        let url = "https://api.unsplash.com/search/photos";
        let fullUrl = `${url}?query=${tk}&page=${page}&per_page=${per_page}&client_id=${yourKey}`;

        fetch(fullUrl)
        .then(res =>{
            if(!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then(data=>{
            let pictures = data.results;
            setimg(pictures);
            
        })
        .catch(err=>{
            console.log(err);
        })
        console.log(tk);
    }



    console.log(img);

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
                </Menu>
            </ProSidebar>

            <Content>
               
                <form className="col-9 m-auto" onSubmit={submitImg} >
                    <input type="text" ref={tukhoa} className="form-control" />
                    <button type="button" onClick={submitImg} className="btn btn-dark">Tìm Hình</button>
                </form>

                <div className="BoxImg">
                    {img===null?
                    ""
                    :
                    img.map(item=>(
                        <img src={item.urls.regular}/>
                    ))    
                }
                </div>

            </Content>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    width: 100%;
    min-height: 100vh;
`

const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-left:300px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding-right:20px;

    .BoxImg{
        width: 90%;
        margin: 0 auto;
        padding-top:20px ;
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        img{
            width: 250px;
            margin: 10px 0;
            box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.02),
                0 6.7px 5.3px rgba(0, 0, 0, 0.028),
                0 12.5px 10px rgba(0, 0, 0, 0.035),
                0 22.3px 17.9px rgba(0, 0, 0, 0.042),
                0 41.8px 33.4px rgba(0, 0, 0, 0.05),
                0 100px 80px rgba(0, 0, 0, 0.07)
                ;

        }
    }
`

export default Img