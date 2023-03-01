import React from "react";
import styled from "styled-components";

const PerfumesDetail = () => {
  return (
    <PerfumesDetailContainer>
      <img src="perfume.img" alt="Perfume Photo" />
      <div className="header">
        <h3>Perfume Name</h3>
      </div>
      <div className="body">
        <p>Perfume Details:</p>
        <ul>
          <li>Perfumer: perfumer</li>
          <li>Notes: ingredients</li>
          <li>Release Date: perfume.year</li>
        </ul>
      </div>
    </PerfumesDetailContainer>
  );
};
const PerfumesDetailContainer = styled.div``;
export default PerfumesDetail;
