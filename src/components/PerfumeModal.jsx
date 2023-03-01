import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const ModalStyles = {
  overlay: {
    //     backgroundColor: 'gray',
  },
  content: {
    position: "absolute",
    top: "10%",
    left: "25%",
    right: "25%",
    bottom: "10%",
    width: "50%",
  },
};

const ModalContainer = styled.div``;
const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: bisque;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  /* h1{
    margin-left:5%;
  } */

  button {
    background-color: #e3c6a4;
    border: none;
    height: 2rem;
    border-radius: 5px;
    color: #786753;
  }

  button:hover {
    cursor: pointer;
    background-color: #f13535;
    color: white;
  }
`;
const ModalBodyContainer = styled.div``;

const ModalBody = ({ perfume }) => {
  return (
    <ModalBodyContainer>
      <ul>
        <hr />
        <li>
          <h3>Product Name: {perfume.name}</h3>
          <p>Product information:</p>
          <p>{perfume.description}</p>
        </li>
        <hr />
      </ul>
    </ModalBodyContainer>
  );
};
const toggle = ({ toggle }) => {
  toggle();
};
const ModalHeader = ({ perfume, togglePerfumeModal }) => {
  return (
    <ModalHeaderContainer>
      <h1> Perfume Detail </h1>
      <button className="modalCloseBtn" onClick={togglePerfumeModal}>
        X{" "}
      </button>
    </ModalHeaderContainer>
  );
};

const PerfumeModal = ({ isOpen, togglePerfumeModal, perfume }) => {
 
  return (
    <ModalContainer>
      <Modal isOpen={isOpen} style={ModalStyles}>
        <ModalHeader
          perfume={perfume}
          togglePerfumeModal={togglePerfumeModal}
        />
        <hr />
        <ModalBody perfume={perfume} />
      </Modal>
    </ModalContainer>
  );
};

export default PerfumeModal;
