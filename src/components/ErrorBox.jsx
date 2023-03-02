import React from "react";
import styled from "styled-components";

const ErrorBox = ({ errorMessage, color }) => {
  const customStyle = {
    //  backgroundColor: color || "#ba5858",
  };

  return (
    <ErrorBoxContainer style={customStyle}>
      {errorMessage !== "" ? (
        <div>
          <p>{errorMessage}</p>
        </div>
      ) : null}
    </ErrorBoxContainer>
  );
};

const ErrorBoxContainer = styled.div`
  /* border: 1px solid #5c6373; */

  background-color: #b39393;
  border-radius: 5px;
  p {
    /* color: #ab4848; */
    color: #3c0707;
  }
`;

export default ErrorBox;
/* Color Theme Swatches in Hex */
