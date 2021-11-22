import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import { useSnackbar } from 'notistack';
import { Modal } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { addtoCart } from '../../view/Cart/cartSlide';
import { useDispatch } from 'react-redux';


const ItemProduct =(props)=>{
    const {enqueueSnackbar}= useSnackbar()

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const [count, setcount] = useState(1);
  const [wishlist, setwishlist] = useState(false);
    const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ClickAugment = () => {
    setcount(count+1);
  };

  const ClickReduce = () => {
    setcount(count-1);
  };

  const handleClickWishlist=() => {
    setwishlist(!wishlist);
  };


  const handleClick = () => {
        window.location = `/product/${props.id}`;    
  };

  const Addcart = (item,quantity)=>{
    enqueueSnackbar('Đã Thêm Vào Giỏ Hàng',{variant:'success'});
    handleClose();
    const action = addtoCart({
        id:item.id,
        product:item,
        quantity:quantity
    });
    console.log(action);
    dispatch(action)
    }


  console.log(props.sp);

    return(

        <BoxContent width={props.width}>
            {/* { props.sp ?
                <Skeleton variant="rect" height={218} />
                : */}
                <BoxImg>
                <Link to={`/product/${props.id}`}><img src={props.img} alt="" /></Link>
                <BostList className="showSP">
                    <div className="item" onClick={handleClickWishlist}>{wishlist ?<i class="fas fa-heart red"></i>:<i class="far fa-heart"></i>}</div>
                    <div className="item"onClick={() => Addcart(props.sp,1)}><i class="fas fa-cart-plus"></i></div>
                    <div className="item" onClick={handleOpen}><i class="far fa-eye"></i></div>
                </BostList>
            </BoxImg>
            {/* } */}

            <BoxText>
                <div className="name">
                    <span className="nameSP"><Link onClick={handleClick} >{props.sp.name}</Link></span>
                    <span>{props.sp.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                </div>
                
                <p>{props.subtitle}</p>
            </BoxText>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="BoxModal"
            >
                <Preview>
                    <ImgPreview>
                        <img src={props.img} alt="" />
                    </ImgPreview>


                    <ContentPreview>
                        <div className="close" onClick={handleClose}>
                            <i class="fal fa-times"></i>
                        </div>

                        <div className="content">
                            <h4>{props.name}</h4>
                            <span className="price">{props.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                            <div className="description">{props.description}</div>

                            <BoxCart>
                                <div className="boxAmount">
                                    { count === 1?
                                        <span className="click disabled"><i class="fas fa-minus"></i></span>
                                        :
                                        <span onClick={ClickReduce} className="click"><i class="fas fa-minus"></i></span>
                                    }
                                    <span>{count}</span>
                                    <span onClick={ClickAugment}  className="click"><i class="fas fa-plus"></i></span>
                                </div>

                                <div className="boxAddCart" onClick={()=>Addcart(props.sp,count)}>
                                    Thêm Vào Giỏ Hàng
                                </div>

                            </BoxCart>
                        </div>
                    </ContentPreview>
                </Preview>
            </Modal>

        </BoxContent>

    );
}

const BoxContent = styled.div`
    width: ${props=>props.width};
    margin-bottom: 100px;


`

const BoxImg = styled.div`  
    overflow:hidden;
    position: relative;     
    height: 80%;
    img{
        width: 100%;
        height: 100%;
    }

    &:Hover{
        .showSP{
            transform: translateY(0%);
        }
    }
`

const BostList = styled.div`
    position: absolute;
    bottom: 0%;
    left: 0;
    right: 0;
    width: 100%;
    background: #fff;
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content:center;
    overflow:hidden;

    &.showSP{
        transition: all .5s;
        transform: translateY(100%);
    }

    .item{
        width: 100%;
        border-right:1px solid #000;
        text-align: center;

        &:nth-last-child(1) {
            border: none;
        }

        i{
            color:#000;
            cursor: pointer;
            font-size:20px;

            &.red{
                color:#d45769;
            }
        }
    }

`

const BoxText = styled.div`
    padding-top:20px;
    
    .name{
        display: flex;
        flex-direction: column;
        justify-content:space-between;

        span{
            &.nameSP{
                /* width: 78%; */
                font-size: 16px;
                padding-bottom: 10px;
                a{
                    text-decoration: none;
                    color:black;
                }
            }
            color: black;
            line-height: 1.5rem;
            display: block;
            font-size: 20px;
            font-weight: bold;
         }
    }
`

const Preview = styled.div`
    min-width: 1000px;
    background: #fff;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    outline: none;
    display:flex;
    flex-direction: row;
`

const ImgPreview = styled.div`
    width: 50%;

    img{
        width: 100%;
        height: 100%;
    }
`

const ContentPreview = styled.div`
    width: 50%;
    padding: 75px 44px 59px;
    position: relative;

    .close{
        position: absolute;
        right: 34px;
        top: 24px;
        cursor: pointer;

        i{
            font-size: 20px;
        }
    }

    h4{
        width: 80%;
        font-size: 16px;
        padding-bottom: 10px;
        color: black;
        line-height: 1.5rem;
        display: block;
        font-size: 20px;
        font-weight: bold;
    }

    .price{
        font-size: 20px;
        position: relative;
        display: block;
        line-height: 1;
        color: #000;
        font-weight:bold; 
        margin-bottom: 20px;

    }
`

const BoxCart = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;    
    .boxAmount{
        width: 30%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        span{
            width: 100%;
            text-align: center;
            line-height: 40px;
            height:40px;
            color:#000;
            background: #f1efef;

            &.disabled{
                border: 1px solid #919191 !important;
                color:#919191;

                &:hover{
                    background: #fff !important;
                    color: #919191 !important;
                }
            }

            &.click{
                border:1px solid #000;
                cursor: pointer;
                background: #fff;
                transition: all .5s;

                &:hover{
                    background: #000;
                    color: #fff;
                }
            }
        }

    }
    .boxAddCart {
            /* width: 40%; */   
            border: 1px solid #000;
            color:#000;
            padding: 0rem 2rem;
            line-height: 40px;
            transition: all .5s ease;
            cursor: pointer;
            margin-left:40px;

            &:hover{
                background: #000;
                color:#fff;
            }

        }
`

export default ItemProduct