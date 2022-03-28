import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header/Header';



const Signin = (props) => {

  const [show, setshow] = useState(false);

  const toggleForm = () => {
    setshow(!show)
  }

  return (
    <BoxContent>
      <Header narbar={props.changedBackground}></Header>

      <section>

        <div className={show ? "container active" : "container"}>
          <div className="user signinBx">
            <div className="imgBx"><img src="./images/home/signin.jpg" alt="" /></div>
            <div className="formBx">
              <form action>
                <h2>Đăng Nhập</h2>
                <input type="text" name id placeholder="Username" />
                <input type="password" name id placeholder="Password" />
                <button type="button">Đăng Nhập</button>
                <p className="signup">Bạn Chưa Có Tài khoản? <span onClick={toggleForm}>Đăng Ký.</span></p>
              </form>
            </div>
          </div>

          <div className="user signupBx">
            <div className="formBx">
              <form action>
                <h2>Tạo Tài Khoản</h2>
                <input type="text" name id placeholder="Nhâp UserName" />
                <input type="text" name id placeholder="Đia Chỉ Email" />
                <input type="password" name id placeholder="Mật Khẩu" />
                <input type="password" name id placeholder="Nhập lại Mật Khẩu" />
                <button type="submit">Đăng Ký</button>
                <p className="signup">Bạn Đã Có Tài Khoản ? <span onClick={toggleForm}>Đăng Nhập.</span></p>
              </form>
            </div>
            <div className="imgBx"><img src="./images/home/signup.jpg" alt="" /></div>
          </div>
        </div>
      </section>
    </BoxContent>
  );
}

const BoxContent = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center; 

    section {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: 0.5s;
    background-image: url(../img/bg.jpg);
  }
  section.active {
    background-image: url(../img/bg2.jpg);
  }
  
  section .container {
    position: relative;
    width: 800px;
    height:500px;
    background: #fff;
    box-shadow: 0 15px 50px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  
  section .container .user {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }
  
  section .container .user .imgBx {
    position: relative;
    width: 50%;
    height: 100%;
    transition: 0.5s;
  }
  
  section .container .user .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  section .container .user .formBx {
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: 0.5s;
  }
  section .container .user .formBx .BtnLogin{
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)
  !important
;

  }
  
  section .container .user .formBx h2 {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #555;
  }
  
  section .container .user .formBx input {
    width: 100%;
    padding: 10px;
    background: #f5f5f5;
    color: #333;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 14px;
    margin: 8px 0;
    letter-spacing: 1px;
    font-weight: 300;
  }
  
 
  
  section .container .user .formBx button {
    width: 100%;
    margin: 8px 0;
    padding: 10px;
    border: none;
    outline: none;
    box-shadow: none;
    /* max-width: 100px; */
    background: #677eff;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing:1px;
    transition: 0.5s;
  }
  
  section .container .user .formBx .signup {
    position: relative;
    font-family: 'Lato', sans-serif;
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
    font-weight: 300;
  }
  
  section .container .user .formBx .signup span {
    font-weight: 600;
    text-decoration: none;
    color: #677eff;
    cursor: pointer;
  }
  section .container .user .signupBx .formBx button {
    background: #e73e49;
  }
  section .container .signupBx{
    pointer-events: none;
  }
  section .container.active .signupBx{
    pointer-events: initial;
  }
  section .container .signupBx .formBx {
    top: 100%;
  }
  section .container.active .signupBx .formBx {
    top: 0;
  }
  section .container .signupBx .imgBx {
    top: -100%;
    transition: 0.5s;
  }

  section .container.active .signupBx .imgBx {
    top: 0;
  }
  section .container .signinBx .formBx{
    top: 0;
  }
  section .container.active .signinBx .formBx{
    top: 100%;
  }
  section .container .signinBx .imgBx{
    top: 0;
    transition: 0.5s;
  }
  section .container.active .signinBx .imgBx{
    top: -100%;
  }
  @media (max-width: 992px){
    section .container{
      max-width: 400px;
    }
    section .container .imgBx{
      display: none;
    }
    section .container .user .formBx{
      width: 100%;
    }
  }
  
`



export default Signin