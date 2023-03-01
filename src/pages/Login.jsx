import React, { useContext, useState } from "react";

import styled from "styled-components";
import { Form, useLocation, useNavigate, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { AppContext } from "../providers/ContextProvider";
import Axios from "axios";

const Login = () => {
  //  const [user, setUser] = useState(null);
  const { user, loginCheck } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.pathname || "";
  const apiUsersUrl = "http://localhost:3200/api/v1/users";


  const handleLogin = (e) => {
    Axios.post(`${apiUsersUrl}/login`, e)
      .then((result) => {
        if (result.data.errorMessage){
         return alert(result.data.errorMessage);
        }else if(result.data.loggedIn){
          return navigate('/profile');
        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginContainer>
      <div className="flexContainer">
        <h1>Login</h1>
        <div className="boxDiv">
          <LoginForm handleLogin={handleLogin} />
        </div>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  background-color: #186868;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  height: 100vmin;
  /* border-radius: 10px; */
  text-align: center;

  h1 {
    color: white;
    /* font-weight: normal; */
    margin-left: 18%;
    letter-spacing: 1.5rem;
    text-shadow: 1px 2px black;
  }

  .boxDiv {
    padding: 20px;
    display: flex;
    width: 100%;
    background-color: #3cb0b0;
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 2px #183333;
  }
`;

export default Login;
