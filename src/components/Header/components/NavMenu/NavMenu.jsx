import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components'
import BoxCart from '../BoxCart/BoxCart';
import { useGoogleLogout } from 'react-google-login'
import { useSelector } from 'react-redux';
import { cartItemCountSelector } from '../../../../view/Cart/selector';

const NavMenu=(props)=>{
    console.log(props.home);
    const [showCart, setshowCart] = useState(false)
    const [user, setuser] = useState(null)
    const handleClickCart=()=>{
        setshowCart(!showCart);
    }

    const totalItems = useSelector(cartItemCountSelector);


    useEffect(() => {
        const storage = localStorage.getItem('user');

        if(storage){
            setuser(JSON.parse(storage))
        }else{
            localStorage.setItem('user', null);
        }
    },[])

    
    // else{
    //   localStorage.setItem('user', null);
    // }

    // console.log(storage===undefined);

    
    
    return(
        <BoxContent home={props.home} className={props.navbar?"active":""}>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.5 138.3"><path d="M1.5 2.7h64.2c55.2 0 76.8 32.4 76.8 66.7 0 34.9-27.7 66-80.4 66H1.6c-1.1 0-1.5-.7-1.5-1.3 0-.7.7-1.3 1.7-1.3h11.3c3.5 0 5.8-2.1 5.8-6V11.5c0-2.9-1.4-6.1-6-6.1H1.4C.5 5.4 0 4.8 0 4.1c0-.6.2-1.4 1.5-1.4m40.1 126.5c0 2.9 1.3 3.8 3.2 3.8h17c41.9 0 57.1-32.1 57.1-64.3S102.8 5.3 67.4 5.3H44.3c-2.4 0-2.6 2-2.6 2.9l-.1 121zM148.9 2.7c-1 0-1.9.4-1.9 1.2 0 .8.5 1.3 1.4 1.3h11.3c2.6 0 5.1 1.8 5.1 6.8v114.9c0 2.4-1.8 6-5 6h-11.2c-1.3 0-1.4 1-1.4 1.4 0 .4-.1 1.1 1.4 1.1H203c.8 0 1.9-.1 1.9-.9s-.2-1.6-1.6-1.6h-10.5c-1.5 0-5.6-.9-5.6-5.5V10.8c0-3.3 2.1-5.5 5.9-5.5h10.3c.9 0 1.4-.5 1.4-1.2s-.5-1.3-1.7-1.3h-54.2zm85 66.4c0-36.7 16.4-66.4 47.2-66.4 30.2 0 47.2 29.7 47.2 66.4s-15.5 66.4-47.2 66.4c-30.7.1-47.2-29.7-47.2-66.4m47.2 69.2c43.8 0 71.4-31 71.4-69.1S325.2 0 281.1 0c-44 0-71.4 31-71.4 69.1s28.5 69.2 71.4 69.2m211.4-3.7c-17.2 1.8-26.7-26.4-35.4-39.8-6.5-9.9-20.3-20-33.9-22 22.4-1.3 47.5-8.5 47.5-33.9 0-20.6-12.7-36.2-59.3-36.2h-53.7c-.7 0-1.4.4-1.4 1.2 0 .8.7 1.3 1.4 1.3H370c2.6 0 5.1 1.8 5.1 6.8v114.9c0 2.4-1.8 6-5 6H358c-1 0-1.4.8-1.4 1.2s.4 1.3 1.4 1.3h57c.8 0 1.5-.4 1.5-1.2 0-.8-.5-1.3-1.6-1.3h-11.5c-1.5 0-5.6-1-5.6-5.5V73.1h5.9c28.2 0 30.3 30.6 44.3 48.1 12 15 27.7 16.9 36.6 16.9 3.8 0 6.4-.1 8.8-.7 1.5-.5 1.8-3.1-.9-2.8m-89-129.4h8.3c14.2 0 37.2 5.6 37.2 32.4 0 24.6-20.4 32.9-39.3 32.9h-12.1V10.8c0-3.4 2.1-5.6 5.9-5.6"></path></svg>
            </div>

            <div className="boxMenu">
                <ul>
                    <li><Link to="/">Trang Chủ</Link></li>
                    {/* <li><a href="/product">Sản Phẩm</a></li> */}
                    <li><Link to="/cata/1">Đồ Nữ</Link></li>
                    <li><Link to="/cata/2">Đồ Nam</Link></li>
                    <li><Link to="/cata/3">Túi Xách</Link></li>
                    <li><Link to="/cata/4">Giày</Link></li>  
                </ul>

                <div className="cart"  onClick={handleClickCart}>
                    <i class="far fa-shopping-bag"></i>
                    <span>({totalItems})</span>
                </div>

               {
                   user === null ?
                   <div className="user">
                        <Link to="/signin"><i class="fad fa-user"></i></Link>
                    </div>
                    :
                    // <img src={`${user.imageUrl}`} alt="" width="20" />
                    <div className="user">
                        <Link id="BtnLogout" to="/signin">{user.name}</Link>
                    </div>

               }
            </div>

            <BoxCart navbar={props.navbar} show={showCart} handleClickCart={handleClickCart}></BoxCart>
        </BoxContent>
    );
}

const BoxContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 9999;
    border-bottom: 1px solid #e1e1e1;
    /* display: ${props=>props.display}; */
    transition: all .5s;
    transform:${props=>props.home?"translateY(-100%)":"translateY(0%)"};

    &.active{
        /* display: block ; */
        transform: translateY(0%);
    }

    .logo{
        max-width: 100px;
        margin: 0 auto;
        padding-top: 1rem;
    }

    .boxMenu{
        display: block;
        padding: 1rem;
        position: relative;
        width: 1320px;
        margin: 0 auto;

        ul{
            list-style: none;
            padding: 0;
            display: flex;
            margin: 0 ;
            justify-content: center;

            li{
                padding:0 15px;

                a{
                    text-decoration: none;
                    color: #000;
                    outline: none;
                }
            }
        }

        .cart{
            position: absolute;
            top: 50%;
            right: 24px;
            transform: translateY(-50%);
            font-size: 20px;
            color: #000;
            cursor: pointer;
            span{
                position: absolute;
                font-size: 15px;
                top: 20%;
                left: 130%;
            }
        }

        .user{
            position: absolute;
            top: 50%;
            right: 64px;
            transform: translateY(-50%);
            font-size: 20px;
            color: #000;
            cursor: pointer;
            a{
                color: #000;
            }
        }
    }
`

export default NavMenu