import React, { useState } from "react";
import styled from "styled-components";
import PerfumeModal from "../components/PerfumeModal";
import { v4 as uuidv4 } from "uuid";

const PerfumeCard = ({ perfume }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglePerfumeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PerfumeCardContainer onClick={togglePerfumeModal}>
      <div className="flip-card" >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="img_avatar.png"
              alt="Avatar"
              // style="width:300px;height:300px;"
            />
          </div>
          <div className="flip-card-back">
            <h1>{perfume.name}</h1>
            <p>Description: {perfume.description}</p>
            <p>Perfume: {perfume.perfumer}</p>
          </div>
        </div>
      </div>

      <PerfumeModal
        perfume={perfume}
        isOpen={isOpen}
        togglePerfumeModal={togglePerfumeModal}
        key={uuidv4()}
      />
    </PerfumeCardContainer>
  );
};

const PerfumeCardContainer = styled.div`
  display: block;
  min-width: 200px;
  width: auto;
  cursor: pointer;
  text-align: center;

  border: 1px solid #ccc;
  color: black;

  /* :hover {
   scale: 1.1;
   z-index:1;
  } */

  .flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
`;

export default PerfumeCard;
