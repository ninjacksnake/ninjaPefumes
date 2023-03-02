import  Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ErrorBox from "./ErrorBox";


const handleRegister = async (data) => {
  const apiUsersUrl = "http://localhost:3200/api/v1/users";
  try {
    const result = await Axios.post(apiUsersUrl, data);
    console.log(result.data)
  } catch (error) {
    console.log(error);
  }
};

const RegisterForm = () => {
const [confirmPass, setconfirmPass] = useState("true")
const validateConfirmation = (pass, confirm) =>{
  if(pass !== confirm) {
    setconfirmPass(false);
    return false;
  }
   setconfirmPass(true);
   return true;
}
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
    validateConfirmation(data.password, data.confirm);
  if(confirmPass){
    handleRegister(data);
  }
};
    

  return (
    <FormContainer>
      <form method="post" action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <input
            placeholder="Write your name here"
            className="textBox"
            {...register("name", { required: "Name is required" })}
            aria-invalid={errors.userName ? "true" : "false"}
          />
          {errors.name ? (
            <ErrorBox errorMessage={errors.name.message} color="#ca5b64" />
          ) : null}
        </div>

        <div className="formGroup">
          <input
            placeholder="Write your email here"
            className="textBox"
            {...register("email", { required: "Email is required" })}
            aria-invalid={errors.userName ? "true" : "false"}
          />
          {errors.email ? (
            <ErrorBox errorMessage={errors.email.message} color="#ca5b64" />
          ) : null}
        </div>

        <div className="formGroup">
          <input
            placeholder="Write you username here"
            className="textBox"
            {...register("username", { required: "Username is required" })}
            aria-invalid={errors.userName ? "true" : "false"}
          />
          {errors.userName ? (
          <ErrorBox errorMessage={errors.userName.message} color="#ca5b64" />
        ) : null}

        </div>

        <div className="formGroup">
          <input
          type="password"
            className="textBox"
            placeholder="write password"
            {...register("password", {
              required: "password is required",
              minLength: 8,
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password ? (
            <ErrorBox
              errorMessage={"Password minimun length is 8 characters"}
              color="#ca5b64"
            />
          ) : null}
          {errors.password ? (
            <ErrorBox errorMessage={errors.password.message} color="#ca5b64" />
          ) : null}
        </div>
        <div className="formGroup">
          <input
          type="password"
          
            className="textBox"
            placeholder="Confirm password"
            {...register("confirm", {
              required: "password confirmation is required",
              minLength: 8,
            })}
            // aria-invalid={errors.password ? "true" : "false"}
          />
          {confirmPass === false ? <ErrorBox errorMessage={"Password and confirmation are not the same"} />:null}
          {errors.confirm ? (
            <ErrorBox errorMessage={errors.confirm.message} color="#ca5b64" />
          ) : null}
          {errors.confirm ? (
            <ErrorBox
              errorMessage={"Confirmation minimun length is 8 characters"}
              color="#ca5b64"
            />
          ) : null}
        </div>
        

        
        <div className="formGroup">
          <button className="submitButton" type="submit">
            {" "}
            Register{" "}
          </button>
        </div>
        <small>
          Registered already? login <a href="/login">here</a>
        </small>
      </form>
    </FormContainer>
  );
};
const FormContainer = styled.div`
  display: flex;
  width: 22rem;
  max-height: 27rem;
  justify-content: center;
  background-color: #3cb0b0;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 2px #183333;
  padding: 30px;
  overflow: auto;
 
  ::-webkit-scrollbar-thumb{
    background: #183333; 
    border-radius:4px;
  }
  ::-webkit-scrollbar-track{
    color:white;
  }

  ::-webkit-scrollbar{
   width: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
  
  background: #555; 
} 

  .textBox {
    margin-bottom: 10px;
    height: 2.5rem;
    width: 20rem;
    border: none;
    border-radius: 3px;
    box-shadow: 1px 1px 1.5px 3px #378080;
    text-align: center;
  }

  .submitButton {
    margin-top: 0.3rem;
    margin-bottom: 0.3em;
    /* float: right; */
    border: none;
    height: 2.5rem;
    width: 100%;
    border-radius: 5px;
    border: none;
    display: block;
    box-shadow: 0.5px 0.5px 1px 1px #6cb6b6;
    background-color: rgba(41, 100, 148, 0.8);
    font-size: large;
    letter-spacing: 3px;
    color: white;
  }

  .submitButton:hover {
    background-color: #244283;
    box-shadow: 0.5px 0.5px 1px 1px #feffff;
  }

  .formGroup {
    /* margin: 10px;
    padding: 5px; */
  }

  small {
    color: #d1f1f1;
  }
`;
export default RegisterForm;
