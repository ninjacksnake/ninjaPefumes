import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Layout = ({ filterPerf, searchPerf}) => {
  const {user} = useContext
  return (
    <LayoutContainer>
      <div className="navBarContainer">
        <NavBar user={user} />
      </div>
      <div className="flexContainer">
        <div className="sidebarContainer">
          <SideBar  filterPerf={filterPerf} searchPerf={searchPerf}/>
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
        <div className="footerContainer"></div>
      </div>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
 
  width: 100%;
  height: 100%;

  .navBarContainer {
    width: 100%;
    height:100%;
  }

  .flexContainer {
    display: flex;
    flex-wrap: nowrap;
  }

  .sidebarContainer {
    margin: 0 ;
    min-width:200px;
    width: 20%;
    background-color: #3b95f677;
  }

  .contentContainer {
    display: flex;
    flex-wrap: wrap;
    margin-left: .50%;
    /* margin-right: .10%; */
    width: 100%;
    height: 100%;
  }

`;
export default Layout;
