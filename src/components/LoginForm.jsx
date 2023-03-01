import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";


const LoginForm = ({handleLogin}) => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <FormContainer>
      <form method="post" action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <label htmlFor="userName">Username : </label>
          <input
            className="textBox"
            {...register("userName", { required: "Username is required" })}
            aria-invalid={errors.userName ? "true" : "false"}
          />
        
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password : </label>
          <input
            className="textBox"
            {...register("password", {
              required: "password is required",
              minLength: 8,
            })}
            // aria-invalid={errors.password ? "true" : "false"}
          />
        </div>
        <small>Not registered yet? do it <a href="/register">here</a></small>
        {errors.password ? (
          <p role={"alert"}>Password minimun length is 8 characters</p>
        ) : null}
        {errors.password ? (
          <p role={"alert"}>{errors.password.message}</p>
        ) : null}
       
        {errors.userName ? (
          <p style={{ color: "red" }} role={"alert"}>
            {errors.userName.message}
          </p>
        ) : null}
        <div className="formGroup">
          <input className="submitButton" type="submit" /> 
        </div>
      </form>
    </FormContainer>
  );
};
const FormContainer = styled.div`
  display: flex;

  .textBox {
    margin-left: 20px;
    height: 25px;
    width: 12rem;
    border: none;
    border-radius: 5px;
  }

  .submitButton {
    float: right;
    border: none;
    height: 2rem;
    width: 5rem;
    border-radius: 5px;
  }

  .formGroup {
    margin: 10px;
    padding: 5px;
  }
`;

export default LoginForm;
