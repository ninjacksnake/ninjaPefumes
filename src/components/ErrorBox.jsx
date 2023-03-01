import React from "react";
import styled from "styled-components";

const ErrorBox = ({ errorMessage, color }) => {
 
    const customStyle = {
    backgroundColor: color || "#ba5858",
  };

  return (
    <ErrorBoxContainer style={customStyle}>
      {errorMessage !== "" ? (
    <div>
    <h4>{errorMessage}</h4>
  </div>): null
    }
      
    </ErrorBoxContainer>
  );
};

const ErrorBoxContainer = styled.div`
  border: 1px solid #5c6373;
  height: 50px;
  color: white;
  border-radius: 5px;
`;

export default ErrorBox;
/* Color Theme Swatches in Hex */
