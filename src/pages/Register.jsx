import React from "react";
import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";

const handleRegister = async () => {};
const Register = () => {
  const apiUsersUrl = "http://localhost:3200/api/v1/users";
  return (
    <RegisterContainer>
      <div className="flexContainer">
        <div className="boxDiv">
          <RegisterForm handleRegister={handleRegister} />
        </div>
      </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
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

  /* .boxDiv {
    padding: 20px;
    
    width: 25vh;
    background-color: #3cb0b0;
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 2px #183333;
  } */
`;

export default Register;
