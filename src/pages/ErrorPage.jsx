import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
 // const error = useRouteError();
 // console.error(error);
  return (
    <ErrorPageContainer>
      <div className="container">
        <h1>Oops!</h1>
        <div>
          <p>Sorry something has occurred!</p>
        </div>
        <div>
          <p>
            {/* <i>{error.statusText || error.message}</i> */}
          </p>
        </div>
      </div>
    </ErrorPageContainer>
  );
};

const ErrorPageContainer = styled.div`
.container{
    display:flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.container  div{
    display: block;
    
}
`;

export default ErrorPage;
