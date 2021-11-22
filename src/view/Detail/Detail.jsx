import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import prouctApi from '../../api/productApi';
import Header from '../../components/Header/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedProduct from './components/RelatedProduct/RelatedProduct';
import Loadding from '../../components/Loadding/Loadding';
import { Skeleton } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Cart/cartSlide';



const Detail = (props)=>{
    const math = useRouteMatch();
    const id = math.params.id;
    console.log(math.params.id);
    const [detail, setdetail] = useState({});
    const [count, setcount] = useState(1);
    const match = useRouteMatch();
    const [user, Setuser] = React.useState(null);
    const [ListCmt, Setcmt] = React.useState([]);

    const dispatch = useDispatch()


    const ClickAugment = () => {
        setcount(count+1);
      }
    
      const ClickReduce = () => {
        setcount(count-1);
      }

      const refname = useRef('')
      const refContent = useRef('')
     

      const handleForm = async()=>{
        const dataCmt={};
        console.log(match);
        dataCmt.name=(refname.current.value);
        dataCmt.imgUser=user.imageUrl;
        dataCmt.idProduct=match.params.id;
        dataCmt.content=(refContent.current.value);
        console.log(dataCmt);
    
        const url="https://60fa72f27ae59c001716613f.mockapi.io/api/Comment";
         await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(dataCmt) // body data type must match "Content-Type" header
        });

        window.location=`/product/${match.params.id}`
     }

     const handleAlert =() =>{
        alert("Vui lòng đăng nhập! ")
      }
    
    
    useEffect(() => {

        const storage = localStorage.getItem('user');

        if(storage){
            Setuser(JSON.parse(storage))
        }else{
            localStorage.setItem('user', null);
        }

        const fetchDetail = async()=>{
            const res = await prouctApi.GetProductsById(id);
            setdetail(res);
        }

        fetchDetail();

        const url="https://60fa72f27ae59c001716613f.mockapi.io/api/Comment";

        const fetchCmt = async()=>{
          const res = await fetch(url);
          const data = await res.json();
          const datacmt = await data.filter(item=>item.idProduct==match.params.id);
          Setcmt(datacmt);
        }
  
        fetchCmt();
    },[id])

    const handleAddtocart =()=>{
        console.log("SubmitCart",detail);
        const action = addtoCart({
            id:detail.id,
            product:detail,
            quantity:count
        });
        console.log(action);
        dispatch(action)
    }

    return(
        <BoxContent>
            <Header narbar={props.changedBackground}></Header>

            <Title>
                    <div className="container">
                        <h3>product details</h3>
                    </div> 
                </Title>

            <div className="container">

                {/* ====================deail================= */}

                {detail.id === undefined ?

                    <Loadding></Loadding>

                    :

                    <BoxProduct>
                    <ImgProduct>
                        <img src={`../images/home/${detail.urlImg}`} alt="" />
                    </ImgProduct>

                    <ContentProduct>                       
                    <div className="content">
                            <h4>{detail.name}</h4>
                            <div className="description">{detail.subtitle}</div>
                            <span className="price">{detail.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span> 
                            <div className="description">{detail.describe}</div>

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

                                <div className="boxAddCart" onClick={handleAddtocart}>
                                    Thêm Vào Giỏ Hàng
                                </div>

                            </BoxCart>
                        </div>
                    </ContentProduct>
                </BoxProduct>

                }

                {/* ====================Tab================= */}

                <Tabs>
                    <TabList>
                    <Tab>Mô Tả Sản Phẩm</Tab>
                    <Tab>Đánh Giá Sản Phẩm</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="description">{detail.describe}</div>
                    </TabPanel>
                    <TabPanel>
                        <BoxComent>
                        
                            <div className="listCmt">
                                {ListCmt.length ===0?
                                    <div className="itemCmt">
                                    <div className="img">
                                        <Skeleton variant="rect" width={150} height={150} />

                                    </div>
                                    <div className="contentCmt">
                                    <div className="name"><Skeleton variant="text" /></div>
                                        <p>
                                            <Skeleton variant="rect" width={550} height={100} />
                                        </p>
                                    </div>
                                </div>
                                    :
                                    ListCmt.map((item)=>(
                                        <div className="itemCmt">
                                        <div className="img">
                                            <img src={`${item.imgUser}`} alt="" />
                                        </div>
                                        <div className="contentCmt">
                                        <div className="name">{item.name}</div>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>

                            <h1>Đánh Giá Của Bạn</h1>
                            {user ===null ?
                            <div className="formCmt">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tên</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Nội Dung</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""}  />
                            </div>

                            <div className="btn" onClick={handleAlert}>Gửi</div>
                                                     
                        </div>
                        :
                            <div className="formCmt">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Tên</label>
                                <input type="text" className="form-control" value={`${user.name}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên" ref={refname}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Nội Dung</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} ref={refContent} />
                            </div>

                            <div className="btn" onClick={handleForm}>Gửi</div>
                                                    
                        </div>    
                        }
                        </BoxComent>
                    </TabPanel>
                </Tabs>
                {/* ====================RelatedProduct================= */}

                <RelatedProduct></RelatedProduct>
            </div>
            
        </BoxContent>
    );
}


const BoxContent = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 100px;
    .container{
        width: 90%;
        margin: 0  auto;
    }

    .react-tabs__tab-panel--selected {
    padding: 20px;
}
`

const Title = styled.div`
    padding: .5rem 0;
    background: #f1efef;
`

const BoxProduct = styled.div`
    margin: 7.5rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
`

const ImgProduct = styled.div`
    width: 50%;
    min-height: 500px;

    img{
        width: 100%;
    }
`

const ContentProduct = styled.div`
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
        /* padding-bottom: 10px; */
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

    .description{
        margin-bottom: 10px;
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

const BoxComent= styled.div`
    .listCmt{
        width: 100%;
        padding: 2rem 0;
        
        .itemCmt{
            width: 80%;
            padding: 1rem 0;
            display: flex;
            flex-direction: row;
            align-items:flex-start;

            .img{
                width: 150px;
                margin-right: 20px;
                img{
                    width: 100%;
                }
            }

            .contentCmt{
                .name{
                    font-size: 20px;
                    color: #000;
                    margin-bottom: 10px;
                    font-weight: bold;
                }
            }
        }
    }

    .formCmt{
        padding: 2rem 0;

        .form-group{
            margin-bottom: 20px;
        }

        .btn{
            color: #000;
            border: 1px solid #000;
            transition: all .5s;
            padding: .5rem 3rem;

            &:hover{
                color: #fff;
                background: #000;
            }
        }
    }
`


export default Detail