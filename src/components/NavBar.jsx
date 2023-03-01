import React, { useState } from "react";
import styled from "styled-components";
import { FaBeer, FaCartArrowDown } from "react-icons/fa";
import Modal from "react-modal";

const NavBar = ({user}) => {
  const brand = "NINJASOFT";

  // console.log('', user);
  const [cartModal, setShowCartModal] = useState(false);
  
  const toggleCartModal = (e) => {
    setShowCartModal(!cartModal);
    //  console.log(cartModal)
  };
  
  Modal.setAppElement(document.getElementsByClassName("cartButton"));
  
  return (
    <NavBarContainer>
      <div className="navBar">
        <h1 className="navBarLogo">{brand}</h1>
        <ul className="navigation">
          <li>
            <a href="#">link1</a>
          </li>
          <li>
            <a href="#">Link2</a>
          </li>
          <li>
            <a href="#">Link3</a>
          </li>
          <li>
            <a href="#">Link4</a>
          </li>
          <li>
            <a href="#">Link5</a>
          </li>
          <li>
            <a href="#" className="cartButton" onClick={toggleCartModal}>
              {user}
              <span>
                <FaCartArrowDown />
              </span>
            </a>
          </li>
        </ul>
      </div>

      <Modal isOpen={cartModal}>
        <div className="modaHeader">
          <h1> Cart</h1>
          <h3>{user}</h3>
          <h3>Date</h3>
          <button className="modalCloseBtn" onClick={toggleCartModal}>
            Close{" "}
          </button>
        </div>
        <div className="modalBody">
          <ul>
            <hr />
            <li>
              <div>Product Name: </div>
              <div>Product information</div>
              <div>price:</div>
            </li>
            <hr />
            <li>
              <div>Product Name: </div>
              <div>Product information</div>
              <div>price:</div>
            </li>
            <hr />
            <li>
              <div>Product Name: </div>
              <div>Product information</div>
              <div>price:</div>
            </li>
            <hr />
            <li>
              <div>Product Name: </div>
              <div>Product information</div>
              <div>price:</div>
            </li>
            <hr />
            <li>
              <div>Product Name: </div>
              <div>Product information</div>
              <div>price:</div>
            </li>
            <hr />
          </ul>
        </div>
      </Modal>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  .navBarLogo {
    margin: 0 0 0 0.45em;
  }

  .navBarLogo a {
    color: rgb(28, 24, 22);
  }

  .navBarLogo,
  .navigation {
    list-style: none;
    text-transform: uppercase;
  }

  .navBarLogo a,
  .navBar a {
    text-decoration: none;
    letter-spacing: 0.3em;
  }

  .navigation {
    display: flex;
  }

  .navigation a {
    display: block;
    padding: 1em;
    color: white;
  }

  .navigation a:hover {
    background: #00ace6;
  }

  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: deepskyblue;
  }

      
`;

export default NavBar;
