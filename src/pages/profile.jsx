import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatars/toucan.png";

const profile = () => {
  return (
    <ProfileContainer>
      <div className="headerContainer">
        <div className="profile-picture">
          <img src={avatar} alt="Profile Picture" />
        </div>
        <div className="profile-info">
          <h1>John Doe</h1>
          <p>
            Bio: This is a breaf of the user info This is a breaf of the user
            info.
          </p>
          <button> Edit Profile </button>
        </div>
      </div>
     
      <div className="mainContainer">
      <h1>Products</h1>
        <div className="productsContainer">
          <div className="productBox">
            Product description
          </div>
          <div className="productBox"> Product description </div>
          <div className="productBox"> Product description </div>
          <div className="productBox"> Product description </div>
          <div className="productBox"> Product description </div>
          <div className="productBox"> Product description </div>
        </div>
      </div>
    </ProfileContainer>
  );
};
const ProfileContainer = styled.div`
  background-color: #186868;

  .productBox {
  background-color: red;
  height: 150px;
  width: 150px;
  }
  .mainContainer {
    display: flex;
    background-color: #a7c2c2;
    padding-left: 7%;
    text-align: center;
    align-items: center;
  }

  .productsContainer {
    background-color: #777a7a;
    margin-left: 20px;
    display: grid;
    
    grid-template-columns: auto auto auto auto auto auto;
    gap: 10px;
    justify-content: center; 
  }

  .headerContainer {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
  }

  .profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-info h1 {
    font-size: 24px;
    margin: 0;
  }

  .profile-info p {
    margin: 10px 0;
  }

  .profile-info button {
    padding: 10px 20px;
    background-color: #3498db;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default profile;
