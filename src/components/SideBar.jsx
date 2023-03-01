import React from "react";
import styled from "styled-components";

const SideBar = ({filterPerf, searchPerf}) => {
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };

  const handleFilterChange = (e) => {
    filterPerf(e.target.value)
  
  };

  const filter = [
    { id: 7, filter: "All" },
    { id: 1, filter: "Floral" },
    { id: 2, filter: "Wood" },
    { id: 3, filter: "Aquatic" },
    { id: 4, filter: "Sweet" },
    { id: 5, filter: "Buzzy" },
    { id: 6, filter: "Aquatic" },
  ];

  return (
    <SidebarContainer>
      <div className="sideBar">
        <div className="inputContainer">
          <input
            type="text"
            className="searchInput"
            placeholder="Type here what you need to find"
            onKeyUp={handleSearchChange}
          />
        </div>
        <ul>
          {filter.length > 0 ? (
            filter.map((filt) => {
              return (
                <li key={filt.id} onClick={handleFilterChange}>
                  <button value={filt.filter}>{filt.filter}</button>
                </li>
              );
            })
          ) : (
            <li>
              <h4>No result</h4>
            </li>
          )}
        </ul>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .inputContainer {
    display: flex;
    margin-top: 10%;
    justify-content: center;
    align-items: center;
  }
  .searchInput {
    height: 2rem;
    width: 90%;
    border: none;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    color: black;
  }
  .searchInput::-webkit-input-placeholder {
    color: #8c8c8c;
  }
  li {
    list-style: none;
  }
  li button {
    color: black;
    width: 10rem;
    height: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: bold;
    background-color: transparent;
    border: none;
  }

  li button:hover {
    cursor: pointer;
    border-radius: 5px;
    color: #acac97;
    background-color: #3a7380;
    text-shadow: 0 1px black;
    box-shadow: -1px 2px #8c8c8c;
  }

  /* (1920x1080) Full HD Display */
  @media screen and (max-width: 1920px) {
    /* insert styles here */
    height: 56rem;
  }
  @media screen and (max-width: 1600px) {
    /* insert styles here */
    height: 36rem;
  }
  @media screen and (max-width: 1400px) {
    /* insert styles here */
    height: 36rem;
  }
`;
export default SideBar;
