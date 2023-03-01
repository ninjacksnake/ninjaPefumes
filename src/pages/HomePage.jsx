import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <ul className="list">
        <li>ELement from List</li>
        <li>ELement from List</li>
        <li>ELement from List</li>
      </ul>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  
  .list > li {
    list-style: none;
    letter-spacing: .20px;
  }
`;
export default HomePage;
