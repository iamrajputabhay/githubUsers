import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
const Login = () => {
  return (
    <Wrapper>
      <img className="login-img" src={loginImg} alt="login image"/>
      <h2 className="user-name">just fill the credentials</h2>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  .login-img {
    margin-bottom:.1rem;
    width:500px;
    height:400px;
  }
  .user-name {
    margin-bottom:14rem;
  }
  
  
  
`;
export default Login;
